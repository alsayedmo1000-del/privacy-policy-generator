/**
 * Advanced UI Controller for App Privacy Policy Generator
 * Supports 12 Global Languages, Quick Presets, Advanced Input Controls, and Real-Time State Management
 */

document.addEventListener('DOMContentLoaded', () => {
  const {
    SUPPORTED_LANGUAGES,
    THIRD_PARTY_SERVICES,
    PII_OPTIONS,
    PRESETS,
    state,
    I18N,
    generatePrivacyPolicyText,
    generateTermsAndConditionsText,
    htmlToMarkdown,
    createStandaloneHtml
  } = window.GeneratorApp;

  // Cache Elements
  const htmlRoot = document.documentElement;
  const stepPane1 = document.getElementById('step-pane-1');
  const stepPane2 = document.getElementById('step-pane-2');
  const stepPane3 = document.getElementById('step-pane-3');

  const node1 = document.getElementById('node-step-1');
  const node2 = document.getElementById('node-step-2');
  const node3 = document.getElementById('node-step-3');

  const btnNextToServices = document.getElementById('btn-next-to-services');
  const btnBackToStep1 = document.getElementById('btn-back-to-step-1');
  const btnNextToGenerate = document.getElementById('btn-next-to-generate');
  const btnBackToEdit = document.getElementById('btn-back-to-edit');
  const iconNextArrow = document.getElementById('icon-next-arrow');
  const iconBackArrow = document.getElementById('icon-back-arrow');

  // Form Fields
  const inpApp = document.getElementById('inp-app-name');
  const appCounter = document.getElementById('app-name-counter');
  const inpEmail = document.getElementById('inp-email');
  const selAppType = document.getElementById('sel-app-type');
  const selPlatform = document.getElementById('sel-platform');
  const inpDate = document.getElementById('inp-effective-date');
  const inpDev = document.getElementById('inp-dev-name');
  const ownerRadios = document.querySelectorAll('input[name="owner-entity"]');
  const piiChipsContainer = document.getElementById('pii-chips-container');
  const piiCounter = document.getElementById('pii-selected-counter');
  const customTagsContainer = document.getElementById('custom-tags-list');
  const inpCustomTag = document.getElementById('inp-custom-tag');
  const presetBtns = document.querySelectorAll('.preset-pill-btn');

  // Step 2 Fields
  const servicesCardsBox = document.getElementById('services-cards-box');
  const inpSearchServices = document.getElementById('inp-search-services');
  const btnSelectAll = document.getElementById('btn-select-all-services');
  const btnClearAll = document.getElementById('btn-clear-services');
  const chkTargetChildren = document.getElementById('chk-target-children');
  const inpDeletionUrl = document.getElementById('inp-deletion-url');

  // Step 3 Fields
  const tabDocPrivacy = document.getElementById('tab-doc-privacy');
  const tabDocTerms = document.getElementById('tab-doc-terms');
  const selDocLanguage = document.getElementById('sel-doc-language');
  const viewModePreview = document.getElementById('view-mode-preview');
  const viewModeHtml = document.getElementById('view-mode-html');
  const viewModeMd = document.getElementById('view-mode-md');
  const renderContentBox = document.getElementById('render-content-box');
  const codeContentBox = document.getElementById('code-content-box');
  const codeContentTag = codeContentBox.querySelector('code');

  // Actions
  const btnCopyCode = document.getElementById('btn-copy-code');
  const copyBtnCaption = document.getElementById('copy-btn-caption');
  const btnDownloadHtml = document.getElementById('btn-download-html');
  const btnDownloadMd = document.getElementById('btn-download-md');
  const btnLiveView = document.getElementById('btn-live-view');
  const btnPrintDoc = document.getElementById('btn-print-doc');
  const copyToastAlert = document.getElementById('copy-toast-alert');
  const toastTextMsg = document.getElementById('toast-text-msg');

  // Language & Theme Elements
  const btnLangDropdown = document.getElementById('btn-lang-dropdown');
  const langDropdownMenu = document.getElementById('lang-dropdown-menu');
  const currentLangFlag = document.getElementById('current-lang-flag');
  const currentLangName = document.getElementById('current-lang-name');
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');

  // Initialize Date
  inpDate.value = state.effectiveDate;

  // Load Saved State from localStorage
  const savedState = localStorage.getItem('app_policy_gen_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      Object.assign(state, parsed);
    } catch {
      // ignore corrupted storage
    }
  }

  function syncInputsFromState() {
    inpApp.value = state.appName || 'My Awesome App';
    inpEmail.value = state.contactEmail || 'support@example.com';
    inpDev.value = state.devName || 'Developer Studio';
    selAppType.value = state.appType || 'ad-supported';
    selPlatform.value = state.platform || 'android';
    inpDate.value = state.effectiveDate || new Date().toISOString().split('T')[0];
    inpDeletionUrl.value = state.dataDeletionUrl || 'https://example.com/delete-account';
    chkTargetChildren.checked = Boolean(state.targetChildren);
    ownerRadios.forEach(r => {
      r.checked = r.value === (state.devType || 'individual');
    });
    updateAppCounter();
    refreshClearButtons();
  }

  function saveState() {
    try {
      localStorage.setItem('app_policy_gen_state', JSON.stringify({
        appName: state.appName,
        devType: state.devType,
        devName: state.devName,
        contactEmail: state.contactEmail,
        appType: state.appType,
        platform: state.platform,
        effectiveDate: state.effectiveDate,
        collectedData: state.collectedData,
        customData: state.customData,
        selectedServices: state.selectedServices,
        targetChildren: state.targetChildren,
        dataDeletionUrl: state.dataDeletionUrl,
        uiLang: state.uiLang,
        docLang: state.docLang,
        darkMode: state.darkMode
      }));
    } catch {
      // ignore storage quota errors
    }
  }

  // Toast Notification
  let toastTimeout = null;
  function showToast(msg) {
    toastTextMsg.textContent = msg;
    copyToastAlert.classList.remove('is-hidden');
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      copyToastAlert.classList.add('is-hidden');
    }, 2600);
  }

  // Populate Global Languages Dropdown (12 Languages)
  function setupLanguagesDropdown() {
    langDropdownMenu.innerHTML = '';
    selDocLanguage.innerHTML = '';

    SUPPORTED_LANGUAGES.forEach(lang => {
      // 1. UI Dropdown Option
      const opt = document.createElement('div');
      opt.className = `lang-option-row ${lang.code === state.uiLang ? 'is-active' : ''}`;
      opt.innerHTML = `
        <div class="is-flex is-align-items-center gap-2">
          <span>${lang.flag}</span>
          <span class="font-weight-semibold">${lang.name}</span>
        </div>
        <span class="is-size-7 has-text-grey">${lang.country}</span>
      `;
      opt.addEventListener('click', () => {
        state.docLang = lang.code;
        setUiLanguage(lang.code);
        selDocLanguage.value = lang.code;
        langDropdownMenu.classList.remove('is-open');
      });
      langDropdownMenu.appendChild(opt);

      // 2. Document Output Language Option in Step 3
      const docOpt = document.createElement('option');
      docOpt.value = lang.code;
      docOpt.textContent = `${lang.flag} ${lang.name} (${lang.country})`;
      if (lang.code === state.docLang) docOpt.selected = true;
      selDocLanguage.appendChild(docOpt);
    });
  }

  btnLangDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdownMenu.classList.toggle('is-open');
  });

  document.addEventListener('click', () => {
    langDropdownMenu.classList.remove('is-open');
  });

  // Switch UI Language
  function setUiLanguage(langCode) {
    const langObj = SUPPORTED_LANGUAGES.find(l => l.code === langCode) || SUPPORTED_LANGUAGES[0];
    state.uiLang = langObj.code;

    htmlRoot.setAttribute('lang', langObj.code);
    htmlRoot.setAttribute('dir', langObj.dir);
    currentLangFlag.textContent = langObj.flag;
    currentLangName.textContent = langObj.name;

    // Flip navigation arrows based on RTL/LTR
    if (iconNextArrow) {
      iconNextArrow.className = langObj.dir === 'rtl' ? 'fas fa-arrow-left' : 'fas fa-arrow-right';
    }
    if (iconBackArrow) {
      iconBackArrow.className = langObj.dir === 'rtl' ? 'fas fa-arrow-right' : 'fas fa-arrow-left';
    }

    const t = Object.assign({}, I18N.en, I18N[langObj.code] || {});
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key]) el.setAttribute('placeholder', t[key]);
    });

    setupLanguagesDropdown();
    renderPiiChips();
    renderServicesCards(inpSearchServices.value);
    if (!stepPane3.classList.contains('is-hidden')) {
      renderGeneratedDocument();
    }
    saveState();
  }

  // Stepper Transitions
  function syncStateFromInputs() {
    state.appName = inpApp.value.trim() || 'My Awesome App';
    state.contactEmail = inpEmail.value.trim() || 'support@example.com';
    state.devName = inpDev.value.trim() || 'Developer Studio';
    state.appType = selAppType.value;
    state.platform = selPlatform.value;
    state.effectiveDate = inpDate.value;
    state.targetChildren = chkTargetChildren.checked;
    state.dataDeletionUrl = inpDeletionUrl.value.trim();
    saveState();
  }

  function goToStep(step) {
    syncStateFromInputs();

    stepPane1.classList.add('is-hidden');
    stepPane2.classList.add('is-hidden');
    stepPane3.classList.add('is-hidden');

    node1.classList.remove('active', 'completed');
    node2.classList.remove('active', 'completed');
    node3.classList.remove('active', 'completed');

    if (step === 1) {
      stepPane1.classList.remove('is-hidden');
      node1.classList.add('active');
    } else if (step === 2) {
      stepPane2.classList.remove('is-hidden');
      node1.classList.add('completed');
      node2.classList.add('active');
    } else if (step === 3) {
      stepPane3.classList.remove('is-hidden');
      node1.classList.add('completed');
      node2.classList.add('completed');
      node3.classList.add('active');
      renderGeneratedDocument();
    }
  }

  // Make Stepper Header Nodes Clickable
  node1.addEventListener('click', () => goToStep(1));
  node2.addEventListener('click', () => goToStep(2));
  node3.addEventListener('click', () => goToStep(3));

  btnNextToServices.addEventListener('click', () => {
    goToStep(2);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  });

  btnBackToStep1.addEventListener('click', () => {
    goToStep(1);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  });

  btnNextToGenerate.addEventListener('click', () => {
    goToStep(3);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  });

  btnBackToEdit.addEventListener('click', () => {
    goToStep(1);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  });

  // One-Click Quick Presets
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const presetKey = btn.getAttribute('data-preset');
      const preset = PRESETS[presetKey];
      if (!preset) return;

      presetBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      state.appName = preset.appName;
      state.appType = preset.appType;
      state.platform = preset.platform;
      state.collectedData = [...preset.collectedData];
      state.selectedServices = [...preset.selectedServices];
      state.targetChildren = Boolean(preset.targetChildren);

      syncInputsFromState();
      renderPiiChips();
      renderServicesCards(inpSearchServices.value);
      saveState();

      const t = Object.assign({}, I18N.en, I18N[state.uiLang] || {});
      showToast(t.presetAppliedToast || 'Preset applied!');
    });
  });

  // Character Counter for App Name
  function updateAppCounter() {
    const len = inpApp.value.length;
    appCounter.textContent = `${len} / 50`;
  }
  inpApp.addEventListener('input', updateAppCounter);

  // Clear Input (x) Button
  const clearCheckFns = [];
  document.querySelectorAll('.input-clear-btn').forEach(btn => {
    const targetId = btn.getAttribute('data-target');
    const inputEl = document.getElementById(targetId);
    if (!inputEl) return;

    function checkVal() {
      if (inputEl.value.trim().length > 0) btn.classList.add('visible');
      else btn.classList.remove('visible');
    }

    clearCheckFns.push(checkVal);
    inputEl.addEventListener('input', checkVal);

    btn.addEventListener('click', () => {
      inputEl.value = '';
      inputEl.focus();
      checkVal();
      updateAppCounter();
      syncStateFromInputs();
    });
  });

  function refreshClearButtons() {
    clearCheckFns.forEach(fn => fn());
  }

  // Render Interactive PII Chips
  function renderPiiChips() {
    piiChipsContainer.innerHTML = '';
    const curLang = state.uiLang;

    PII_OPTIONS.forEach(opt => {
      const isSelected = state.collectedData.includes(opt.id);
      const label = opt[curLang] || opt.en;

      const chip = document.createElement('div');
      chip.className = `interactive-chip ${isSelected ? 'is-selected' : ''}`;
      chip.innerHTML = `
        <i class="fa-solid ${opt.icon} is-size-6 ${isSelected ? 'has-text-link' : 'has-text-grey'}"></i>
        <span>${label}</span>
      `;

      chip.addEventListener('click', () => {
        const iconEl = chip.querySelector('i');
        if (state.collectedData.includes(opt.id)) {
          state.collectedData = state.collectedData.filter(id => id !== opt.id);
          chip.classList.remove('is-selected');
          if (iconEl) {
            iconEl.classList.remove('has-text-link');
            iconEl.classList.add('has-text-grey');
          }
        } else {
          state.collectedData.push(opt.id);
          chip.classList.add('is-selected');
          if (iconEl) {
            iconEl.classList.remove('has-text-grey');
            iconEl.classList.add('has-text-link');
          }
        }
        updatePiiCounter();
        saveState();
      });

      piiChipsContainer.appendChild(chip);
    });
    updatePiiCounter();
  }

  function updatePiiCounter() {
    const t = Object.assign({}, I18N.en, I18N[state.uiLang] || {});
    piiCounter.textContent = `${state.collectedData.length} ${t.selectedUnit || 'selected'}`;
  }

  // Custom Tags Component
  function renderCustomTags() {
    customTagsContainer.innerHTML = '';
    state.customData.forEach((tag, idx) => {
      const pill = document.createElement('span');
      pill.className = 'custom-tag-pill';
      pill.innerHTML = `
        <span></span>
        <span class="custom-tag-remove" title="Remove">&times;</span>
      `;
      pill.querySelector('span').textContent = tag;
      pill.querySelector('.custom-tag-remove').addEventListener('click', () => {
        state.customData.splice(idx, 1);
        renderCustomTags();
        saveState();
      });
      customTagsContainer.appendChild(pill);
    });
  }

  inpCustomTag.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const val = inpCustomTag.value.trim();
      if (val && !state.customData.includes(val)) {
        state.customData.push(val);
        inpCustomTag.value = '';
        renderCustomTags();
        saveState();
      }
    }
  });

  // Render Third Party Services Cards
  function renderServicesCards(filter = '') {
    servicesCardsBox.innerHTML = '';
    const filtered = THIRD_PARTY_SERVICES.filter(s => {
      const term = filter.toLowerCase().trim();
      return !term || s.name.toLowerCase().includes(term) || s.desc.toLowerCase().includes(term) || s.badge.toLowerCase().includes(term);
    });

    filtered.forEach(srv => {
      const isSelected = state.selectedServices.includes(srv.id);
      const card = document.createElement('div');
      card.className = `service-modern-card ${isSelected ? 'is-active' : ''}`;

      card.innerHTML = `
        <div class="is-flex is-align-items-center gap-3">
          <input type="checkbox" ${isSelected ? 'checked' : ''} class="checkbox">
          <i class="${srv.icon} fa-lg has-text-link"></i>
          <div>
            <div class="font-weight-bold is-size-6">${srv.name}</div>
            <div class="is-size-7 has-text-grey">${srv.desc}</div>
          </div>
        </div>
        <div class="is-flex is-align-items-center gap-2">
          <span class="service-badge">${srv.badge}</span>
          <a href="${srv.url}" target="_blank" rel="noopener noreferrer" class="button is-small is-light" onclick="event.stopPropagation()" title="Official Privacy Policy">
            <i class="fas fa-external-link-alt is-size-7"></i>
          </a>
        </div>
      `;

      card.addEventListener('click', (e) => {
        if (e.target.tagName.toLowerCase() === 'a' || e.target.closest('a')) return;
        const cb = card.querySelector('input');
        if (e.target !== cb) cb.checked = !cb.checked;

        if (cb.checked) {
          if (!state.selectedServices.includes(srv.id)) state.selectedServices.push(srv.id);
          card.classList.add('is-active');
        } else {
          state.selectedServices = state.selectedServices.filter(id => id !== srv.id);
          card.classList.remove('is-active');
        }
        saveState();
      });

      servicesCardsBox.appendChild(card);
    });
  }

  inpSearchServices.addEventListener('input', (e) => renderServicesCards(e.target.value));

  btnSelectAll.addEventListener('click', () => {
    state.selectedServices = ['google-play-services', 'google-admob', 'firebase-crashlytics', 'google-analytics-firebase'];
    renderServicesCards(inpSearchServices.value);
    saveState();
  });

  btnClearAll.addEventListener('click', () => {
    state.selectedServices = [];
    renderServicesCards(inpSearchServices.value);
    saveState();
  });

  // Render Generated Document (Step 3)
  function renderGeneratedDocument() {
    const isPrivacy = state.activeDoc === 'privacy';
    const lang = state.docLang;
    const rawHtml = isPrivacy
      ? generatePrivacyPolicyText(state, lang)
      : generateTermsAndConditionsText(state, lang);

    renderContentBox.innerHTML = rawHtml;
    renderContentBox.dir = lang === 'ar' ? 'rtl' : 'ltr';

    if (state.activeFormat === 'html') {
      const standalone = createStandaloneHtml(
        state.appName + (isPrivacy ? ' - Privacy Policy' : ' - Terms & Conditions'),
        rawHtml,
        lang
      );
      codeContentTag.textContent = standalone;
      renderContentBox.classList.add('is-hidden');
      codeContentBox.classList.remove('is-hidden');
    } else if (state.activeFormat === 'markdown') {
      codeContentTag.textContent = htmlToMarkdown(rawHtml);
      renderContentBox.classList.add('is-hidden');
      codeContentBox.classList.remove('is-hidden');
    } else {
      renderContentBox.classList.remove('is-hidden');
      codeContentBox.classList.add('is-hidden');
    }
  }

  // Document Choice (Privacy Policy vs Terms)
  tabDocPrivacy.addEventListener('click', () => {
    state.activeDoc = 'privacy';
    tabDocPrivacy.classList.add('is-active');
    tabDocTerms.classList.remove('is-active');
    renderGeneratedDocument();
  });

  tabDocTerms.addEventListener('click', () => {
    state.activeDoc = 'terms';
    tabDocTerms.classList.add('is-active');
    tabDocPrivacy.classList.remove('is-active');
    renderGeneratedDocument();
  });

  // Document Output Language Dropdown
  selDocLanguage.addEventListener('change', (e) => {
    state.docLang = e.target.value;
    renderGeneratedDocument();
    saveState();
  });

  // View Modes (Preview, HTML, Markdown)
  viewModePreview.addEventListener('click', () => {
    state.activeFormat = 'preview';
    viewModePreview.className = 'button is-link is-small font-weight-semibold';
    viewModeHtml.className = 'button is-light is-small font-weight-semibold';
    viewModeMd.className = 'button is-light is-small font-weight-semibold';
    renderGeneratedDocument();
  });

  viewModeHtml.addEventListener('click', () => {
    state.activeFormat = 'html';
    viewModeHtml.className = 'button is-link is-small font-weight-semibold';
    viewModePreview.className = 'button is-light is-small font-weight-semibold';
    viewModeMd.className = 'button is-light is-small font-weight-semibold';
    renderGeneratedDocument();
  });

  viewModeMd.addEventListener('click', () => {
    state.activeFormat = 'markdown';
    viewModeMd.className = 'button is-link is-small font-weight-semibold';
    viewModePreview.className = 'button is-light is-small font-weight-semibold';
    viewModeHtml.className = 'button is-light is-small font-weight-semibold';
    renderGeneratedDocument();
  });

  // Copy Action with file:// fallback
  async function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // Fallback below
      }
    }
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
    } catch {
      // ignore
    }
    document.body.removeChild(ta);
    return true;
  }

  btnCopyCode.addEventListener('click', async () => {
    const isPrivacy = state.activeDoc === 'privacy';
    const lang = state.docLang;
    const rawHtml = isPrivacy ? generatePrivacyPolicyText(state, lang) : generateTermsAndConditionsText(state, lang);
    const content = state.activeFormat === 'markdown'
      ? htmlToMarkdown(rawHtml)
      : createStandaloneHtml(state.appName + (isPrivacy ? ' - Privacy Policy' : ' - Terms & Conditions'), rawHtml, lang);

    await copyTextToClipboard(content);
    const t = Object.assign({}, I18N.en, I18N[state.uiLang] || {});
    copyBtnCaption.textContent = '✓';
    setTimeout(() => {
      copyBtnCaption.textContent = t.btnCopy || 'Copy Code';
    }, 1800);
    showToast(t.copySuccessToast || 'Copied to clipboard!');
  });

  // Download Standalone HTML
  btnDownloadHtml.addEventListener('click', () => {
    const isPrivacy = state.activeDoc === 'privacy';
    const lang = state.docLang;
    const rawHtml = isPrivacy ? generatePrivacyPolicyText(state, lang) : generateTermsAndConditionsText(state, lang);
    const standalone = createStandaloneHtml(state.appName + (isPrivacy ? ' - Privacy Policy' : ' - Terms & Conditions'), rawHtml, lang);

    const blob = new Blob([standalone], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${isPrivacy ? 'privacy-policy' : 'terms-and-conditions'}.html`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('✓ HTML Downloaded');
  });

  // Download Markdown
  btnDownloadMd.addEventListener('click', () => {
    const isPrivacy = state.activeDoc === 'privacy';
    const lang = state.docLang;
    const rawHtml = isPrivacy ? generatePrivacyPolicyText(state, lang) : generateTermsAndConditionsText(state, lang);
    const md = htmlToMarkdown(rawHtml);

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${isPrivacy ? 'PRIVACY_POLICY' : 'TERMS'}.md`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('✓ Markdown Downloaded');
  });

  // Open Live View in a New Tab
  if (btnLiveView) {
    btnLiveView.addEventListener('click', () => {
      const isPrivacy = state.activeDoc === 'privacy';
      const lang = state.docLang;
      const rawHtml = isPrivacy ? generatePrivacyPolicyText(state, lang) : generateTermsAndConditionsText(state, lang);
      const standalone = createStandaloneHtml(state.appName + (isPrivacy ? ' - Privacy Policy' : ' - Terms & Conditions'), rawHtml, lang);

      const blob = new Blob([standalone], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // Print Action
  btnPrintDoc.addEventListener('click', () => {
    // Ensure preview mode is active when printing
    renderContentBox.classList.remove('is-hidden');
    window.print();
  });

  // Input Change Listeners
  inpApp.addEventListener('input', e => { state.appName = e.target.value; saveState(); });
  inpEmail.addEventListener('input', e => { state.contactEmail = e.target.value; saveState(); });
  inpDev.addEventListener('input', e => { state.devName = e.target.value; saveState(); });
  selAppType.addEventListener('change', e => { state.appType = e.target.value; saveState(); });
  selPlatform.addEventListener('change', e => { state.platform = e.target.value; saveState(); });
  inpDate.addEventListener('change', e => { state.effectiveDate = e.target.value; saveState(); });
  chkTargetChildren.addEventListener('change', e => { state.targetChildren = e.target.checked; saveState(); });
  inpDeletionUrl.addEventListener('input', e => { state.dataDeletionUrl = e.target.value; saveState(); });
  ownerRadios.forEach(r => r.addEventListener('change', e => { state.devType = e.target.value; saveState(); }));

  // Theme Toggle & Persistence
  function applyTheme(isDark) {
    state.darkMode = Boolean(isDark);
    document.body.classList.toggle('dark-mode', state.darkMode);
    themeIcon.className = state.darkMode ? 'fas fa-sun has-text-warning' : 'fas fa-moon';
  }

  themeToggleBtn.addEventListener('click', () => {
    applyTheme(!state.darkMode);
    saveState();
  });

  // Initialize Everything
  applyTheme(state.darkMode !== false);
  syncInputsFromState();
  setupLanguagesDropdown();
  setUiLanguage(state.uiLang || 'ar');
  renderCustomTags();
  goToStep(1);
});
