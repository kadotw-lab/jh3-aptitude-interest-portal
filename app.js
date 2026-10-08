/**
 * 國三美班 學生興趣測驗與性向測驗家長查詢系統
 * 前端核心業務邏輯與視覺化模組
 */

const app = {
  currentStudent: null,
  aptitudeChartInstance: null,
  interestChartInstance: null,
  clusterCategoryFilter: 'ALL',

  init() {
    console.log('系統初始化完成，共有', Object.keys(APP_DATA.encrypted_students).length, '位學生加密資料');
    // 預設渲染群科導覽
    this.renderClusters();
  },

  /**
   * 快速填入測試帳號
   */
  async quickFill(seat, idNumber) {
    document.getElementById('seatInput').value = seat;
    document.getElementById('idInput').value = idNumber;
    await this.handleLogin();
  },

  /**
   * 使用 Web Crypto API (AES-256-GCM) 進行客戶端即時安全解密
   */
  async decryptStudentData(seat, inputKey) {
    const encObj = APP_DATA.encrypted_students[seat];
    if (!encObj) return null;

    try {
      const last3 = inputKey.slice(-3).toUpperCase();
      const password = `${seat}_${last3}`;
      const enc = new TextEncoder();
      const hashBuffer = await crypto.subtle.digest('SHA-256', enc.encode(password));
      const cryptoKey = await crypto.subtle.importKey('raw', hashBuffer, { name: 'AES-GCM' }, false, ['decrypt']);

      const iv = Uint8Array.from(atob(encObj.iv), c => c.charCodeAt(0));
      const cipherBytes = Uint8Array.from(atob(encObj.data), c => c.charCodeAt(0));
      const tagBytes = Uint8Array.from(atob(encObj.tag), c => c.charCodeAt(0));

      const combined = new Uint8Array(cipherBytes.length + tagBytes.length);
      combined.set(cipherBytes, 0);
      combined.set(tagBytes, cipherBytes.length);

      const decryptedBuffer = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        cryptoKey,
        combined
      );
      const decStr = new TextDecoder().decode(decryptedBuffer);
      return JSON.parse(decStr);
    } catch (err) {
      // 密鑰錯誤或認證不通過
      return null;
    }
  },

  /**
   * 家長登入驗證查詢
   */
  async handleLogin(event) {
    if (event) event.preventDefault();

    const seatInput = document.getElementById('seatInput').value.trim();
    const idInput = document.getElementById('idInput').value.trim().toUpperCase();
    const alertBox = document.getElementById('loginAlert');
    const alertMsg = document.getElementById('loginAlertMsg');

    if (!seatInput || !idInput) {
      alertMsg.textContent = '請完整填寫座號與身分證字號末3碼！';
      alertBox.style.display = 'flex';
      return;
    }

    const seatNum = parseInt(seatInput, 10);
    // 透過 AES 密鑰即時驗證並解密
    const student = await this.decryptStudentData(seatNum, idInput);

    if (!student) {
      alertMsg.textContent = '查無相符的學生資料！請確認「座號」與「身分證末3碼」是否輸入正確。';
      alertBox.style.display = 'flex';
      return;
    }

    // 驗證成功
    alertBox.style.display = 'none';
    this.currentStudent = student;
    this.showStudentReport(student);
  },

  /**
   * 呈現學生個人測驗報表
   */
  showStudentReport(student) {
    // 切換顯示區塊
    document.getElementById('querySection').style.display = 'none';
    document.getElementById('reportSection').style.display = 'block';
    document.getElementById('btnNavReset').style.display = 'inline-flex';
    document.getElementById('studentHeaderCard').style.display = 'flex';
    document.querySelectorAll('.nav-tabs .tab-btn').forEach(btn => {
      btn.style.display = 'inline-flex';
    });

    // 捲動至頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // 基本資料
    document.getElementById('studentName').textContent = `${student.name} 同學`;
    document.getElementById('studentAvatar').textContent = student.name.charAt(0);
    document.getElementById('studentSeat').textContent = student.seat;
    document.getElementById('studentClass').textContent = student.class_name;
    document.getElementById('studentNo').textContent = student.student_no;

    // 關懷學生標註
    const careBanner = document.getElementById('careAlertBanner');
    if (student.interest.note && student.interest.note.includes('需關懷')) {
      careBanner.style.display = 'flex';
    } else {
      careBanner.style.display = 'none';
    }

    // 核心契合矩陣 (交集計算)
    this.renderMatrix(student);

    // 繪製性向圖表與興趣圖表
    this.renderCharts(student);

    // 渲染性向 8 大能力卡片
    this.renderAptitudeCards(student);

    // 渲染 Holland 6 大興趣特質
    this.renderHollandAnalysis(student);

    // 渲染群科清單 (標註學生推薦項目)
    this.renderClusters();

    // 預設切回第一個分頁
    const firstTabBtn = document.querySelector('.nav-tabs .tab-btn');
    if (firstTabBtn) {
      this.switchTab('tab-overview', firstTabBtn);
    }
  },

  /**
   * 計算並渲染契合矩陣 (能力 vs 興趣)
   */
  renderMatrix(student) {
    const aptRecs = student.aptitude.recommendations || [];
    const intRecs = student.interest.recommendations || [];

    // 交集群類 (黃金契合，事半功倍)
    const goldMatches = aptRecs.filter(r => intRecs.includes(r));
    // 僅性向推薦 (潛在能力優勢)
    const aptOnly = aptRecs.filter(r => !intRecs.includes(r));
    // 僅興趣推薦 (高度熱忱偏好)
    const intOnly = intRecs.filter(r => !aptRecs.includes(r));

    const container = document.getElementById('matrixContainer');
    container.innerHTML = `
      <!-- 黃金交集 -->
      <div class="match-card gold">
        <div>
          <div class="match-header">
            <div class="match-icon"><i class="fa-solid fa-crown"></i></div>
            <div class="match-title">黃金契合群類 (事半功倍)</div>
          </div>
          <div class="match-desc">
            性向能力與個人興趣<strong>高度相符</strong>！孩子在此領域既有學習優勢，又具備高度投入意願，是最具發揮潛力的優先發展方向。
          </div>
        </div>
        <div class="match-tags">
          ${goldMatches.length > 0
            ? goldMatches.map(m => `<span class="tag-item"><i class="fa-solid fa-star"></i> ${m}</span>`).join('')
            : '<span style="font-size: 0.85rem; color: #047857; font-weight: 600;">(目前各項分散探索中，可參考個別優勢)</span>'}
        </div>
      </div>

      <!-- 性向優勢 -->
      <div class="match-card blue">
        <div>
          <div class="match-header">
            <div class="match-icon"><i class="fa-solid fa-brain"></i></div>
            <div class="match-title">潛在優勢群類 (性向突出)</div>
          </div>
          <div class="match-desc">
            孩子在這些類群所需的基礎認知或推理能力表現突出、學得快！可透過實地接觸激發孩子對這些領域的興趣。
          </div>
        </div>
        <div class="match-tags">
          ${aptOnly.length > 0
            ? aptOnly.map(m => `<span class="tag-item"><i class="fa-solid fa-check"></i> ${m}</span>`).join('')
            : '<span style="font-size: 0.85rem; color: #1d4ed8; font-weight: 600;">(皆已納入黃金契合群類)</span>'}
        </div>
      </div>

      <!-- 興趣偏好 -->
      <div class="match-card orange">
        <div>
          <div class="match-header">
            <div class="match-icon"><i class="fa-solid fa-fire"></i></div>
            <div class="match-title">熱忱偏好群類 (興趣突出)</div>
          </div>
          <div class="match-desc">
            孩子主觀上最具熱情與好奇心！只要持續培養實作毅力與學習方法，內在動機能引領孩子持之以恆深耕。
          </div>
        </div>
        <div class="match-tags">
          ${intOnly.length > 0
            ? intOnly.map(m => `<span class="tag-item"><i class="fa-solid fa-heart"></i> ${m}</span>`).join('')
            : '<span style="font-size: 0.85rem; color: #c2410c; font-weight: 600;">(皆已納入黃金契合群類)</span>'}
        </div>
      </div>
    `;

    // 同步更新各分頁標籤
    const aptRecTags = document.getElementById('aptitudeRecTags');
    if (aptRecTags) {
      aptRecTags.innerHTML = aptRecs.map(r => `<span class="tag-item" style="background:#2563eb; color:white;"><i class="fa-solid fa-check"></i> ${r}</span>`).join('');
    }

    const intRecTags = document.getElementById('interestRecTags');
    if (intRecTags) {
      intRecTags.innerHTML = intRecs.map(r => `<span class="tag-item" style="background:#ea580c; color:white;"><i class="fa-solid fa-heart"></i> ${r}</span>`).join('');
    }
  },

  /**
   * 繪製 Chart.js 視覺化圖表
   */
  renderCharts(student) {
    if (typeof Chart === 'undefined') {
      console.warn('Chart.js 尚未加載');
      return;
    }

    // 1. 性向 PR 直條圖
    const aptCtx = document.getElementById('aptitudeChart').getContext('2d');
    if (this.aptitudeChartInstance) {
      this.aptitudeChartInstance.destroy();
    }

    const aptLabels = ['語文', '數學', '科學', '觀察', '邏輯', '空間', '美感', '創意'];
    const aptData = [
      student.aptitude.chinese.pr,
      student.aptitude.math.pr,
      student.aptitude.science.pr,
      student.aptitude.observation.pr,
      student.aptitude.logic.pr,
      student.aptitude.space.pr,
      student.aptitude.aesthetic.pr,
      student.aptitude.creativity.pr
    ];

    // 動態根據 PR 值設定顏色
    const aptColors = aptData.map(pr => {
      if (pr >= 75) return '#10b981'; // 綠色 (優勢)
      if (pr >= 25) return '#3b82f6'; // 藍色 (平穩)
      return '#f59e0b'; // 橘黃色 (待開發)
    });

    this.aptitudeChartInstance = new Chart(aptCtx, {
      type: 'bar',
      data: {
        labels: aptLabels,
        datasets: [{
          label: '百分等級 (PR值)',
          data: aptData,
          backgroundColor: aptColors,
          borderRadius: 6,
          barThickness: 24
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => `PR值: ${context.parsed.y} (超越全國 ${context.parsed.y}% 學生)`
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: { stepSize: 25 },
            grid: { color: '#e2e8f0' }
          },
          x: {
            grid: { display: false }
          }
        }
      }
    });

    // 2. 興趣 Holland 六角星雷達圖
    const intCtx = document.getElementById('interestChart').getContext('2d');
    if (this.interestChartInstance) {
      this.interestChartInstance.destroy();
    }

    const intLabels = ['實用型 (R)', '研究型 (I)', '藝術型 (A)', '社會型 (S)', '企業型 (E)', '事務型 (C)'];
    const intScores = [
      student.interest.r,
      student.interest.i,
      student.interest.a,
      student.interest.s,
      student.interest.e,
      student.interest.c
    ];

    this.interestChartInstance = new Chart(intCtx, {
      type: 'radar',
      data: {
        labels: intLabels,
        datasets: [{
          label: '興趣原始分數',
          data: intScores,
          backgroundColor: 'rgba(99, 102, 241, 0.25)',
          borderColor: '#4f46e5',
          borderWidth: 2.5,
          pointBackgroundColor: '#4f46e5',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#4f46e5',
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => `興趣得分: ${context.parsed.r} 分`
            }
          }
        },
        scales: {
          r: {
            angleLines: { color: '#cbd5e1' },
            grid: { color: '#e2e8f0' },
            pointLabels: {
              font: { size: 12, weight: 'bold' },
              color: '#334155'
            },
            beginAtZero: true,
            ticks: { stepSize: 20 }
          }
        }
      }
    });
  },

  /**
   * 渲染性向 8 大能力卡片
   */
  renderAptitudeCards(student) {
    const container = document.getElementById('aptitudeCardsContainer');
    const subtests = APP_DATA.aptitude_subtests;

    const items = [
      { key: 'chinese', data: student.aptitude.chinese },
      { key: 'math', data: student.aptitude.math },
      { key: 'science', data: student.aptitude.science },
      { key: 'observation', data: student.aptitude.observation },
      { key: 'logic', data: student.aptitude.logic },
      { key: 'space', data: student.aptitude.space },
      { key: 'aesthetic', data: student.aptitude.aesthetic },
      { key: 'creativity', data: student.aptitude.creativity }
    ];

    container.innerHTML = items.map(item => {
      const meta = subtests[item.key];
      const pr = item.data.pr;
      const raw = item.data.raw;

      let pillClass = 'pr-mid';
      let pillText = '平穩發展';
      let fillClass = 'fill-mid';

      if (pr >= 75) {
        pillClass = 'pr-strong';
        pillText = '優勢潛能 ⭐';
        fillClass = 'fill-strong';
      } else if (pr < 25) {
        pillClass = 'pr-low';
        pillText = '待開發';
        fillClass = 'fill-low';
      }

      return `
        <div class="ability-card">
          <div class="ability-header">
            <span class="ability-name">${meta.name}</span>
            <span class="pr-pill ${pillClass}">PR ${pr} (${pillText})</span>
          </div>
          <div class="ability-score-row">
            <span>原始分數：<b>${raw} 分</b></span>
            <span>常模百分等級：<b>PR ${pr}</b></span>
          </div>
          <div class="ability-bar-bg">
            <div class="ability-bar-fill ${fillClass}" style="width: ${Math.max(pr, 5)}%;"></div>
          </div>
          <div class="ability-desc">${meta.desc}</div>
        </div>
      `;
    }).join('');
  },

  /**
   * 渲染 Holland 六大興趣特質分析
   */
  renderHollandAnalysis(student) {
    const types = APP_DATA.holland_types;
    const scores = [
      { type: 'R', score: student.interest.r },
      { type: 'I', score: student.interest.i },
      { type: 'A', score: student.interest.a },
      { type: 'S', score: student.interest.s },
      { type: 'E', score: student.interest.e },
      { type: 'C', score: student.interest.c }
    ];

    // 依分數高低排序
    scores.sort((a, b) => b.score - a.score);
    const top3 = scores.slice(0, 3);
    const topCodeString = top3.map(t => t.type).join(' - ');

    document.getElementById('hollandTopCodes').textContent = topCodeString;
    document.getElementById('hollandCodeBadge').textContent = `前三碼：${topCodeString}`;

    // 渲染上方三個代碼徽章
    const badgesContainer = document.getElementById('hollandCodeBadgesContainer');
    badgesContainer.innerHTML = top3.map(t => `
      <div class="code-letter bg-${t.type}" title="${types[t.type].name}">
        ${t.type}
      </div>
    `).join('');

    // 分化度計算 (最高分 - 最低分)
    const maxScore = scores[0].score;
    const minScore = scores[scores.length - 1].score;
    const diff = maxScore - minScore;
    let diffDesc = '';
    if (diff >= 30) {
      diffDesc = `孩子的興趣高低差達 ${diff} 分，屬於「高度分化型」，代表興趣傾向非常鮮明，生涯探索方向清晰！`;
    } else if (diff >= 15) {
      diffDesc = `孩子的興趣高低差為 ${diff} 分，屬於「中度分化型」，對多數活動均有相當程度的好奇心與投入意願。`;
    } else {
      diffDesc = `孩子的興趣分數落差較平緩 (${diff} 分)，屬於「探索萌芽期」，此階段建議多安排跨領域體驗以協助釐清個人志向。`;
    }
    document.getElementById('hollandSummaryDesc').textContent = diffDesc;

    // 渲染 6 大類型卡片
    const cardsContainer = document.getElementById('hollandCardsContainer');
    cardsContainer.innerHTML = scores.map(item => {
      const meta = types[item.type];
      const isTop = top3.some(t => t.type === item.type);

      return `
        <div class="holland-card ${isTop ? 'is-top' : ''}">
          <div class="holland-card-header">
            <div class="holland-card-title">
              <span class="code-letter bg-${item.type}" style="width:30px; height:30px; font-size: 0.95rem;">${item.type}</span>
              <span>${meta.name}</span>
            </div>
            <span class="holland-score">${item.score} <span style="font-size:0.8rem; font-weight:normal; color:#64748b;">分</span></span>
          </div>
          ${isTop ? '<span class="rec-badge" style="margin-bottom:0.6rem; display:inline-block;"><i class="fa-solid fa-star"></i> 優勢傾向前三名</span>' : ''}
          <div style="font-size: 0.86rem; color: #475569; line-height: 1.5; margin-bottom: 0.75rem;">
            ${meta.desc}
          </div>
          <div style="font-size: 0.8rem; font-weight: 700; color: #334155;">典型代表職業：</div>
          <div class="career-tag-list">
            ${meta.careers.map(c => `<span class="career-tag">${c}</span>`).join('')}
          </div>
        </div>
      `;
    }).join('');
  },

  /**
   * 渲染 15 群科與普通高中清單
   */
  renderClusters() {
    const container = document.getElementById('clusterGridContainer');
    if (!container) return;

    const clusters = APP_DATA.career_clusters;
    const student = this.currentStudent;
    const keyword = (document.getElementById('clusterSearchInput')?.value || '').trim().toLowerCase();
    const catFilter = this.clusterCategoryFilter;

    // 取得推薦名單
    const allRecs = student ? [
      ...(student.aptitude.recommendations || []),
      ...(student.interest.recommendations || [])
    ] : [];

    const filtered = clusters.filter(c => {
      // 分類過濾
      if (catFilter === 'RECOMMENDED') {
        if (!allRecs.includes(c.name)) return false;
      } else if (catFilter !== 'ALL') {
        if (c.category !== catFilter) return false;
      }

      // 關鍵字過濾
      if (keyword) {
        const matchName = c.name.toLowerCase().includes(keyword);
        const matchDesc = c.desc.toLowerCase().includes(keyword);
        const matchSubjects = c.subjects.some(s => s.toLowerCase().includes(keyword));
        return matchName || matchDesc || matchSubjects;
      }

      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #94a3b8;">
          <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; margin-bottom: 0.75rem;"></i>
          <p>沒有找到符合條件的群類或科別，請嘗試其他關鍵字！</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(c => {
      const isRec = allRecs.includes(c.name);

      return `
        <div class="cluster-card ${isRec ? 'is-recommended' : ''}">
          <div>
            <div class="cluster-header">
              <div class="cluster-title-group">
                <h3><i class="fa-solid ${c.icon}" style="margin-right: 6px; color: var(--primary);"></i> ${c.name}</h3>
                <span class="cluster-category">${c.category}</span>
              </div>
              ${isRec ? '<span class="rec-badge"><i class="fa-solid fa-star"></i> 孩子測驗推薦</span>' : ''}
            </div>
            <div class="cluster-desc">${c.desc}</div>
          </div>
          <div>
            <div style="font-size: 0.8rem; font-weight: 700; color: #475569; margin-bottom: 0.4rem;">
              對應高職科別：
            </div>
            <div class="subject-badge-list">
              ${c.subjects.map(s => `<span class="subject-badge">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
  },

  /**
   * 切換類群過濾標籤
   */
  setClusterCategory(cat, btn) {
    this.clusterCategoryFilter = cat;
    document.querySelectorAll('.cluster-filter-pills .filter-pill').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    this.renderClusters();
  },

  /**
   * 群科即時搜尋
   */
  filterClusters() {
    this.renderClusters();
  },

  /**
   * 分頁切換
   */
  switchTab(tabId, btn) {
    document.querySelectorAll('.tab-pane').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.nav-tabs .tab-btn').forEach(el => el.classList.remove('active'));

    const target = document.getElementById(tabId);
    if (target) {
      target.style.display = 'block';
    }
    if (btn) {
      btn.classList.add('active');
    }

    // 當切換回綜合圖表分頁時，確保 Chart.js 重新計算適應尺寸
    if (tabId === 'tab-overview') {
      setTimeout(() => {
        if (this.aptitudeChartInstance) this.aptitudeChartInstance.resize();
        if (this.interestChartInstance) this.interestChartInstance.resize();
      }, 50);
    }
  },

  /**
   * FAQ 折疊展開
   */
  toggleFaq(headerEl) {
    const answer = headerEl.nextElementSibling;
    const icon = headerEl.querySelector('i');
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
      icon.className = 'fa-solid fa-chevron-up';
    } else {
      answer.style.display = 'none';
      icon.className = 'fa-solid fa-chevron-down';
    }
  },

  /**
   * 重新查詢 (登出)
   */
  resetQuery() {
    this.currentStudent = null;
    document.getElementById('reportSection').style.display = 'none';
    document.getElementById('querySection').style.display = 'block';
    document.getElementById('btnNavReset').style.display = 'none';
    document.getElementById('loginAlert').style.display = 'none';
    document.getElementById('seatInput').value = '';
    document.getElementById('idInput').value = '';
    document.getElementById('studentHeaderCard').style.display = 'flex';
    document.querySelectorAll('.nav-tabs .tab-btn').forEach(btn => {
      btn.style.display = 'inline-flex';
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /**
   * 點選導航上的「測驗說明手冊」
   */
  showGeneralGuide() {
    if (this.currentStudent) {
      // 若已登入，直接切換至手冊分頁
      const guideBtn = document.querySelectorAll('.nav-tabs .tab-btn')[4];
      if (guideBtn) {
        this.switchTab('tab-guide', guideBtn);
      }
    } else {
      // 若尚未登入，開啟公開說明手冊檢視
      document.getElementById('querySection').style.display = 'none';
      document.getElementById('reportSection').style.display = 'block';
      document.getElementById('btnNavReset').style.display = 'inline-flex';
      document.getElementById('studentHeaderCard').style.display = 'none';
      document.getElementById('careAlertBanner').style.display = 'none';

      // 僅顯示公開的「15群科導覽」與「家長指南」分頁
      document.querySelectorAll('.nav-tabs .tab-btn').forEach((btn, idx) => {
        if (idx < 3) {
          btn.style.display = 'none';
        } else {
          btn.style.display = 'inline-flex';
        }
      });

      const guideBtn = document.querySelectorAll('.nav-tabs .tab-btn')[4];
      if (guideBtn) {
        this.switchTab('tab-guide', guideBtn);
      }
      this.renderClusters();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};

// 頁面載入完成時初始化
window.addEventListener('DOMContentLoaded', () => {
  app.init();
});
