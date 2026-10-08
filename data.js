/**
 * 國三美班 學生適性測驗安全資料庫
 * 個資防護說明：本檔案內所有學生姓名、成績及分析均經過 AES-256-GCM 高度加密處理。
 * 未持有學生座號與身分證末3碼密鑰者無法解密任何個人資料。
 */
const APP_DATA = {
  "encrypted_students": {
    "1": {
      "iv": "XgtY5iyTWIbIiGWG",
      "tag": "vl5WfWDzcQCs2pj/bff/2A==",
      "data": "tWhI+FY8JGs83GW7gZ6L1bDloyljNpDLn6CO2TPZGDAmO+kIlMqEAEM4yF4HMbolJB/FM6zzJKONKLe+V/I6wAfkiV63xX7A42SGIvSebKqDupGk3MuyZ4lQKs8wy6I7LPE4Q43CCIJa49J3FRtFslaldSGcIIDtxQ3smtUHt/43YXFNZakrpihaiInWOM50LSHXvpMaPH9+RL1iSrzM7gx8RU2gnkE3CwC9iUaTKpOps0vztY+crL6/3hY8dtRYIM273XTt0p7wkxhyFFE6UW+QMzl0d7/zPMzUE0piUVujBy8qRLEoi8guklf/+ypBQCXcQ3O2uucMIpXsHYcV2lJjnmJ4l45VXBzK2cLO/yFwW+gGTw4uvR8UzDz11eRHJHIeE2hk+UJfpvWEq23tr1qE32hxrmfeGWY10FvYGK0ox7n/sHLUo9fgGCszV6gqvUjLh0hdUVBdQuUJIE3YHM5ClyzZob3iAHWfJTfTwhwuHQ3oX0Uy3e84LKu17LWLJCpctxkedtCumPaYkxxPUz756Mog7bDalLqL1MoVZAvDf62kvyepORdp0gF9h8Wnp+Ay072PCKPTOmza7hCIjIZk5nb4YQJfK6aDxtdp15/j7FUqw0kjn9mPLMjY1A9G2XxipV9fN48BAbb4NSBZaLXsTn8W69fMKISohbtJvlZTrbwjRux+qI7+"
    },
    "2": {
      "iv": "NeGJr/kZPWR6Ml1R",
      "tag": "F4wt9/rPnG6yWvHZZBRVYQ==",
      "data": "wLg3GLgaxyen9Tfhb+4sf5pn3gIOcn/8f3guwzyVgjMm61JBuCGsiKlJOjY8jlFg5e3/PVBXKWoEcm7m4hKvL/qMoCJTt8wWSY7jPxvxoYtU9emxQx61is6tFR14szoMHebsdeLeYhYxyXBW1Qog6gwt+0fF92dkGM/2rQD9NVg5FMw9c738KhWvWG9nKJ96xiYTsf8hB1ANrseEFSrrrJLr1QmLxKbmNBXeMFERLKlxfiGvgSVSfO2B0YNeazHH9valkbSp8p1IhOlO+DGPzwy+aSHyl8vfEqPPS4QqVHTadiHiQI+uXihC+KH7Nk777yciC+SNl6/3k+x80qN7fh3QKqr21Wft4u6LouDVxnZ/7aohWt8pu/XiXi8loF5Jkou6BbEQ67j9FqAIPjINlrb5D8L+BjfXPWP4NfIAa/djgR4GkjmCRxdkGyRHNxncZM3Lz/V5z4NPeYcoAjUUJLeXpMOGuSxgSoR1Qei+6OhK6UX/ZU5C0F2iruI2LK78mm5z6gTnr/BzbriHJtXShu3v+cGuIgZ8jbQqozlwwlU5D2gOlkdBejGvwGOstQEAc8z4L6UL+il+h4J3zE9kj+3/prHvPG/UH3aLHRY7yGETid8BUd8/cQmRBF3Svy5fqkUuXGuKqEFzctMI9My4ql59JYezXyIYnDQMz8DAi1mAEcjommPh5Q=="
    },
    "3": {
      "iv": "Bpb8qThQxbso/nRV",
      "tag": "sr5K4wkvEi3jeIunJI1Lmg==",
      "data": "/SPoTALL2hsKlXqB7k0YLEcexSEkzsfSMX67qwrSPPptKxz8jye5WF3UlNcWjycf9Y6uKJ6jrEVe/MoRuk1YxXHHq3azFCc5id5GKDYGkqD9vSzVj3GvB56H5DNbks4J47NsNXkh+DLE3wl6bgptBjCCpx6/v4qcmhtdkKfcprYiqpeCzj6uwix4vnGpn5qfw7wr5dwSdf/vAGYsqtTGKxZgUItRBJNBM90derhzG9iYYAuhNv8oN3W+wels5pQNCqge0Zp2O1ygX8tNtbFkkAus2lhKWJO9fBZYWg2r3faFBBuYR/kZEyeB+kk7NcpRBzfGErfVGvVUvcF+GK2Eo+u0RUVjZVLcAVwHyi3kysUcgqSoin/yvo0nJAYNe/hDdGfQn06re7/RXqwd9B9YmovZzISxs0tD8+mzkfDXy43UHWrggyUqJEiT/x849x0u1n3CE7Jb8P04oC+mzzRunW3WzHcVTjgx2lDW3yhD+GyoPD3Wt+l1sOPYtrg3F4wEjp+jzZN4meEEYbiYpxdKGv77FPhWc3tV4xWhsZvhs4FnEwTpOwJTUPd3OMeAmy0IBQXiBvwqsT68W1Z4Y93z8hD+1uQqKoNh3WxUg1dlTUWuwGBkrzqmr1bvmF1X2OJerwcD0mLaMgJCMpihlxlWsWwGTgUlPEiDpg=="
    },
    "4": {
      "iv": "OzqSHKdBgGyTQ6dT",
      "tag": "ywIHwE6yDKC38iUmPWNSGg==",
      "data": "oaVwJxzNKe44ZM3Rx1Jh9XtAkpztZfvXznVHHX1M7cQj6KOkfMhjLOGLb1dPVbT7+B7c8TJWj9MS0nw8d0itzm3b0aNKiBPB5dj0OkyNjYutQzsRKoPgkn3ZV3gekr//Eydx3q/PUser4jGX0Y1OCx3lA7hlSsswlYrJMt+d7LcDH1i0eqDkq5x6djZ8GnaM8tzp63aogV/+uk3KpTajH2k0CHN4dSF6cFZDVad+GXOaez6jpxD8JqioNbiKVBHLFOjLGmV9myGCAjh/MNldE571gd68JHWKkbMPm+JgfTkOw/jPa3Ja6oc1m7rsuM2IEVC9GPIxuKbdRgBRsok1uQ1DiOFY/yE0oSkvYyjSNUJORbTsjSzveHQpL7HjGW1b5uEasdxJfW5I7NapKdYIGcbA1kN8Zsg0PEjF9wLGyZ5U761EcjTQrBQPR96QQF/Rpw96UZfCrrgT+BqLpEMmF5lZ/B6wytNe3pdGpr53JO/+S8llktAPXIJh8XBUczTR8t+/5ym7jIBxNHHrrp8GHTeXS6C0IRKeyq4bqvjYUkS0VPKxh72VTftEx7WHWQsBdM6VnuZ/jcmYBuFew+gvB6F9K068yHA4ggxTUTQAcc+QRL0YOGSqZmDFgXPKBXAZvk8DfcZ3D297YLZXM/02jzUY"
    },
    "5": {
      "iv": "OAUjIuGEET02zk+F",
      "tag": "a2wmAHLT86B8hTbsrW6+KA==",
      "data": "HjqeweEzmu1i1dT3KxjCUAnrYsMiJdFo2CH5JJjKoLh2rcK3uSWY7XKNKFu5p7No+M56i8nJvLz3fVuMmBWLX2MSm6xlwyXVA/HRgDbF5RjzOd0FDScawApb89TajGJj7b2OuQiwx1t3CZVIUsGqsN7X3qnICJ1m4H1heSo14cAeXwKlDvG/br3X9CtMFvi2h1s92UJpJBRLy6pXnmhDrius/UBn14wUnKped55C1SfH5hon5yQTY04MISvn1WzzalhEcKrSM9IPtPIlMCyq61Seu2HBkxH7O6xMQlj5GOVZlOQM+KthVweA6oC6rn2YHA42d4vYFuCLnPuna2SlHiIFNeMzzbWyw+trtD0qgqSKbKGtYNwKD2hBHbEEPWGIhKzlLv93GSCc/EmdFmtENsQYfGAL+AkAXcdEHos2YxQevk9MyvTLI/Ab+8e4vE2+iyy9LSmC9EuPu4oO7+qCGMIbyrzfr9bNiHWmKBn4LMf+4bq9YgIB7+l65NyuuTF7mbfQ3BWW6heuUaIRzG3MwT0n8pEgPuS3H0jYjWNZRR8cniHgasdFqhoJiifSs0y6agyIJ4wLr0iIiOIHhRfKr7JZWoXxexerbiOE6hH78W/WBgrxAuPeHUGYqfJZrik98X6iiwmd5D/qAG82G+4V7r18pDc="
    },
    "6": {
      "iv": "khSgv8A1Um8qSK5w",
      "tag": "AxHdFeZrdZ0RKKJgt9132g==",
      "data": "goJ2sagVpfKHmmsKLZm/a8U+9F9e52GZ27D1//b0prg4rfErY6Ns6oNpZLr97/P8DBhJtjwlaHDQIqJZqdGhGBhs0y4adc/z+RavnP08t2do8zYcl4RZGGXG1bk1wjgzfnb1yaT7jUxiiP4hmWQWpPn0FQuEokqDvHSFtjUwIpdOZXAPuuVyHzX1CZuYTeXQBxx8sAH8y27X8/Bw2oymLN0D5eEYVxW2syANTF0UZisdRaQ3RkYTD2G+3cPRjfTVSHPfD2EO9+BkmXWrcPxXS6OAF2VZKVLZHKfMoT5Ndd+i2aJ/Hm8ksDQtEsm5GzmxNbxjtSxz5zG9/8FeC6lh0AXR1FZBI6tWxNIgJt4bLS3V1X8V5H112eodYJxi1WcISKQ5InAib5XeaFMuhVD1lwkIVLCkLgIABIK+bcH936mMBdCoUeNcl8EHyjLnenLRaK25aW3ns7Hc29aY5uY5ikuu29gVIUGHPc+hflsUI5JgD63hZt84xI6lrwzrrPYFXkZw4B9LI4veRjjOnduQRA1yaQMNDpxsN4y8IFrlsHnJ5dKAHKylsnevhfGzj/4DtR2ZIlKRsQGuEwO8mYwRb+YFc/to1TyNMV8UIr8eSCr8kR1pmNQnHjP2xqgVguxHpUEIi3k80TUPRQnDKDtZU7YRghF/85fxvGjYDSifzxCVfajxRtvX"
    },
    "7": {
      "iv": "hgvZIcGd22pXSdiX",
      "tag": "aALDKWbiWD1XOkDuKXGxAw==",
      "data": "SaPqiSoY6bJJ9OqbBgxfQMuZzOm4iIIuyavF2p5R37lyuoTJUf8sGsU+LsKDmbYaStyPbjZeBzQ+KTehQanwm1/X4wczIJV1ua1N9HhiSB+UXDjagldV6SltN2AouZWexE2WVJnBsG/b5DUZjnmmgJfPwOZzX4FEUxI5o9YjlyguVh4UtwQ1kWqSMWbJ0mpaYb3lLOQf4yzCUCpt7jfIP845yyUAHEba07XfP6iFelMUhYziUSYia18QO0zj0mfCanIGsTDDZnFKfGiVfHBGNUy49u20cEx1Fxm/7+PhvukbVNMMgO62LcKN/wIuNqvtDMv4ha2ONUt92DnonHkMi0xaanX9HJITHPohLTA0VC6ILyV1OvC0/Fuan+lJU7pGSyoBVqaBum5zA0tHoWxo2BlxJEgl8DV7Vk5zS9l4xzS3xXohr3P4CQA45h7RkWkeAQIKRr0PcTylITIJy4bNoQOdBwTDcRnn4iQwSiL5GwF4XSbsvCmfON+SPC37ywf+UiZVJwb1+n3QjKLISetLODyxuu0nWZZNyaOQQez7WuXTzuWYqeomEwWjkFQ4qefvdd+ZANKhbnIBI47SJhuo6CfZnkApruTzLRYnCoqt4du4d+N1DK5RPwWbjOrKN8v0KR95UCJEsbIgC6I57qWn39vmSQ=="
    },
    "8": {
      "iv": "2jevzF4bmvH7wuz7",
      "tag": "1f/QLxERkPI8ZxDK51k/0A==",
      "data": "EsAQ7nAyUy/fwVQQWaFvdBn1LckJoQvlXGrZBmsukxGra2qFtM7VPj5VEdjVqgNIBpkM7LlTPUBfWngGZRj7Oq6nRRrgQT6jCdbJo/ois9RpHj70wsC0Em7jef3HtuOQ8WuqX7if/EBEPzxV8sX0ArMsoaOWLn8S/amJgQIaUlr8tuk0ymCl6xeDVhUL8RGy5T9XXDEWjQmdh4d8QreBST/Qu8aK7m0k2H1ya55d9b3I263lxUn6ElgNGXnQQL860FHwz9xIPS05nTJ8z+nSQFys7yA3PL1Z1Jfoi1BqrifML3tVpugDyoRI/AT7hqQJcJ99Bp20vEJptS/FPNwrNAS8TFWOkmfCpjP7/cxjhsJsRVsknvPKScS6OKV2mNj7eGbLygJPikoG3YDdyIRSvgEYWdt9KNhkwXXyDB6AITlUwNhVYbMJ31U3diWl9xdk/E3w19ZfsIghOM49Ac7WHONu7C9qlq9QI7GgI06JSREB0I/n1T5UO5cDzk1vZ+5oN6ZOVIi6Xc1q4syszQx2YKQlcKr5CZYdO9MTzVbDGGPBuPut+oRpK32gYqpYOCo9a3paFs/sd+CR/HII1mZICFuDWKPD/2fEFRarFBqKnZNLg5tsMDhc2xOrmMycNb3z9RTOKwWbQ1GfLPX0C8rmoEtWhA2IBFLYsQ=="
    },
    "9": {
      "iv": "keeZocoMMGx5OH9r",
      "tag": "PeNHgvU7QiIxByregpVfTQ==",
      "data": "k7P50ueHxOK3PU6GzcQt8d6B/hBULRhq7Em3yLTPz7kluzC5SDRHfNubYLEeBvCWpWvNhPVnr+1gey/RMExHfT2BMCJBreqWm++X43qySRmjDzSD8Ug4V/OuSmLq//ItyBl8cxCfCHvlmcSLUiWXfFwpkw87z0Z7QdN3DIE5s5Td+ffwDDBUvM+LJqXqE7RHXMvAAbll/uG2crNm0uvOu7e9d3Bs7B5GXkCU7S7urLqz+Tnc4GMaWTU8Nhh1Y2gj3HHCHmnkdwMmjIO9LOREtCEhSbryWFqbI3fFAZRLovh9rx/HxoR2/W2XGWeA/GaY2SZr1R4YmLGgwu3Y3p6NRl79qJ0safTQvLz50vesyMEbTUIgXUS8sJfVl4aD92cTONGBvypgvypzdGKrFckv2WOBkR3ugJ6WNFDxRpZe5dIfDVo5lSJoTREaQZgxM0N3bOz1OBdAbn+pfBEm/PZLEP0LtBDr19zPaIheJPzR757ShSsH/b5y++x9EBroRTXDXh5Q47awUE69vM0fTJDdwUFEnNicVtxocwDhGyFmEG8XDG5LxrvMzbDMQ1ihYvglJqFlS0iqYw+42CmYWaan0B5e5C45MPe6B9eAaEvQk6Ea/NgUlWNlm6V0ImatGabHExdxrxPZORMNHoFg5ySEEKySE6BZ2MJUrbFT96lvPepu6sERyeAqnX5bZRXd6FldhDjUY3gWiwk="
    },
    "10": {
      "iv": "4Q4Tkw2sdgft7pLu",
      "tag": "A+7bnPUymueEiSamESWNig==",
      "data": "Wf9212RqiGwvBFQbIXunlc77XU6Kl6muq1wE6csQBd9GsyNJeGwQngBmQqAeitZ4sY2Tlzli9s64xYHlIra+32IeX0q4Ruf4FEj/hecXS/1DZpoS+4bhsbkjhEgGgTcaZNVuzwcQoggamDynuZqSOEKJ17Sq0diLVnOQvOi6kXNH5Ap7zvSlHxrlNdeQngcnZUaO0Lbyx6FaMkuvev1e2a0k9F31aoMvPAerhL/HWW5R9SN6sm+zyKkc47nrZbR5K5lwIwhb7TxCFA1TU1jCsku2ifnAzgOtPcsLo7E0hrV7HdZvPHruOmxpToiQic1NJpejy81xN8RMQ4H2rpwkAh0y+FtHkkzhV9W4tCX8RIv8LwA7SmVhg14uZgo6j+XjapjsIt8bRvuaAMta/k2nvXZfp4bF6Rj1Ix5PYqg21864Ix9GPkuJRIz6MPaL7Fzd2g+f1kklSqP91U20Fzt5U/Wjg69L9caiC2lhmiN4NtNsYNdFMmeI1285jbNyYMHKSc/tWioWtoumlPDNTAKfbsDKgweukd7FNiGO1Hu/PG6F4nTUzkW2wTdptvhZvBzvQBSYOw5QA7OHDhy82lsiD4CFVos0iv/omySkE3uexTXrp/9KUilYEquNDFadU89zoI/vZ+HFA/URr4luvIXQMMw0+q1Iayn/3QAG4D+B98Oo1sjowzZy285IpA=="
    },
    "11": {
      "iv": "sjBNdKXf/NwdLjKH",
      "tag": "38DWQOgrRA50X4Fu6OmWQw==",
      "data": "2utGgNzgX9NjMCSMWSFlO49JtOuJmGFnV2uHZ5DS+egZbWWunufXw4l+ntbCwrmdx16zPhIfxqnU+LoipwEJbDqBu/VeqMAzGCyLi6ycDTRCHCjMwN8phDdfI5ys1A48OA5QaURDEjAmVQVsZYMkbfSyYjFmxVjaqxTbXFRWS3fcAMT2+s1DgpDTlAQDnoUH32FPeu58ygpQ3RieGish8RZNb0N7pJDkAzCVXei5SYmUYE8+cCpZ474fafi8rDh8PJHUYRsqaJWxadED7Xo+9TR5lPdh1xsJNm4JZsaSSmFMQQ79zXZVqNcbc2DCAZacywDT5I3eA5Cj2FZXGth1seVTnRhwMsrCu3nZXqxTQD7CjXRf+N7dX2pDEOtYfFUyFDS95LT3wFaJ1oybfWtM+3Pfv635MDtuLd3IpmbZjfppVo0UK4AxMYLXkpD0K2bRt9auOUxgULn98d6/MNdRU8Xn4daHpOi1AEau8XKaQppDqcu60Xx9hSUK0vEJGHaxV7rC54CJLLazNIbheMwtXQem6eN2slLz+PXzwpMGX2dwUDP26zFwEHV8bCXp6hKm24stIpByMxtrcpJ/6xgQZfgMJWyE50TevjXiZrngzAudJvg46/H8qezMghtYEF6iL+kq54shE/96LXvDPM5JgsEs7E2nxcE7MVa5NXY84p7h5+aYfciYGJeI"
    },
    "12": {
      "iv": "dRgrVgeRaW+SsMq0",
      "tag": "YezM+tyKYnw3SXtKktZeLQ==",
      "data": "tMIy/rrirqJC0nOdUe4xyUAmR5cY9hQ/kxCgj4c2dHdETKJwjVtGKrmSij1dnDRmuNZKVTnsfnw6reYeKghcnGeYupsDvs/gCDmg9s2i1WNF19L4Zsbl2nOvD/988ye8zc4Q1FE43E8Tv+4+vzphdKsm1jIfbfFChnVZ1XGylqrfVf8WFjIDaQcHKvfSI9Atu/DXwCLrn+oNhmZNmEEaggPlp3Msc7O1PyjzpHSjrWWDSG9GBKFBBAjNUQLwH2aODPbZik7BMl3+r2+wMO7cG23ZXEa7vemKYiDGNjl5hAIAGZunOp57+8dxn91DoelZzTR/GZQ19CNpild6Jua8hUemWftJfdlJCtmkIykuvyrhu0OVsFk7CA9CwZyeAU98SyAGt9T40fPaKxAuSQDkH2NF14Tw++TK++zo2bRu/WQG3vUOLcfccvUniiDVyti3+/ilzVQP8raQopo+12Xnn0KtM7BUJ4qfnCjKO6afKupQO+WMvzcc1XcIMUWtcJvWYsevIJPoDfhcLTdbERfidCAEGlDl1T6nKBqSa8ia4kWbNS0uaOJrzP/TiQ3rMTraOxDTurnZKh9zYvZuG6Z121iRck1VuNiphF1kJrTtWleEZRWIUna9u+iVa4Dhi3DKKPER71KOPELbcPEtSgK+FBjRWAP52NYyiaS/j2eYFySnPx9V"
    },
    "13": {
      "iv": "pfochBcOM0uEqjCc",
      "tag": "xpEsrVleA+72jO+HueN4aA==",
      "data": "uvRYe8DDf4SE3uEG2005d3/1tAxrw/HAkRt7EDDMnO+tMyx2g4WE0RXJ7KIxU7NIrUT6EOrHwlzMeT20OrDwGPHN0dSbZJjaUmnyLmsLfP09sfT3h1D+5BqioawEIUqadmo7CzExQyrt5ym8WpXByw8CA6R/r0FDtFJMr1PucQeQbCkkcpbQaiJLQTzH66elLNLjP5ErxtqvA0MjJHxq6WPmVE6QVEaTtjJAR8JNUTcgdHf6L2mPszXbD1Sps+m9dWebrkVjLLiI+Zd/o/GnjwE6t/HSFnLMg6ql2CYk6ZNt3Sok530gB5PKBNNdwHiNx/CTs6H3WJdSu8gsyHN3FWDVC1VzeD3nXErxbGWfNLzLK2BTTAYUds/oysk8GbiT2P9dMuUKKn76D/joXFHcl8G7AIIaismUbDE0+C3D6NvuSRSCoyFWxgWb3JDlfOV/fQ4vG/cjapvQA7oVWj3qARiohmSUDH6bYTEhOtFrXkqT2h+vXIoXRqRzV5XEraBi5+O09zUF3db5khF4tmfUsPuLk5/AhD8L5M7a+zvSRSnG/dTMIR2D0lI6lr/04vqYvPlavH/u211KVCO3cONb0/hmyS3PZVb4+qNB+poidBZs/i/U3xRKmvtqZnvLotrTm8kSjr8L5/mQlgviaXdqYxRacsyDcjSnksHWLmV1OR+QFj8qwA=="
    },
    "14": {
      "iv": "nwy3qmAVM4w9n5wr",
      "tag": "jhHvdfV0SWruFV61dKYoog==",
      "data": "CGHMBcUCD/T6cPUMBTljq9gzXzBbNhVxWgFXufEypn994xuNp+6NrEhb60ylAEQx5TBMcEQyHyc3H8m+fFmRTuDgAqMnBd+P/7ou19DfIR3J+uEu7Pk5qGEb6CUsIdPC+w/h2OfPTNdgIoZFXYUmXFjXE6XOOMJZ/qGiHLROZlg+/YAO55xEwT3M2o3cxfeU8Uwl1soVCa7oLk9MJ+M58o84bgBsl4IyE1TMtV68B+KGGu6Mp78co1fEKZNDCUxMYtmv0Ll4e4Mqmazpu6BzKwtPQAp2QCLLsefaqo7k/lEJmRzPqhmY3HtT3ld88xNh5yR81GYqHMWxzTk9jqcYQSudhVzjXV+Bg/TpcSjz8NGKQV4U7GfcNHKyI3m8ALNeVKdhHMjZFYT/Gq60PackK66kK0Kt2LYoryYxUsHocgfwnOfaIQht+GvK5e5VDShLe06nzuPc15OPcIf1a+6DVBOSkCJ9K4pnuPKxMOQvG/+CXJ3E+1cngH3BAD1+LQVYwapg30fStHzzmx1WaHUaAJDvZiTedptrVZ2MmVrSQCEy6PGDuskt6yUmXNEbYU3o+lkG3JTAPPG5Xeykl8QCT08mvGRW+nDVbqz7NHv7PmLpe6IUBHA7hjZ+2+712AkLXfpX5xY2b+8OeSnlXa8iOK6xek/OfA=="
    },
    "15": {
      "iv": "0oyD6Ln6iJLj1PaQ",
      "tag": "T2rwQ5j5aQzROLlarZsGqw==",
      "data": "lu0e5MXdNaCL+dY/No3qIf938U9CXcUobYniVg7jaI9UN2SbIc5Afy4zs5D8AjtjD+uv7M5YR8OSiGau+Q9mbF6B45UR49AtmnnBRkTcQ//bK6d9eZAussUmNFwN2aXJUGwx54SBJFxyOoTXZMGVwO/3p8UQVzEBNVcbQOljmXZ/xvJ3YBfnGhAiQ/ORqX9FqSPElpIJylC4uUiiEt7IZOKFitIzyc7gn9mUpU9D7d2vf1SZ0T6JcWDFbDfNC1uVOQJoijIKqtN+w8T74WAxiQ6uaLF6coNfgP4IA7MH1ygGBFLfBNo3tTVDx0IHPdo6tfzCah6lOpOdpDTX5DkRdyMW7yVqi/vYRVB/HmGbywqkoIIX9TzPVSr/aw55XvNBOFRNKTjNrG2n13+NjNeal95BWt/6MzJcp5SEL4RcsDuBi1UjzdHrNXgY93Sp7iPfjSHeEeIPOVunRivlziC0LVIPI3AFlbyJo7XqFGN2QSIWDlKyr7R/Xf4B3DD2gX6+EUsssSDiWuLZ9vu6bXYjbhJOMbI2DhuO4MYbICpNxSuQqlIruICRm/xQk+HF1phP+VACB1JIl7MEYW8lmw00eEoa5+W8ajtrd84yMVzAVlrRsFblSVuGSHYEQAfWUDkUwXOJpliOrKge22ODvuSy+0B6soWh4Bdf7+U="
    },
    "16": {
      "iv": "GIKvbIVFPJ4Qfv2i",
      "tag": "rwIlc7LpXzeKgquAc/PJGg==",
      "data": "f17TthiLcGr0Wqgc69HWNADHNzMb0Pm7L021vhC9wNZ52bV0AwsWA1P6dVrhv3ixY562lePI12s5a1axV4wUtAMdY/boQmpy+dARhdhwkWfSmpyixe4BQT1sw7hLgbyog/3B4/jd1jMwpH56MzFYmj2Lq/jjehZelONxV54l30U59V8WJe2wQrBcFvkmADH8lhwJ+3h4S+jrK8QpMQud5fhpAcvf5vZdJ98onWwDXIF0zfso+egPVQXklVKlM6HkrG+9KsZ/Ukv0xCJ6yMYC/NKMI9Tp2fedAucvty2abLMYqWv/jc9rLBXbsCojAXf4R+ZuTkq2a3ib+I6JOIAYllfPysdPSZ+Sm9rXRigd+kQPq1ia+Br7hWdrPRwaGLOJ6t6p4BFvjbbgssjaulNdRHm13Kkvj9Toa1CGA44LpUI/KrRl6ZCq5QxNydGHT1zl5uDl44WilmH7i026yhZjnIz6yO64vq2UiKf8Rz4MnLcSKtRXndjDjS4IjQrmrNmPE722hE9NHyFNEfKc8z+Iz5QURa9daxjpvUhF+TYKk8+W9SfLUhDGQ9DXvdwbxnss9zvhyXfhvk5l/mPiOzMvRvky0Kk3CegmrigplU7iBX/nThZLMG2bd3kFxiFaXMuypVQwg0Jb8kOBBtgPitvU1s0ILSkdusKxWYDA3qCOkYcadcqDxYaCTVQ="
    },
    "17": {
      "iv": "L50PiFwCRVC/P3RH",
      "tag": "M/xbnUOxA2/zoXha97WseA==",
      "data": "hY/pQWnoJzu3aLEAGTyls3vQysyzeKCNJ57zYwoD5QcKxzF6nE8YyAkKgLTRFKqJaYxyY3aGmtVQxzGmEHcCiXtAPkX10gOTGvI6WNmEoE2gwpEFpVSGfqkLdVQr/4qcA8em3IdbRv+mU4S6hX0wQ61ImgMKCtHNZdC+WxICAX6AVhIZr6c+OLpmknzh1STdtYl828JNhmV1B+4wTKvYNQe00qOw3frzEIhQOtwss4bZyK2ylXvOYG/AOoNviwZnVp54T4epkF94d9WD477qYfzRcAMFYleSlMBY3dM8WITkL3NApg71yNJntOCXMKEderthnOhVbqLHC6GYgYZ9a5n2dZ3hZVeYVvuJDgg584nQySBB0qaAklOTw/QEFKroB7epVUJSdfLjhrjahjWJ8DzaQBkkKGfIPPTg8Q5MJQ1CEu+AuD6HoFfCHJ9jsaEI4Uhtx6ElL1Lmxi3uqE1SE/4tFJgmhTfmNx5yZWNLjqWVMTMTyZkD3Fro8pMTcB13ItSiwD8CAGfdOPAYFnB9UVMcyjMu81cZF15diYr/Jx3otmQjLjnYjkJMgQsyZwomOwL4TmPeJ3ZcTM76KgX+BLnW3RlSZbjDus6CKUVm9JOK8Dv/LgvyHtvq8rC8S9K1/XsmU8kBzWt3j/rlmu6lpVnShXNMM7ZxBaNVa2aOE0mrvxSO98E8CjhH3B6q3TPZk29UxpPeQLdB0g=="
    },
    "18": {
      "iv": "VNf1ZWSVBIu+9W7D",
      "tag": "fDxCk8f0yk1WfFevdyVUCQ==",
      "data": "sa/gg0kthFZFg84AH3pHMEGgG2yrXcXejn+DcSC2VJJ1jlLAfPyB7rVoH6WGCogs9EN+Ex4dWaZAqBVuNoO07Aanm1jOFKznVzUwxe7cARlMuTn0LRMOuRPt1pMUIXjq2SoaUdg6TFKwIcw8++4OQW71jb0426W6XwpWyHoKR9xE6zH+e34rOF08AFQ5Fth2d/Ao1ZpeC0gVrrH6fieTlHqZLN7j25RerYN6vGF7DWKsaU+GAXplJyjqIx4wXebfsyiLuEw5zTabvSA1QyAvqEUjIF/9EgF+ErN9AlePOJdXXvHpRx/0e0rIJ6h5AepM+iV2+KP/cfnLhRcFWHlbRafF53YPz4Nik7VkCg/2FQ9BW1pUx7Sjg/I90vweCNzq+eXbON/o+Eqz57MvJ4gIxJNMLKkJdukJSoCSgMGbS63c61csldvKax4MyszjzuXH7eJ+0AugmdvbrD+pSpU1/APYg8mD7k0gqcLC3n665Y4FNb5GoEpiV0M4WMdy1BCn4PzzKpDhJNrX/EUCAfDhnR0fd+jsMocXibigXXIGrBSdLjwVw+UDIaMGMwULGnFwWZzcdatN0bO9QLjmEKvTBXjV0qYKdy6JKl20KljVvKpDtIlQgZ4CLeQ0dH+TI77lz9iqW4gEmtr0sFIyi/6JziVm1wyNuxP0rxBW85FjHYo2cFxYxIGFbozG3v1tEDzGyg=="
    },
    "20": {
      "iv": "P1AhWR8Gf+iyfxDw",
      "tag": "TcXKfNSbFAg3HMD5jIe8pg==",
      "data": "ILXz6j5BRgvM/xNfgEN7yPBiP0rNSvll1uzO62KQWnJxkcHAHfiwmkiiybQxPEPH1qQ7tRABPYEyhSb82Drx9liZWBaqS2nb7igTJ5jxDDwXOH6JfLrM8HIvXQlrL92fdmMI3YdDKSzPVpzvuc6v5uhEztm9jELnbWc+AzfQtOchME663Sn0+wSndkJbaTGVD08jkvBGJFYUbpqqgWRtIndKgLhXqDG7iYb2V+bFn7zBi4Wop15ie6AEIII1I3AcJ/93H7rkAzTfqvpurpCC01E82r09QDtonda9ETgnJeVgPGAPH/BULjRClWcxMPJjhUa7iPkFTuPHNW5q3UfgWG8cBSPKVJNeUlafkF9AvahmgykJt5ukBOOuy1j/trGcRAxQfs/On+U1K1NEy0e3SldeD/y1Lvk5qP6d6DvXhAmNEHCLavClMhj1yaoeoCauRHBJPDEXF9h2D5mBAOfZPOpOjBuKbrHfL2cnC0nvzbaD6MXf6BA0OgWK1Z2gyrc3rqoJwys2fo+Ez/hwvYXfBjbSLID8ZVdkKQS36+HwUdCVdMY8JAnL+rqiTVMHOsT6h2vC+8bnqN85qSrhJIaS03tmmW1vskvY2cCE/sQ2YfEFOK484HNe8ROOazhsrrN47tiElLCHNkEAPbwDA3KHYzJpHbrVYmJuZM8qVTkJ/n6ZOxJLNARoj3aMzsyL/hTMPygMeQ9/ftdNPg4/cZMhW+SbQarVeg=="
    },
    "21": {
      "iv": "x7CtklQs+dC0lmE2",
      "tag": "Y1w2QtANgaU7Nm8yB5yacw==",
      "data": "wjV2NVbKKsHYChDcajELIL78S9nC5rcaBgWK0339YjU2VVGZy0ti+/CqaYUJ/ZAfUrvm+Eo/i9zh3eYvPDt9XuLoEOQKwUPxc9BhC5yigrOllCqsg2EPtTCI1MGFr1jVDOx4egkaK3B7Hx3vUJ/2BMkL0vwLJe5FXnP7TyMbSub7IL9mz7eovy6CdiHKyDXYxaVh0vV28MJ1jkvhYSGUUv+K4HYWv7Z6I4dPSpZgKuIx3PIJbr33/WQ0hcZpPfh9+rnbH0z84jLH3hBHj6cWEDNS2HWZ13BJ7OBGZ7NHJLDlHDrUJAlqIj6k+hiEGW5j9dVzb+E3tpkl6rNSoCUiwx5MnTliy1wWxLqw5tkIFBtAu4TeSEtMN7oRzNlwmt4KY346bM2BWw6xhxP5RpI8otJOv9KjpCTEMFObfZMGNMSvNYiloRk4RNf98UM85gibu4+gqFyqc+8IowPb4lSO3YA+cIrc58kpV5qS/LlTjrikQ3oxSLEQIS/ugv9oGUHknmY++nGJHolpjf0kRTKvSPynBcxIH5FyJ9ueQN/ZzMWBRQPXGv4ntAcjITZIcdKSh/Q+24jWC9J3KhWBn6q9wSWbylHLPX7uMiivLXJTSoJH5sxZRuT5hsWSbae4Y8SsieILAUeCjgWXoZFGhxFIhCWtB+/ixvtwF12DrS42uTM8xYJ4fw=="
    },
    "22": {
      "iv": "mXY47q5H9uLrHLzt",
      "tag": "NmLHHwUxE7ypNQcVtqumdw==",
      "data": "6eFZscU8ox1XrEnA1bnJsowFho83vFR0v2dl+roro2TjhatzF3SxAUxKWtVsjdDMHy/4FIxwnAMBxl/kkp+EmtTuejOaarvPI2LUj8ogJN0vgLxYWK1oeleXfAVav29wfgbTzJHzxqE/VqI2W42sDarO/xShdlAMU5dOlY1zutJppLc+ud0VSokjnl8ekDuaYDdDQ0VSQvWGyEdM8TUPZ+wQCfpkadltI3yT25gxYSkBuUQwLxXwSD2HeNESoJu7AfPrmeTBEkioS0HWjDqOjatSMv2aPjgk5TwP49cLQ4MJ6zRSbURqPUGrv/iWleAPgQB3Fmm7WNRIZtQQhO7ROvT5n7IRIDwLcVVXUF/umsqzwvRI800XJRvchTIpYz145Q2HNjFfCKTopWZR/wWIktXvzzi8QliBrWHV5IvVFl2xlNbmll6RGrTbgPR7ln9kmPZrVMjpflSRmX+RI6LoCGKA8UE1GQUQ00l3ZwjRwzIhS51qPOLwyfg0sxZbGJq9BX8WxUutfGyEjmSQ0gU7graawqS/bq/vqWf50yjUQJle61m7f7KXYOWUTrzXBLYGiqY3ptzfh4q7pltz4YAP1NfCUdw6oQq9SyIvKO/HP6YP5qbziW4pQrlZYFem+AKdv9eNaJnYIzKnDuZtaBo6ElVtdxUogzQK80byi19o3HT9ngLSjivY0Q=="
    },
    "23": {
      "iv": "F+WaTrSBhkhyOPe1",
      "tag": "zIBOu8TsvZvR/B6me5dWWA==",
      "data": "s6JLql+820D6+94ZwK13QmtUmHAPrRPabGGKo4PBEV9pke8rerNOAlZjV2yNeru/z1N8R5kFrBR/2GgrOVk5K0YL9L7/p7s2gWu6gwVpsB8ob2cvjulLNI0ZKmhAvbUHJ1Rd+i3g8SLqdOtslkayK8NbvqYQpRpqvjHxQoMmDuXGigWgzhoSD+jipjs5h5qX4c5IZYzkVSmg6wig9G6rTJsZAP2cYBRNJuGRmvZCnMqyyU5htZ7PZF4vSctRAPJvA8mMaLyUTobI9bSw1+Zft9FufPtTq9KsVYVmvAhnCh6TQ4Kjn8EUzClyDAJ0R9EHPStv+sZEs7wB5r2UXFbafQms6mfEo28ub3fszUGeBM9x5ATFfufmK6nGZtUDHa15DNeRZ+Ivg+kdwJnMUS08ewfi5igGs2/o7CADgvt3jnFDJLVYHRhNzv+ZBePnQH6f3rlcJllXUbXBNmeHr3PZojO5hZrcl0sQRFIz2L5rNafB+ppoK1enf+33uB+jLsd4RqreUB/cds3G4Tx6fvWK/t+0kBMGOU8rhSCyXnNcQ16FaDTJZTLwzZmR7edPYJBxhV00Oj4N1o3uhnGPDzGbhgnS9J4OorZ23ZhVFm1m8CXxuVc+7G/CFMP/Z8YorbnyEhxZSPXdPuIIvzkMgsy6sRYr9u+e"
    },
    "24": {
      "iv": "ADa+fAgFAwYtklm+",
      "tag": "rmuUmBOXsh71GpC67P7vJQ==",
      "data": "buEN5XpvEAkglsKqypKNfEs8X8X4CrUU6qt2IoNvq5pB2GYGgXr+vzwX0Frg9ZNkeRDl7cnweU0wWPo6MQdo7dRQeaJydKCsVYYpAXWJFny59g77us+E6knT8qi4xu8RZwjuuhCpD6df4VvodQrlhU2hNMpAzoefWE4wRcOEgO1vpCMW0UTCIO8lHEuRPHDdnEL3ilQPN3Y6uEzTLJ7F14JAEOxhpouI8MoBH6uDegUU9Zra5ijm2hqTdG6Sp5gHNqU/TdsTyB6a0jVEJa8hbyFojIUQj0dyYt3KIDuxngjdMMEL8ozAapzt2rCelGz9gSNM5gjX4gApF5bOpuwRfVOVh3GTDR1ovfqR6LNEmjXsoMWFijGDisPbCXfXFZ7bSZ6Wrw07lm6SHMy/9WX6QHvz/xOTNgCXFAf7SIsEOv8xZYRBz1lrn0a4JUF5XJhlWkPAwr3v3ohN/O63zSKN3bwgxWPx8xJNZnoAZqSl489s/gctScIVPsaUb1vdK18+jKuKAw7/GFqJbQjiZa9Zg5U6Da8d7SwvsJlTJDL03WZSaxqYz8J4poZ0BzG5tz8dNJOgPd9GsR1iG9SS/rY7NSdPwnhIBW2VowI+5sQcSBR/LPoqPYXp59y/ouEpflAgQftNC7jyGCsU7ZgkDhVr/F7PIR1e9rQFlsmdH1ZCPzo="
    },
    "25": {
      "iv": "wZFWkmzO3Nzmi8HT",
      "tag": "6+KfA7KHZrGgE2GT8m4ykA==",
      "data": "uLWYoisY7JaQvocwzXVscrlZmXzwYu/+ufVbeScj4ov67ypma9TSENM1nHj+8OzYEOf6JWK58CPc99kiPuilNSLePaPwfKEk6vnvAO2I9aSRifmuuJqJ61wm2jdENx25SJBH5QKCSG6zt3TqHfmn02i1GtaJXT6mDZcOXqcsWLIYbaFQfF1bzusiEfxGPAmYBtv0fo56p6mCwDS5yyWA1hJ7xd/vvzXr41oG/jhEiJMtGES7Uq+CEQotNNRL3NwnEptc1N4hnS9+4CF9Ao3s8ANR7NUmMosRnQh1hf05NM5tiJuWCFEqwOsduiowWUiD1OtJIWa0rk81shuK0DtWPsYhNQYNBPnzKQFdrZipyPgk2SFrAMwBUc8qW/khEG3pm0zv21ZqAvjuRedd7Z7i99q0e12M5nSSp5+GECJ+zTGlP7qiDO1VcoEPXp25OhaT3X8S1Ny3gxYwR15xp8D/fd7w5iZjofh5fqQSigPwPFaklgz4lxciUWitGVIfMmISFzAOR0Rtt8fBaSoCwDfq2fuHPvfmJVyFHabqKMUip6yXO1WrUVPGLq9z3PSjinh9PF3eCWIfNfK0yemz8/6wl7ZlW2MLgy+HmqVSVgRN0OAZSLE4sXJhJkWa9YUiPCoHG0BbLyFgWh0r5fVKgNDGZ0IZWjLWO/0pJfa2IRdQmXDyVEcOlZyJUw=="
    },
    "26": {
      "iv": "c/nqO39xUX1jlEZZ",
      "tag": "5+9O5PefN4x9qlGVnZqUSw==",
      "data": "6zzxCDkjipxJaFqLiUS6vuxXfbW1TszpAh+Mv7GrGT7250LcGowcGxKW03GghvVYPyQNItmc9HgAq9DzQNeDgYYVNhn+VP4XdiKy5ls7w8QXdpkMumNvjOHrmItdaIvgSCWs6JoA8uTY5kraBz7lzMmkGp+boUvYrZhy4Y4UOAATdn32HbLx4xcNpFFpSYHtJh/AdKeYiv8l822duEPipfOhkLy86Hfm5tz/k9GCIHDtQY6HHx2HTzrF2D+DTDfWW0nZx36MOD7zsk8BOfBjqMct3DMlxAqVG2YHalv9VltAU7CGvVGJNExQujDemJyqZ87qFb9A/kNPbsSXO7ijiF6yH802Q8yav6DUOLAAVMfazb+MmTgqueEYwBtPboZwi6k+D6p793uificmNCOKhlz9o0sYaU2NATibaIRA9AMLu0T/ZASxGO4Z1nkipBJ/LUVCoIeVrpf2pdViOFYhLTIyQGSn/lUjVYcbKdyF+9SnL9q/5Pfls2fqA/qtLCaDP/Q8pX0NMdH1vE2RoE5qhl08sJRlYMC1FTtlf5rpj8Q1zcJ0AuLmAvfqB7NTN39id04w0b4qwZz3YyYEEJSzwnKI+t4QObnqViKtetfizdY47vGZwO+fG/kdNO/ZUrMQAaV9SMFMhKvuHDQR0qanp0oqopAd6Dzc/sMyQaa20q6UQwaOzosYimiVOTUNsOSViXq0UqoLmqynwnX4zWINlV8="
    },
    "27": {
      "iv": "CfH5G4L4bq/y1tNZ",
      "tag": "hvff2W3dOIUJpGhnTY+9Ug==",
      "data": "Up+4dFYcjvrI22fiTRen7aId/6GKiP6qf9l2bs+vh6JtxdDpXo+vsgbnOIDANo2/1/OPYoAxiyRcSO5HCQGqCB/AJTf26ySVyo5+gyY426/1rUjmjPT3Vt9O7dN1Sbt648rhUqk1jBRmarUp2LUs2FailRUoLvj8SwuUKvR5ED7GdCzKTC3dWkSPIpudqFp+5+HPjZpj9UNjh+foxg223S9eWTRHczuaAuB/g0Zps7nn8hH5yhBpFFgJXIf+5pobPFZWyH6k27aA0ppklatPE/ADv+/ILbXLYxshKnRf6689e9m7DW7y9lfFRUcOjYO+UXFpIkmAOw90WA8uovXJ2sfrYcrWUzGsq70uPPYaHQnGi6k2HSljkuGTDrd6U8YxREnv6uGRiivAxy8K9crUSrWrOiFc1PokeRyf5FqbKvzPL3p4emKwlO0EeBlm/n44J9dwQ2BwLMlOBgbTwiupl5iROF1895w7YkXL0IXfc5cibnzGosZEE6isyCj6Ild+Cfmq3PlpxjTbLQ5apXOdt3/KYlQGAzE5tT8DSB0d4dHtyVO1puFWZLnulauCbug0uiNCEP4PB/jAb6yomXZaTWib3f6OVsOQHCXEmfByKoU5OVsOpiF4FAcEefb6r2P5vS277yza46zUnI57ZmIshxGy/eMrwYIDLc24YphS7jRL928/ndFTC+HZ8QE6/49Yj8s="
    },
    "28": {
      "iv": "QuthVmjfGdSxGLmZ",
      "tag": "mJYruI4l6PMBeqaIBgqcEg==",
      "data": "oZA/rfSQ3Ea0A6GSRt7M864qXkBCF6/zomKrypaKB3FiM4BoQMvc517GkIJoZyu8n679DHqyGzt4BMzdMj9PNTJNWARb5VtMkGM1Q0QOXJS9enxCi+gz74peeZSDSotW/0Z1hrNR8dgkXZd/UnQNLUQRrJzPsOOgBj0B7pDOq20gNVzEf9dhqlk0vBPTPcNEMhzld2s+50YMHlw8Tm/ukFLmJIDCVhSHca+WoFanfmMyx+EeA08IqivKbF5utq69Yyt7uKgFsfCQMvo77Dj+BIqKwqHG/PaPkPUUtDkjmced4yWNP8ceJ4kfVe21uYiVBx6tqqD6fS5CBbizqFz36oSCQIBOMb6lTEfnjtWxqRZ8sGSSnecwS8TGSP+JznUu/q54nhVujCBaz0kTvM0nMOZiNk4SmgxucRMxOk3+GNghkSwGmITh4vpOEVAD/bz0QW3Z7cOl3/2LMMyzs1+qIJ54t5ZE5f1n/2j4Iiqk4Jk4pm1bRGZ2Z5UjfIz4pTgJYzT+BmGPKlIM9A4vsvoTl9orzYLUD5bHgpg7TFoQEl1Ba41lnaJRIcl1LiuzDBHgAwt0vcHWjGkcCFrnCkHaro7+s0MtFw4pg53w2Gs4Hl+qmZ/ms7JvMffqP3LFcSMVJyMf3KnFLDOm9X7VXD/5C926BKRqi8EkCw0BU13RsExACyn4QsMjKAba3GPBavHswbOxDXEztL4g"
    },
    "29": {
      "iv": "OD+hArt2SuZejf5T",
      "tag": "s+p9gxAUPF30GzEkyx/YoQ==",
      "data": "aHe6E0YQqVYUPIvUpm85VlD9iqQzhjoba7jk2jkRwvEssB3mVxa2qTxpICJBTSKV66/8sNENf7WVPVS+Mvw0Epm2byWx9zFGHlecCqNe8+IeJCxElptdC4My0b5Orl/bEbwx7l2fW8RVf9M6XAffNy+3DE1G99U1f7IrvBh4qXktrLoFfE99fOQkphkqE66FJi1J7CrbipuqAyFZDFx0BTat2lQ0/vnMoZCDVS8csIwvEjLcHYGzxxdCa/aMWkeNGPCwVAdKDX3HsE9OVMI+lKMkQvrhvacHwDYdAEPLL4xmR7s+VIjpeTKYKheQNXast3FNcc8Z9PwUTxc29+QjkqXmqyMssKx5/4n7hTP88KSuBX0X3Ajt9xle1n31jmp0hmWBPuwVWTYBkVon9sCh2GimSaX0dQIcMaKUMGm6cKFWVj4nCjxAS5r/LMySc0jIXZNmS/FE72vUnn9rkPzGzucaEtsq9noEoTjFyr36KTvelluYURiWIHA2Rw1+lZ0hv+gJ8b8KTO8pjpixA69az3JH4HFJ1NRwdz4ALJIPGq0UpioI+ShpfHq7bX4xSLsuxymUUrh+TKQuCDK/oueFfZX3AJT/5Js9kKLlfp48vKufIYp084hTfRHV2kMLojXtnkpY97l5ZgD+FDnfKo5Rig11g6OT2L3Dvf3meZZIRaQcwdCJlRxtCTU9V7Y9M1BKdpr6yqaLZDruKgYMWTyHO3vKuw=="
    },
    "30": {
      "iv": "IRMdBXkkyyd4X6zb",
      "tag": "y+nkaAiXLLBXLRB5+xp9nQ==",
      "data": "vFG3FpOMsn9hhZjunKZlVaoKd3GeuKOgBDMjfoF9oEZwPtg7Dlg/33DbMm/YW+Myo1AUhsIzYisZKuP8cbkXZCXoFdcp5wggynClLk3Z0N+d9OPzjJJAIFalQ+vz6Q/hqvbdvsuxQFpndEwk1jtIN3eGVe9G0doG0mj3N8dWr8ch72i/P+KVwnPyVxH840D8MIDZO/KrRkf6WjEbcpHRInVv0+TAFRz2xg9ZB7MpxRjVJ7BRtAyHwv9zvdWE1wX+SrESeu7E0waaZlYuC6R8Iucx4ile5nmXncubNqZJxh3dVLhakyb+AHxk9xIkOD+y7Df86l/jufpDQ1zOGj/a32hqZV1JSm2GMR96kNdC60Nm/lkaLrZEU1HH9CA2TSglwfwctXwZZvvuCl8tLT3N15cm9A1wb/igPfcIIR5dXtLTqmGm/xdyUF70NnWhvJX9lkzImT8DuWvVz1Lmq1mHq9I2pLkLz/UjvPISYcYZIbJMOlPVRrV1dI31LOm3ikEoGPpKxcyPSHSOJ2XEOKWQReQbkfbEfrv39WPrW+K008s+USjM0oUveB6/A6ZFY7/xhjXuS7v6qk6mKoEKyiXDMWdIVpMc2hK/6gDb+3ZCM1gfuFiUXErYyea5JDZUDmYmcXoXQspWOiCs79jbRDOe0qEDpzegdhvsYo35amBRluE="
    },
    "31": {
      "iv": "6GT2Ig/JMm4t61wf",
      "tag": "yQghlS354lST3H3ygjLZ8w==",
      "data": "Xx7g3qmAZxG16lafDBdnMzu5A24HNcbjMpV14iKMHZ7EpPfafy5W6IhbLQ8NgUpVTiRfF8DRznM8SV+rZz6ADiuMXS37i7bgOl/uFm5CbIMupxm55CtG3Z3wt/1HEv07scVYxndhBqFivyb6ZPMvTuW++iU20tkAP93xJ0VjbZrRAb09QgAIhHVzLFLEB5koYIQbXeshUE7TqjVQMfQkaukz5D6xjoF8U+6+gGqxDcEOHLzSPK1E9YXDjC7GAlsXnyUrE5YMxKqe4y2p+Alufz3rbUi/NAZmioHH84+JfrbnNUcy2mW79sJ+Nqgsf3RLjhAITy/P5KxY6l5V+qI5h+FxaFcPTz6SWUkajSSmQSXGyIebJKuuB9GZ+LAF7rkVh6Ja6gA7v2rXCmxY+DRgxtkk+qDh7vBo6MiBbtrxUpRe4ST6fu0nGiozssQHr7l6Hoz2hAAoV1YjQqxp07uQupr1PNYfI+XHnL34lHpB9/RNmKxHGBqUVUfZMy+wpA3v5J37gPmaKygFJcVCEFcis2DUUqRnDwCYCmVuBE6tZHzjx4Jc8yyVF00RVgaElIiGQrKHKQfUAmDnmvrrlMkxZIX29IDt/akk0EqUAMg4IhPzASiuXm+6EOPOsfZbG17I9Ewho7w4qhWeuZFB3gFX3AIG3Tr384nOfmnf10IePwRN"
    },
    "32": {
      "iv": "yTgFLEMRdEKMsu54",
      "tag": "pCnTdXvVmTh2gD96W1NLMw==",
      "data": "nXrputgrcBgtrwWvbwWsy28LzOPEeQTtWxGh4sUlkO5ga2uOvA5fdV+LlmMUfADXOb/bX8dSCDPfgih2Ps020Zy/9XUvLBYnPj9mOm4QgSBHmcyJDfwrZb2ezz2hdTEzP8B0ni/D97sWnKuxx4ie2TamNY4LnfLLCLgDBuX50K43QdIecX9pXxlQN4nHltelt51SJyQ6uGpI4L48JsleA8gcR+PiAqiFmpiEDcoDko4Am5ER8sy/K6sdQ4iHe+VITkntF1FNfDkVhYHqwPhA65V2zMUlCqRVHRYb60tox2aT2fR6AUWUEV4+uliRNicv4eFd75riX5RLEMC9WTuWUVpfQzi8VsPOoIHLRpWjf4HG5O5EeVwcpnf9Og9Ish8aH5T+5kmOLcpXU95KF+gwa79V8Z07NNGo1nmmwOmi9tFdb8YubrciaJxd6wdPr/KMRSejC2bQ0y2wp5kytbkhEcgjEfIpfTN80JsbiQGK+kj32aYjrGCwyhYHNRdkqK/6d2M58nApiXyjb4U+c20uUOriJRJpnYwp67zXPI0uqfbB8ukKd8YJEec0xOS84nL7XwT37cNF5byEM40ntn058mxVw+bK3S7ywBq4ifOO3sdowwXx4pp1FrGxESvHl37ANG5pHA8VG2uMA8ELkTHV+aqCD02Hy1kiJRh8yseLC9o3wTXMkWL63CMAHy8xCA=="
    },
    "33": {
      "iv": "BJdkWvdMpy+FxRxn",
      "tag": "9Z0+nV9eaTwMkXmWlxoWLw==",
      "data": "upTXT1H+ZEDDxp6osXnEnu3qLwsP8FAXKoUz3AR/ChClpMgp4eD40WO7nTt1pRkyWVgBeiOTzUEB8PB24xw1TEWArGmLBropXHW2eGFkLgUebpChZG453AjZJjwk1CGBagyzSoyZTPS//yZU0zF2BzDJjaQbCejaLbbUFFrP2E5LvJhuP1hSApi7PaP6a3HL8p0lULqEvUydCMAXaEdSOTPmwKvGeUEbGs1ReKLxFfCuF+rFDHc73uBilogxILCJz5w0FFLHStJP8sHF9XzwO1kIUbUnzqQ8hbTIJa5dY21q31DdUWEN+AeKoMjbXy8IfAse5cDYlPV701hTusvni6a69yIlON8fl8+KZjFPLaJCcCQcGJOiHfnTjwv7Zhr8r79Ra/Q4M8WBhp2Ekm1WTxK/JDNASSJ4acc/Vei7ePsaWqJ6SengujnfZ6yubDbW8GgHoxceMrsATQf9UG6nWFUOsfhqIYvkb089yexrWmtHmrOPaW7YIdY9q8Tz9JTMBMc1llg9znX04u5l2smqiM+a7WBpQpbPj7reu3RNhPdFWWW7Nkm+PSSJJNCML3Q45QBiBTl8OBJrseUZZcn10ogjmiBYTPQbnzWHYBjt9MiH8JpthbrOb7qstDeYGjGoOQJsYtzrjFRc24s/Ya3bqCTaKNi9HTrvrVTsM8vYQlQxezVQbdi/R/294nM1N3h/8uzHtUjjRfJb/PhIeOW2"
    },
    "34": {
      "iv": "UOyreaxARv9Llq+1",
      "tag": "bsJm+KRJacKgg/8tDZez5g==",
      "data": "sBodS5JsiWUn4V6daYusIUeZf0svztwNqnv14OoY9yRSPGjCzizKQ+mtHqTj7DgvzehBKjScTvdCX5e3ADANaz/kHF19n28G2gDbn0NMbXJI3Nou6PurTRx4buQEeR26EJj6VH6LVUpQNSygiUKuZRJ87u7n7opC60CKz7g8yxq/YuBE13jcP/M5KXHtm7St6lBDELQdJ9USduH1jwb2UOmC/NpE/JMmU4Q2qldy52BtQA9l/eeVlsyEmw3TFNuAFtHShOwtuzMugmpPirbkL2x0DmG76i4gZgrdWvMlKADUCOvszuuGe0VwATigVklEWVRoyzDf7r3bIzfUaY5Mk6zBgjRANKHnI37XY3N5b4tuYZyX3zJwn41Spyqu9ojekcwlU1bNfrd+d/goW6pBsN/6i/KDZYt1BJrdY0mCi8Ff682DibYcueQLNsif5cSgfNc5kkAunoKv+u1XXfvBJhBCFDrNT1cpTz2sxNjd/ep5G4iB1+WVmRMo6yz1tvsL5UgezXe7zIuqpIb3iIc0X5es7kf16cVovgcwDMaU/Yl1YRwNPhawQe7AkmAD+19hgYuHGdiPVzOD/pI1GUtjaEjRV1Y8KcHSarfC1Slsl/sTvjWpysCfmvWegvIdKwGnnS3NZ3yjfutAqz2QXZuxJop1cc7Wswt8GYZzR1oXOz8YVbSlP7us6GHgeBV1MvAOCVUJ6UcHeiEyLIIpAXwlK4Tzm0AbCuY7YMvbMixO"
    },
    "35": {
      "iv": "JRuR14JPCMv56dV2",
      "tag": "Ggjlui1Bzni/chx8wNiAdQ==",
      "data": "aHeQjyE0Vcghaf5G0Oqy5PYjrD3rwFAqpzI/Aq5Z0CJKD3ag5yuC/q2FbxaOLecK9BaaLZHXz6qttIIIjZPiSn5kRLvM+OnfrMU5OG3adaxrU2udrf1pdn62AjgyvxhJe2A2rYp8qWKEgBVbY0ajKepdxCFQO/HnjZY54JtrliBYY/Jb1mR+7gXZDBeKGSVCw6EFXtYEFVQfaWoRRSTl6cLFWLGRWmwndCd3w0ZkBi9Btz0c1LYOq8sVLr7sbb0vN2XkYtRUvbtA6wLwitlXU9uPZbUgrJqHxVJSUm/NsuEMWLNVxXInrEeYlhY3PqIt3km+l+G9Tu0djqfJo5xxrZ2RcGk30zBjIyNIWcZsKAE3Lk/MSnKACDULzzbPpv46C7Lo97ceci6oIvBUj5OHxKWSNI4W77B/7g3xAXyxlLqrJpkAbNWOV3rVgeuJ7olomecIdnbiM7/j0dUjDxDAXN/fL5ETTudnzUF9Zh2BbRG/YQSnUNyL8Fq0tuMRon45rcpk8Pu8udi9v2lWOvLAcgkJp/wZKZVgT83cuzty3cBntvq05045WPXf1fKroA7YDkGjE0lPLwIXfhT3UQOdPYzGfmBLMx/VZvblAJXxab64yUamkEhfcRwm8omQriJkLSwK1gj/7lIXwEUmc8lZj+2roAIBr/pWgw=="
    },
    "36": {
      "iv": "IVsmGdghwQn5EZo6",
      "tag": "gRurlXxUmFAnEOS8xli3jQ==",
      "data": "5ITaXaACtwyKFp0bZwE7zmU/64e38rw/2t8QaWADi0kvRO2M8dbJoAgI6vLB92XT0/KHuCxYAypezxzIqi9ByETI59C5Vfg3y3riPmmPuv3nf/qf4/sDnxxaPxIGL8fK1e2eCahtU/vPCVBUbDeNDVRVOvU5NoexA9KGVYi7DCR+FWl0EpE7p+IHdQlq3OjC48DLQGii32kQtHifB8Nykpu9nK68YLtUtwAyCbQ3J8fZYIeb0Uyn4OGZRTbI3qFPy0mZN9rGgh5wLK4el+V3rMSrgRAxbWxvOHYraB++Hc8gNpEm/Kpnd8PUITzB1ItxXkJJyHl26y+FMpDVJjs9csMN3nRRGRuWBwl+vFBgQZx5ZzfpAVtaAgswFGPuugzXiv8zCuDGzTxr3rJMIw5bc/iyHH2rUJhpjBdm/HYyiF8pCNCE2Mqwmj6N69jue/0ZZUS2/A/IEMtBF0Tq1v3ReM2kXI1Wk2246r1rnw8Hpfu1CBGyCA3CHLHB6HNu0WqE7DnZa0j63E/r/huNS2C51/ePh8SY3KQhj9MSY3cvBj0Rj2V58PemFu+yIJ3siw1kMZeOQUchkgIFSB7o4UxH0gXh4lX4MRcTaPL7g27wo3zJT4aSDBF5vbXi03uBYjN7o/FafNAwvexWtB8CPOqU5ogkTAPEPzvaja8uPk1ge+jnnJYuCYyl6BI="
    },
    "37": {
      "iv": "gvya9Kfgo/OQrKlE",
      "tag": "uZaroHV3GJWSw1rub1TR6g==",
      "data": "FPGEPY0sk5zNs/9vIXWIGP4y4GDFKoz5t2D+VL+z5KDf9lra1OUNvWwAsDM89dwH/8R9Ft/QFegfEpsr1tQ2h6wzZ4rlwjuRE7llBRbEWUwcS3fOvzkAQDtgINQEpGfvnWHog+6IyQgTBzL+gkE/TWFtl2+J80RZHjqh6NSc02TkfrXT4aNMFYo7MIQZs3ZHwE24lG7kDwDz1EZ0EQZQGWeGdipDMrOwnqAVK/ms9YQlOU/n4we9/iD0UMSpEad3IjYLmaRIDkJh0xJ64XzvvtGmrFqgQ8qHt27B5/xHQxh9Q8JlHbL+7HuejGuL+9Y7fY0E5C261n/QkxYz/0kv83ARejPHQGTlTH05UMEl9lyF6CL0kGpIopE/EYLexe77tmik+CgiUeYz7Y3W6Px8MhkXY7mNanZqbk5jAdXVZSJfnovRNiWcPA8L+8GBYJyQLCL+HrG2Qvju6gxtX1bYlhOggO5jd6KgPo4FLSkqtkukv9AHLCNtKBwHIqIdwd6Jmivv8g6rTvo9BEVbpodK2MSMR79g+83b1WeKcwY6a8JvmV/65vHxAXzpohjSODVSFxwZD4fx6w3c9utApk+bmY4jdx0bV85UUXmQQYAGYMCefCoLU9Ar/mcpmoVnAAxz5U2oOAJf4HUBLSRhDpVuOxcQ7W1ssTJ/rfkLaj0CJkkNX++axGaWhzqlnvlKsQ=="
    },
    "38": {
      "iv": "WZP4GS5mzoDe+ooo",
      "tag": "sm2E/tsEStv7mRQ1SL+1CQ==",
      "data": "9BKl8LZBqmB6xDBtm3oWTpNSVmwrEhb0S58h7edPm/6YCOR1OsU9JIzfC4L0PIsXp/MTZgpheIDWyl9NLnTdatXAENKDuX7HP4Li6P/FI/WSIdrhbB8FYKD/RT6sc4XypduR+hMploKV5MYNiQuuNzWoPKmAimBq7jMgNn+dA1wBQaJxW5Gl9AoPB54Fnw0hNjJ1l/dZgYxapzLHB00i0pDhjnzK0qt8E8rKOXi8sY406rAKO1SazpNTnq8WLwhL8u5KgmtYvPcNbgh4MPYid/jp2PGmK8CxEx8CSrv6+uc1Khq8+/Sz87OA+ZlkF3upWeT/3vKRVcfVuufyNMl6YdzRHB+01WLO3/UuoC3J7mufTky8eOiNRequjy7it3d0k1I8/nzfaWxW6UxqkmJz9X/n25pxhH6x8xWpUd4i3JKUOhJgW5P7OsgoWA0CFsnSPw+4M57eOEx08t5oZ/GtBM5CziZx7rED6awkc8euUxbBe1GcA96Sw/BKFX7W1QHDKs50DSLeTkmVEJJxCSqo+h+wJGIJcfWacNeuw5IrkntmZGJ8UcSei50P92dDPLKJm/FauskAT550XRwL9tUTEp9ih9KXBO4Y/Of7lP6ab1S/fSd3JsfuG7oOX1jiHShe0mH3nqvMNROjirs7235euEjommXbT69rqCk5GBlF8wDjpPpi1CRr7u/AOTDU+yTIBWo="
    },
    "41": {
      "iv": "DDjA6pssdcJFduAe",
      "tag": "hhWa7cOjydQ3O4Yhrejc4w==",
      "data": "IfRVL4z5vP9RzmHOKKA5Ek9q49gYdiOhB19gDrpl/oKqbKvUrHtRwyMcGRQBFxg6WjhGU5FQNggj2LyseoczbuA16RX0tXzowUyxgrFx/XZ75ULmS3GwZS0gYnkhPmfHrq24ZcS+WSA/XwCiM0GApghxdi+/UrOZGGgMadmHGEDdnxb9HvVWd1y2lPUgprXF1LeNc3ykmc/2IXfCezEWLaxNaSA/VPv0k8er2m6OVIF+7bXY80FxNP0+5SPDO0l4LXysPQhUzukwXFR1Wd3m8dGSfHyi9+58j0y5row4G3RYn68xnHKSn/eGtAzQHPbcpLiFH2spM+dDUz027GvOhJWJ5GGCIEMFVg1RISVrluVUrHyplHEOZrQXNMBPxmS6xY1fgor2VNAMH95aS2D7LMDVcdSxVGaNTwnUAqMbsEkKpPaeK9D58NxQeGBtK1/yTypr3GnoUVRWPoUn3mfOpxgB+FZw2uk4JfGR/B1wc6KgfkHol5+vjgurm0P7f14psT+nqN+Drem0KWcxMC27cuX/D8hwY45FlB3m7cy7nsfC/LloBWK1xZ2q7lFIJh8A+Fu9YMP4kOPs85KcephiU65LFEXi7MdObVlnTDj079lI+ih5lctRYRYX1l8/67B+RSMnetB3JTa+cIjEodlyT0LXcZEmDC9Vb7NVSPpax3Q="
    },
    "42": {
      "iv": "alzNgh1K54b/VSkS",
      "tag": "4rpgfZZoR+5K4nh+ab2QOA==",
      "data": "dZU6lO8n+351g0ul2tv+p9HdeT5FLIMxL0BEA1xrfusLN/pxCcyBGs2wTG08G08sSastmBT+1yAkapEvuYV4a5L4uFTEimOg2tObeLmHVeWTy7IBT75+mkGuwJ0ENhLJyRuReicKX2ENgujaiX2ZQD7CUFyDhDOA3sishBBP61FLBHTi+1aYWbySO/L5m/PkQ2GSPKm79oG5nwva+2TSVjmjevzrBcypsiJyckHs6Q6tsuG1Vo51E2/J4g1kW1DHJf1gTKatY4uyAu7RPCAqycCGchgrI8MFMaafwMQ2LtoPSKPJs8x/Yyh+htErkLRoQDlbLvC9fzcfpXVTYBkFzLSm26EOwvx/Ob7fHRWIDH3+2U0zCRN22UOulyjt4uErsSmZipTxLz2MYbEe/Q6CUs5Z2G9qilRj6S8LI4oJ2pbAvG2aA4CoJhpBc8cV4JiiV+3lUsADtHPOVALjHlqPsvCTPfFI+tFffrF2f8/XFLLlMat+lSB6ICmcQt+ASOI2TaHip9lkQRho1m//miQJ+u5LMB7fbAw5UmGn1NrkY1LA2PkUdc3mz7ijpagjrNw0BD1A3HTyYWtvrhA9t4jB0G/c1+xb9UGMT2hBH2r6CxRvxBFXZqrUU2PaK7LdJLx8TAKgQkLfsSdylKA/Qxrb12ztQymPmfQc1T8fNaxaa9P1J/3dq3zB/DnBuw=="
    },
    "44": {
      "iv": "sqbJqsuTvbF7qcXB",
      "tag": "nszvyeiDDblLQgpfnRvZEg==",
      "data": "OQSVZBmYqgzk7DvpEHeYQknJHwxUHDI4sIBL9CBXGJaIlSAxhtME0MVx9BrZCLJDm/NJnHW6QZAl15LUYbNcWyMQu8EdVepd8x/+7EjiLd5tB9PZhgzm4iGOLv7U5+A8limWmt6M0s3Ihc0DeuECnMCujnZclMFcdINhQ/KRQcmgoPs/YubTtJbeGDFQGp9WbFh5QGxFNGR9um0wmyHrMoJ+EyFGyGvL637P5s9eIE5DstwT3mxlPazGlMNiGU8H40G0X1J9yvuhse0sKfVtbNznu1RCEUNrYEE7iVFv8d2CZ11LrS4AZe1GNBAWS1DK+AJBlioyk+5AtSR8CuMgfCxhCLKN9RhOtUnNCaToh1S6VnHdazCVLMnPaVkyJR3eVsXUWs0AFmQm3v00PrZpf5niEpz9OONQdQGgU4FkAIQXW2c26Lji89csppJivct6l5KgejhpTJg3JCWvVGWZJXrfHgpBXDTx6Y77MBRCAWfqalidWddwDCzgT6FoLFXC7uggVLEsp6j5Vz9yT9NmF90gT6tdpcMkKNx6HQz3NogPjU9cEKn1zEE2lKdxW8G3Lhw0IZnaWOzfi2i+kClqAq5CE7wVqa2XkiCUYhYA27HOcbThSESZwkhmB02Q7c6ZTnMr7wo1aOfCSRiVN59WYPg0BsBVPPmQUD7A47/NVxQzKCjlN8eSy65LkkgveaOfuzqvkr6fDx77zg=="
    },
    "45": {
      "iv": "eu9OGXOIJgaNscog",
      "tag": "t1c7y5tPtXbmuq12i851ww==",
      "data": "PaTUITBSz7ubFhxU0A+nPd43meJjQ+I0HEGdVTCB0P6O3NpXNPpZZ/3fS7zpaqPKwyLnUBOyotm4kGhgDgs6X8+3AZGgFOmAAEQs5w6mnI+HvyLhlqiZ4fjcGCHFSmX8ra8guQdVRzPabzwMAwkgxAFkF2BmP81xYokV41Q+g7PRONmAb9llgR3L42QurDrYeDvppVg/JqGjkRsyvWY6ICvKmulxfmLo68zV0Tnd1HYntTMCEjRDQPD4rEy/DuBqejeNpsSHCX0KIYaeBSNiq57bqtOWncrEyobPVlaG2l9z8zN57df2r0Xv87XmoQBoGCuIwKPSqkTq1WcERttspp8ZjWdusMVfRF5A0L4O3IBmAeLmA0LT9KgRjVCVgUcCPQd3f2T8PDdpvXyTJtZZL1SHjz5iuPBF/NvjRsLT6Bg7ABIKzlopsvzFRPuALL1tqaVyQ+yoLBArmV1zWz0viU2GFmolC/fm5BkQmw4lNLoihhKBk1761HNQkTJbKzGWaEg1HF1MpiYbSTBlsOlzp+NnNYr0D23Wq0Ndwm/TeIt5k6NpaHe/i7APMGAmp+0ytcgh9E5TegcP+6x5RZiIXZq00hfqHO7ZcxXIefBhd8YQD1Mtr3kIlDNQB7ukFMwIHPyA7v3AkMmT04rUckeoxqDkoaOPvUfGi8QK4aCKudrviELnPqEKGeeNEUul6LBMxLw8uj/s+WYWorFQ60WVx3c="
    },
    "46": {
      "iv": "VAzl7HjbAET5UJHF",
      "tag": "YkHtBxb6yy4xCJ2uECLO5A==",
      "data": "cD1r2puTnh02eaT+4100Su8Qzg6fG4mBifT0RhOGKx+YWmWBBRSovJhOsiMp6YN+UWf1Asq0rZqAjQY5xUObAHbz7rk44PApN1xCMpIMVFw6Z1zdBG1awgJGDHzhREG1HxVlIGvQRr6FLx09XG9tDVFHRv1PZ8skEKNM+g2TioahxW6f8iUqnsGK3Ms1k0Wa5ZrtokdUdIsCF55XrssLGIl1eduTjBhGRmzn/psKC0iKEotUPhAX7j6L99R3XHHsjoxDbdd4L2mxEhrGQdmGIuY1CJDuvZ8+eTbIHsFwzu2vHkHvsIAuuTUrATLBR3QcMHL8WEXwJ+NW0yqIWw64AQARW6jwNHrd6xBOb+nYN/wOSF9Dxq0Dy/xlFD/oUDWQtCDJsqWsrR44tF5MafxzSbuM9EntZPIHdcm/Y+Ensb0Vlp5PH6qGV0ZzOfh1yFiUiuDYFhpjh/6kYRaK3yZrOXlb4unYBDchHEkbkBmFQWb/BEOSLSA6uBxR5rGvLD2rqJvKfxIQgA6Rnyv8RDzIvoUWomhZN1EMYLjJfeBpTTtFQfsjAbfBxfCPYbKANjmtiXMwfTBI6MeQhEHx6qyCIv82u4pUHztDxhCwU/lC7mtsBhYYUCgm35rzq1KfBlyRZc/jdXtmEJM3gc4p194LS5DdlO2ZaNz/+tnTJWGRxzbEaGkbd6o6DUqwCwSSBQ=="
    },
    "47": {
      "iv": "pTxVEuV9HdPNDgTn",
      "tag": "6gwRsgqfbQZG5Gfsr9s8Ug==",
      "data": "c3IqYmu9wfFQDcBQ+cAFBMtuK18zmjzhUn++sskkUTbKGL2QpXIQWBKiXP7w9GsJiPgEEZlkQgnP3Rr1+wvkmLXEp3klMUV4zLoa/O6uYkXYNFl7mDSsb9zKDYt/4171m2pic+JpWUPHrGuRT2prMvuPTEgLcKakxBtH9M0MkAqRJsZfhK1/W219Rveu5NpAk/g1zUe7IBGQsOGccloUhpi9ndeqFD5Hdax5uv4yy9qkad0JpV+gUwJUnnlBNf9BMvXnAHKeFgKiUe/t7/olO2D0MJIauO/lt+B6NtTGrIPMjY+lbcbNKzpB2EECToyhYkdQfXjmRLKXEiVyRYo3uqyH2X78IGXIJyUA66OzZNY9+J7pSazzfEd2bSAXJ2vjjCQXego0At+dJxUsgd8i3Btwh0mSHrJBTgNzI5QZe1taJum1DwG42jqsw2/u+tEwuJ++3uZoOL62WDbZIb/doWpJIUkkTlslSlNR6uTmDFZTMdq1hEvsuTZv6uolLBUoWk5/sls2nxOgwHXKrYsuwId+t5w3duT1nGeFMbk3rXR/TBXzBn/AgzYJBT4aH4SOm/a7wSzox37jwELcGD+4PAA39Suq7LB5LuJ/7OLP7rLO3ool5eOmAKZc8vYVbf7Jj49IKXHcnZQS/6hOvyz8SoV5R9xCLj5eA2TD6aROvPK/l6rWCr6E5e7UJz6dOZEPcOrhfIPz7fX45jF5PG8YVewvOpaU"
    }
  },
  "holland_types": {
    "R": {
      "name": "實用型 (Realistic)",
      "icon": "fa-tools",
      "color": "#e65100",
      "desc": "此分數越高，代表孩子越喜歡動手解決問題，並按照訂定的規則逐步製造出品。對於操作機械、電子產品或使用手工具具備高度興趣，也喜歡身體力行的活動（如運動、動植物照護）。相較於其他類型，更偏好接觸實際物體的工作。",
      "careers": [
        "營建工程技術員",
        "機械/汽機車維修人員",
        "職業運動員",
        "農牧場工作人員",
        "駕駛員"
      ]
    },
    "I": {
      "name": "研究型 (Investigative)",
      "icon": "fa-flask",
      "color": "#1565c0",
      "desc": "此分數越高，代表孩子越喜歡以觀察、分析、推理等方式找出事物原因與運作原則，並善於運用語言、符號、數字或抽象概念解決問題。喜歡花時間鑽研感興趣的議題，親身探索自然界或進行實驗。",
      "careers": [
        "科學家/研究員",
        "數學家",
        "醫師/醫檢人員",
        "研發工程師",
        "數據調查員",
        "社會科學學者"
      ]
    },
    "A": {
      "name": "藝術型 (Artistic)",
      "icon": "fa-palette",
      "color": "#ad1457",
      "desc": "此分數越高，代表孩子越喜歡用文字、聲音、影像、色彩與動作進行創作活動（如繪畫、音樂、舞蹈、表演）。喜歡依循個人的審美觀或靈感進行創意表達，偏好直覺性與想像力豐富的工作環境。",
      "careers": [
        "室內/商業/視覺設計師",
        "音樂家/演奏家",
        "畫家/插畫家",
        "作家/編劇",
        "舞蹈家/演員"
      ]
    },
    "S": {
      "name": "社會型 (Social)",
      "icon": "fa-hands-helping",
      "color": "#2e7d32",
      "desc": "此分數越高，代表孩子越喜歡與人群互動，重視人的需求與內心感受。對運用自身知識教導他人、聆聽他人困難並主動提供關懷協助具高度熱忱，重視人際和諧與利他價值。",
      "careers": [
        "教師/輔導教師",
        "心理諮商師",
        "社會工作師",
        "護理醫護人員",
        "幼兒保育人員",
        "觀光導遊"
      ]
    },
    "E": {
      "name": "企業型 (Enterprising)",
      "icon": "fa-chart-line",
      "color": "#c62828",
      "desc": "此分數越高，代表孩子越喜歡領導、說服或激勵他人以達成團隊目標。喜歡在團體中扮演組織決策角色、爭取權益或帶領團隊競賽，擅長人際溝通、專案推動與影響他人。",
      "careers": [
        "企業主管/專案經理",
        "業務行銷專員",
        "法律從業人員",
        "媒體傳播/公關人員",
        "民意代表/政治家"
      ]
    },
    "C": {
      "name": "事務型 (Conventional)",
      "icon": "fa-clipboard-check",
      "color": "#455a64",
      "desc": "此分數越高，代表孩子越喜歡執行具明確標準與規則的任務。對於運用數字、表格或電腦系統進行精確計算、排程、校對與紀錄有高度耐心，擅長將龐雜資料整理為條理清晰的資訊。",
      "careers": [
        "會計師/審計員",
        "金融出納人員",
        "公務員",
        "行政管理專員",
        "資料處理人員",
        "地政士"
      ]
    }
  },
  "aptitude_subtests": {
    "chinese": {
      "name": "語文能力",
      "desc": "測量在不同情境下與人之間的溝通、互動之語言表達以及理解文本內容的能力。高分者語文理解與口語表達優異。",
      "group": "學術與溝通核心"
    },
    "math": {
      "name": "數學能力 (數感)",
      "desc": "測量在數字與數量概念的運用能力，以及與數量方面有關的推理能力，又稱「數感」能力。高分者具備快速數字直覺與運算思維。",
      "group": "學術與理工核心"
    },
    "science": {
      "name": "科學推理",
      "desc": "測量運用觀察與經驗線索，解決日常生活情境中所遭遇到的自然與科學問題之能力。高分者具備生活科學探究力。",
      "group": "理工與自然探索"
    },
    "observation": {
      "name": "觀察能力",
      "desc": "測量對於觀察和辨別實物或現象在圖形與外形上的改變或細小差別，並快速擷取資訊的能力。高分者眼光銳利、辨識敏捷。",
      "group": "感知與細節掌握"
    },
    "logic": {
      "name": "邏輯推理",
      "desc": "測量找出事物共同原理原則，並能將既有原則類推應用到相似情境以協助問題解決的能力。高分者思維嚴謹條理分明。",
      "group": "學術與理工核心"
    },
    "space": {
      "name": "空間關係",
      "desc": "測量物體在腦海中方向轉換（如翻轉、旋轉、折疊）以及空間、立體圖形中線索與距離感之判斷力。為工科、建築、設計之關鍵核心。",
      "group": "工程與空間感知"
    },
    "aesthetic": {
      "name": "美感判斷",
      "desc": "測量視覺感知的表達能力和判斷視覺形象的敏銳度。透過色彩、線條與畫面構圖等方式展現個人審美。為設計與藝術的重要基礎。",
      "group": "藝術與人文設計"
    },
    "creativity": {
      "name": "創意潛能",
      "desc": "測量在有限時間內針對主題提出多元獨特構想，並突破常規框架改變思考方式之能力。高分者點子多、具備發明與創新思維。",
      "group": "創新與多維思維"
    }
  },
  "career_clusters": [
    {
      "id": "mechanical",
      "name": "機械群",
      "category": "技術與製造類",
      "icon": "fa-cogs",
      "desc": "需要具備機械相關領域之基本知識，以及未來學習機械製圖與識圖、模具與元件之設計製造、管線與零組件之組配和連接、機具設備操作、保養及簡易修護能力和技術之基礎。",
      "subjects": [
        "機械科",
        "模具科",
        "製圖科",
        "鑄造科",
        "板金科",
        "配管科",
        "機械木模科",
        "機電科",
        "生物產業機電科"
      ]
    },
    {
      "id": "power_mechanical",
      "name": "動力機械群",
      "category": "技術與維修類",
      "icon": "fa-car",
      "desc": "需要具備機械各系統之構造與動作原理，以作為未來學習汽機車、飛機和大型農具等重機械之操作、維修、調整、試驗等能力和技術之基礎。",
      "subjects": [
        "汽車科",
        "重機科",
        "農業機械科",
        "飛機修護科"
      ]
    },
    {
      "id": "electrical",
      "name": "電機電子群",
      "category": "高科技與資訊類",
      "icon": "fa-microchip",
      "desc": "需要具備電機電子之專業知識，從學習電壓、電流與功率及電磁應用，進而學習數位與類比訊號、演算法則與邏輯推論，並能操作電子元件與分析裝配電路。",
      "subjects": [
        "電機科",
        "電子科",
        "資訊科",
        "控制科",
        "冷凍空調科",
        "航空電子科",
        "電子通信科"
      ]
    },
    {
      "id": "chemical",
      "name": "化工群",
      "category": "材料與實驗類",
      "icon": "fa-vial",
      "desc": "需要具備基礎化學原理、化學分析以及化學工程中的操作、維護、設計、生產等初階技術能力，適合喜愛化學實驗與製程技術者。",
      "subjects": [
        "化工科",
        "染整科",
        "紡織科"
      ]
    },
    {
      "id": "civil_architecture",
      "name": "土木建築群",
      "category": "營造與空間類",
      "icon": "fa-drafting-compass",
      "desc": "需要了解土木建築施工圖，認識工程施工規範與技術，體驗台灣與全球建築環境文化，並輔導取得工程相關技術士證照。",
      "subjects": [
        "土木科",
        "建築科",
        "消防工程科"
      ]
    },
    {
      "id": "business",
      "name": "商業管理群",
      "category": "商管與服務類",
      "icon": "fa-briefcase",
      "desc": "需要具備基本商業知識、現代經營方法、資訊應用以及創新服務等基礎技能，培養商業營運、會計財務與現代流通服務技術人才。",
      "subjects": [
        "文書事務科",
        "商業經營科",
        "國際貿易科",
        "會計事務科",
        "資料處理科",
        "不動產事務科",
        "航運管理科",
        "流通管理科",
        "水產經營科",
        "農產行銷科"
      ]
    },
    {
      "id": "foreign_languages",
      "name": "外語群",
      "category": "語文與國際類",
      "icon": "fa-globe-asia",
      "desc": "需要具備良好外語溝通能力，能使用外語與客戶保持良好口語及書面溝通互動、提升服務品質，並持續提升外語專業素養與國際視野。",
      "subjects": [
        "應用外語科（英文組）",
        "應用外語科（日文組）"
      ]
    },
    {
      "id": "design",
      "name": "設計群",
      "category": "創意與視覺類",
      "icon": "fa-paint-brush",
      "desc": "需要具備設計基本知識與概念，培養求新求變的設計思維與創意發想力，增進自覺觀察敏銳度，能精確傳達設計理念。",
      "subjects": [
        "金屬工藝科",
        "室內空間設計科",
        "美工科",
        "家具木工科",
        "圖文傳播科",
        "陶瓷工程科",
        "家具設計科",
        "廣告設計科",
        "室內設計科"
      ]
    },
    {
      "id": "agriculture",
      "name": "農業群",
      "category": "生物與永續類",
      "icon": "fa-seedling",
      "desc": "需要具備動植物生產保育、農畜產品生產與經營等知能，學習自然資源永續利用與園藝專業技能，透過創意思考鏈結綠色產業。",
      "subjects": [
        "農場經營科",
        "畜產保健科",
        "森林科",
        "園藝科",
        "造園科",
        "野生動物保育科"
      ]
    },
    {
      "id": "food",
      "name": "食品群",
      "category": "加工與檢驗類",
      "icon": "fa-utensils",
      "desc": "需要具備食品加工技術、微生物與食品關係及食品化學變化知能，熟練食品加工機械操作與檢驗分析技術，考取食品相關證照。",
      "subjects": [
        "食品加工科",
        "食品科",
        "水產食品科"
      ]
    },
    {
      "id": "hospitality",
      "name": "餐旅群",
      "category": "餐飲與觀光類",
      "icon": "fa-concierge-bell",
      "desc": "具備中西餐點烹飪與食品安全知能、餐旅外語與管理能力，掌握餐旅經營概況、產品銷售及觀光法規，擅長人際應對溝通。",
      "subjects": [
        "觀光事業科",
        "餐飲管理科"
      ]
    },
    {
      "id": "home_economics",
      "name": "家政群",
      "category": "生活與時尚類",
      "icon": "fa-cut",
      "desc": "具備服裝、美容造型設計能力，獲得健康膳食製備與家庭照顧、幼兒發展照護等知能，提升生活治理與美學應用技術。",
      "subjects": [
        "家政科",
        "服裝科",
        "美容科",
        "幼兒保育科",
        "時尚模特兒科",
        "時尚造型科"
      ]
    },
    {
      "id": "aquatic",
      "name": "水產群",
      "category": "海洋與養殖類",
      "icon": "fa-fish",
      "desc": "具備漁具製作修護、漁法實作與水產養殖技術，了解海洋生態、氣象學、保育與休閒娛樂漁業知能。",
      "subjects": [
        "漁業科",
        "水產養殖科"
      ]
    },
    {
      "id": "maritime",
      "name": "海事群",
      "category": "航海與輪機類",
      "icon": "fa-ship",
      "desc": "學習船舶設備之正確操作維護，掌握航海安全、國際環保法規與人命安全公約，具備船上救生醫療急救與輪機保養技術。",
      "subjects": [
        "航海科",
        "輪機科"
      ]
    },
    {
      "id": "arts",
      "name": "藝術群",
      "category": "表演與藝術類",
      "icon": "fa-guitar",
      "desc": "具備視覺或表演藝術領域基本概念，涵養美學品味與藝術品鑑賞力，掌握各類媒材與展演形式，發揮藝術創作才華。",
      "subjects": [
        "音樂科",
        "西樂科",
        "國樂科",
        "舞蹈科",
        "美術科",
        "影劇科",
        "電影電視科",
        "表演藝術科",
        "戲劇科",
        "時尚工藝科",
        "多媒體動畫科"
      ]
    },
    {
      "id": "high_school",
      "name": "一般高中 / 普通高中",
      "category": "學術深造類",
      "icon": "fa-graduation-cap",
      "desc": "一般高中偏向學術學科（如國文、英文、數學、社會、自然）之深化學習與思維訓練，作為未來銜接一般綜合大學或科技大學各專業學系的堅實基礎。測驗顯示孩子具備在此領域持續深造之良好潛能。",
      "subjects": [
        "普通科（高一探索，高二分組自然學群、社會學群）"
      ]
    }
  ]
};
