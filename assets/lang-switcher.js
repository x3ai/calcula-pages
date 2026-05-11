(function () {
  var SUPPORTED = ['en', 'zh-Hans', 'zh-Hant', 'ja', 'ko', 'es', 'fr', 'de'];
  var FALLBACK = 'en';

  var I18N = {
    'en': {
      'nav.language': 'Language',
      'nav.support': 'Support',
      'nav.privacy': 'Privacy Policy',
      'privacy.heading': 'Privacy Policy',
      'privacy.summary': 'Calcula is a scientific math keyboard for iPhone. This policy explains how Calcula handles typed content, calculations, settings, and history.',
      'privacy.updated': 'Last updated: May 10, 2026',
      'support.heading': 'Support',
      'support.summary': 'Calcula is a scientific math keyboard for iPhone. Use this page for support, bug reports, and privacy information.',
      'support.badge': 'No account required',
      'support.contactHeading': 'Contact',
      'support.contactBody': 'For support, bug reports, or feature requests, email:',
      'footer.contactPrefix': 'Contact:',
      'footer.privacyPrefix': 'Privacy Policy:',
      'footer.privacyLink': 'Calcula Privacy Policy',
      'page.privacy.title': 'Calcula Privacy Policy',
      'page.privacy.description': 'Privacy Policy for Calcula, a scientific math keyboard for iPhone.',
      'page.support.title': 'Calcula Support',
      'page.support.description': 'Support page for Calcula, a scientific math keyboard for iPhone.'
    },
    'zh-Hans': {
      'nav.language': '语言',
      'nav.support': '支持',
      'nav.privacy': '隐私政策',
      'privacy.heading': '隐私政策',
      'privacy.summary': 'Calcula 是一款 iPhone 科学计算键盘。本政策说明 Calcula 如何处理输入内容、计算、设置与历史。',
      'privacy.updated': '最后更新：2026 年 5 月 10 日',
      'support.heading': '支持',
      'support.summary': 'Calcula 是一款 iPhone 科学计算键盘。本页面提供使用支持、问题反馈与隐私说明。',
      'support.badge': '无需账号',
      'support.contactHeading': '联系我们',
      'support.contactBody': '需要使用支持、问题反馈或功能建议，请发送邮件到：',
      'footer.contactPrefix': '联系方式：',
      'footer.privacyPrefix': '隐私政策：',
      'footer.privacyLink': 'Calcula 隐私政策',
      'page.privacy.title': 'Calcula 隐私政策',
      'page.privacy.description': 'Calcula iPhone 科学计算键盘的隐私政策。',
      'page.support.title': 'Calcula 支持',
      'page.support.description': 'Calcula iPhone 科学计算键盘的支持页面。'
    },
    'zh-Hant': {
      'nav.language': '語言',
      'nav.support': '支援',
      'nav.privacy': '隱私政策',
      'privacy.heading': '隱私政策',
      'privacy.summary': 'Calcula 是一款 iPhone 科學計算鍵盤。本政策說明 Calcula 如何處理輸入內容、計算、設定與歷史。',
      'privacy.updated': '最後更新：2026 年 5 月 10 日',
      'support.heading': '支援',
      'support.summary': 'Calcula 是一款 iPhone 科學計算鍵盤。本頁面提供使用支援、問題回報與隱私說明。',
      'support.badge': '無需帳號',
      'support.contactHeading': '聯絡我們',
      'support.contactBody': '需要使用支援、問題回報或功能建議，請寄信至：',
      'footer.contactPrefix': '聯絡方式：',
      'footer.privacyPrefix': '隱私政策：',
      'footer.privacyLink': 'Calcula 隱私政策',
      'page.privacy.title': 'Calcula 隱私政策',
      'page.privacy.description': 'Calcula iPhone 科學計算鍵盤的隱私政策。',
      'page.support.title': 'Calcula 支援',
      'page.support.description': 'Calcula iPhone 科學計算鍵盤的支援頁面。'
    },
    'ja': {
      'nav.language': '言語',
      'nav.support': 'サポート',
      'nav.privacy': 'プライバシーポリシー',
      'privacy.heading': 'プライバシーポリシー',
      'privacy.summary': 'Calculaは、iPhone向けの科学計算キーボードです。本ポリシーは、入力内容、計算、設定、履歴の取り扱いについて説明します。',
      'privacy.updated': '最終更新日: 2026年5月10日',
      'support.heading': 'サポート',
      'support.summary': 'Calculaは、iPhone向けの科学計算キーボードです。サポート、不具合報告、プライバシー情報はこのページからどうぞ。',
      'support.badge': 'アカウント不要',
      'support.contactHeading': 'お問い合わせ',
      'support.contactBody': 'サポート、不具合報告、ご要望は次のメールアドレスまでご連絡ください:',
      'footer.contactPrefix': '連絡先:',
      'footer.privacyPrefix': 'プライバシーポリシー:',
      'footer.privacyLink': 'Calcula プライバシーポリシー',
      'page.privacy.title': 'Calcula プライバシーポリシー',
      'page.privacy.description': 'iPhone向け科学計算キーボード Calcula のプライバシーポリシー。',
      'page.support.title': 'Calcula サポート',
      'page.support.description': 'iPhone向け科学計算キーボード Calcula のサポートページ。'
    },
    'ko': {
      'nav.language': '언어',
      'nav.support': '지원',
      'nav.privacy': '개인정보 처리방침',
      'privacy.heading': '개인정보 처리방침',
      'privacy.summary': 'Calcula는 iPhone용 과학 계산 키보드입니다. 본 정책은 입력 내용, 계산, 설정 및 기록을 어떻게 처리하는지 설명합니다.',
      'privacy.updated': '최종 업데이트: 2026년 5월 10일',
      'support.heading': '지원',
      'support.summary': 'Calcula는 iPhone용 과학 계산 키보드입니다. 지원, 버그 리포트, 개인정보 안내는 이 페이지에서 확인하세요.',
      'support.badge': '계정 불필요',
      'support.contactHeading': '문의',
      'support.contactBody': '지원, 버그 리포트 또는 기능 요청은 다음 이메일로 보내주세요:',
      'footer.contactPrefix': '문의:',
      'footer.privacyPrefix': '개인정보 처리방침:',
      'footer.privacyLink': 'Calcula 개인정보 처리방침',
      'page.privacy.title': 'Calcula 개인정보 처리방침',
      'page.privacy.description': 'iPhone용 과학 계산 키보드 Calcula의 개인정보 처리방침.',
      'page.support.title': 'Calcula 지원',
      'page.support.description': 'iPhone용 과학 계산 키보드 Calcula의 지원 페이지.'
    },
    'es': {
      'nav.language': 'Idioma',
      'nav.support': 'Soporte',
      'nav.privacy': 'Política de privacidad',
      'privacy.heading': 'Política de privacidad',
      'privacy.summary': 'Calcula es un teclado científico de matemáticas para iPhone. Esta política explica cómo Calcula trata el contenido escrito, los cálculos, los ajustes y el historial.',
      'privacy.updated': 'Última actualización: 10 de mayo de 2026',
      'support.heading': 'Soporte',
      'support.summary': 'Calcula es un teclado científico de matemáticas para iPhone. Usa esta página para soporte, informes de errores e información de privacidad.',
      'support.badge': 'Sin cuenta necesaria',
      'support.contactHeading': 'Contacto',
      'support.contactBody': 'Para soporte, informes de errores o solicitudes de funciones, escribe a:',
      'footer.contactPrefix': 'Contacto:',
      'footer.privacyPrefix': 'Política de privacidad:',
      'footer.privacyLink': 'Política de privacidad de Calcula',
      'page.privacy.title': 'Política de privacidad de Calcula',
      'page.privacy.description': 'Política de privacidad de Calcula, un teclado científico de matemáticas para iPhone.',
      'page.support.title': 'Soporte de Calcula',
      'page.support.description': 'Página de soporte de Calcula, un teclado científico de matemáticas para iPhone.'
    },
    'fr': {
      'nav.language': 'Langue',
      'nav.support': 'Assistance',
      'nav.privacy': 'Politique de confidentialité',
      'privacy.heading': 'Politique de confidentialité',
      'privacy.summary': 'Calcula est un clavier scientifique pour iPhone. Cette politique explique comment Calcula gère le contenu saisi, les calculs, les réglages et l’historique.',
      'privacy.updated': 'Dernière mise à jour : 10 mai 2026',
      'support.heading': 'Assistance',
      'support.summary': 'Calcula est un clavier scientifique pour iPhone. Utilisez cette page pour l’assistance, les rapports de bogues et les informations de confidentialité.',
      'support.badge': 'Aucun compte requis',
      'support.contactHeading': 'Contact',
      'support.contactBody': 'Pour l’assistance, les rapports de bogues ou les demandes de fonctionnalités, écrivez à :',
      'footer.contactPrefix': 'Contact :',
      'footer.privacyPrefix': 'Politique de confidentialité :',
      'footer.privacyLink': 'Politique de confidentialité Calcula',
      'page.privacy.title': 'Politique de confidentialité Calcula',
      'page.privacy.description': 'Politique de confidentialité de Calcula, un clavier scientifique pour iPhone.',
      'page.support.title': 'Assistance Calcula',
      'page.support.description': 'Page d’assistance de Calcula, un clavier scientifique pour iPhone.'
    },
    'de': {
      'nav.language': 'Sprache',
      'nav.support': 'Support',
      'nav.privacy': 'Datenschutzerklärung',
      'privacy.heading': 'Datenschutzerklärung',
      'privacy.summary': 'Calcula ist eine wissenschaftliche Rechentastatur für das iPhone. Diese Richtlinie erläutert, wie Calcula eingegebene Inhalte, Berechnungen, Einstellungen und Verlauf behandelt.',
      'privacy.updated': 'Zuletzt aktualisiert: 10. Mai 2026',
      'support.heading': 'Support',
      'support.summary': 'Calcula ist eine wissenschaftliche Rechentastatur für das iPhone. Nutze diese Seite für Support, Fehlermeldungen und Datenschutzinformationen.',
      'support.badge': 'Kein Konto erforderlich',
      'support.contactHeading': 'Kontakt',
      'support.contactBody': 'Für Support, Fehlermeldungen oder Funktionswünsche schreibe an:',
      'footer.contactPrefix': 'Kontakt:',
      'footer.privacyPrefix': 'Datenschutzerklärung:',
      'footer.privacyLink': 'Calcula Datenschutzerklärung',
      'page.privacy.title': 'Calcula Datenschutzerklärung',
      'page.privacy.description': 'Datenschutzerklärung von Calcula, einer wissenschaftlichen Rechentastatur für das iPhone.',
      'page.support.title': 'Calcula Support',
      'page.support.description': 'Support-Seite von Calcula, einer wissenschaftlichen Rechentastatur für das iPhone.'
    }
  };

  function normalize(tag) {
    if (!tag) return null;
    var lower = String(tag).toLowerCase();
    if (lower === 'zh' || lower.indexOf('zh-hans') === 0 || lower === 'zh-cn' || lower === 'zh-sg' || lower === 'zh-my') {
      return 'zh-Hans';
    }
    if (lower.indexOf('zh-hant') === 0 || lower === 'zh-tw' || lower === 'zh-hk' || lower === 'zh-mo') {
      return 'zh-Hant';
    }
    if (lower.indexOf('zh') === 0) {
      return 'zh-Hans';
    }
    var primary = lower.split('-')[0];
    for (var i = 0; i < SUPPORTED.length; i++) {
      if (SUPPORTED[i].toLowerCase() === primary) return SUPPORTED[i];
    }
    return null;
  }

  function hashLang() {
    var raw = (window.location.hash || '').replace(/^#/, '');
    if (!raw) return null;
    for (var i = 0; i < SUPPORTED.length; i++) {
      if (SUPPORTED[i] === raw) return SUPPORTED[i];
    }
    return null;
  }

  function detectDefault() {
    var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language];
    for (var i = 0; i < langs.length; i++) {
      var match = normalize(langs[i]);
      if (match) return match;
    }
    return FALLBACK;
  }

  function applyI18N(code) {
    var dict = I18N[code] || I18N[FALLBACK];
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key] != null) nodes[i].textContent = dict[key];
    }
    var page = document.body && document.body.getAttribute('data-page');
    if (page) {
      var titleKey = 'page.' + page + '.title';
      var descKey = 'page.' + page + '.description';
      if (dict[titleKey] != null) document.title = dict[titleKey];
      var meta = document.querySelector('meta[name="description"]');
      if (meta && dict[descKey] != null) meta.setAttribute('content', dict[descKey]);
    }
    var picker = document.getElementById('lang-switcher');
    if (picker && dict['nav.language'] != null) {
      picker.setAttribute('aria-label', dict['nav.language']);
    }
  }

  function apply(code, options) {
    var opts = options || {};
    var blocks = document.querySelectorAll('.language-block');
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      if (block.id === code) {
        block.classList.add('is-active');
      } else {
        block.classList.remove('is-active');
      }
    }
    document.documentElement.setAttribute('lang', code);
    var picker = document.getElementById('lang-switcher');
    if (picker && picker.value !== code) picker.value = code;
    applyI18N(code);
    if (opts.writeHash) {
      var nextHash = code === opts.defaultCode ? '' : '#' + code;
      var url = window.location.pathname + window.location.search + nextHash;
      window.history.replaceState({}, '', url);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.classList.remove('no-js');
    var defaultCode = detectDefault();
    var initial = hashLang() || defaultCode;
    apply(initial, { writeHash: false, defaultCode: defaultCode });

    var picker = document.getElementById('lang-switcher');
    if (picker) {
      picker.addEventListener('change', function () {
        apply(picker.value, { writeHash: true, defaultCode: defaultCode });
      });
    }

    window.addEventListener('hashchange', function () {
      var fromHash = hashLang();
      if (fromHash) apply(fromHash, { writeHash: false, defaultCode: defaultCode });
    });
  });
})();
