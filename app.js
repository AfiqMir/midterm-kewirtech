/**
 * The Post-Lecture Academy — Editorial Monograph Logic
 * UTS Kewirausahaan Berbasis Teknologi (Kewirtek) 2026
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initReadingProgressBar();
  initHookEditorialTabs();
  initPolicySimulator();
  initScrollNavSpy();
});

/* ==========================================================================
   1. Dark / Light Mode Theme Switcher
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('kewirtek_theme') || 'light';
  applyTheme(savedTheme);

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('kewirtek_theme', theme);

    if (theme === 'dark') {
      if (themeIcon) themeIcon.textContent = '☀️';
      if (themeText) themeText.textContent = 'Tema Terang';
    } else {
      if (themeIcon) themeIcon.textContent = '🌙';
      if (themeText) themeText.textContent = 'Tema Gelap';
    }
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }
}

/* ==========================================================================
   2. Reading Progress Bar
   ========================================================================== */
function initReadingProgressBar() {
  const bar = document.getElementById('progressBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = scrolled + '%';
  });
}

/* ==========================================================================
   3. Hook Model Editorial Tabs
   ========================================================================== */
const hookEditorialData = {
  trigger: {
    badge: "FASE 01 / THE TRIGGER",
    title: "Pemicu Eksternal & Pemicu Internal (Academic Anxiety)",
    summary: "Bagaimana sistem pendidikan AI memicu perhatian mahasiswa saat berada di titik paling rentan.",
    points: [
      {
        head: "External Trigger (Notifikasi Kontekstual)",
        desc: "AI mendeteksi hambatan belajar secara proaktif melalui integrasi IDE/Editor: <em>'Draft Business Model Canvas Anda belum memvalidasi segmen pasar tier-2. Ingin membedah studi kasus kompetitor sekarang?'</em>"
      },
      {
        head: "Internal Trigger (Kecemasan Emosional)",
        desc: "Rasa cemas akademis (<em>academic anxiety</em>), ketakutan tertinggal dari standar rekan sebaya, dan rasa frustrasi saat menemui kebuntuan sintaksis atau logika bisnis."
      }
    ],
    note: "Dalam teori habit-forming, produk yang sukses mengaitkan tindakan langsung dengan upaya meredakan emosi negatif pengguna."
  },
  action: {
    badge: "FASE 02 / THE ACTION",
    title: "Tindakan Tanpa Friksi (Multimodal Zero-Resistance)",
    summary: "Menurunkan energi aktivasi kognitif mahasiswa hingga ke batas terendah.",
    points: [
      {
        head: "Interaksi Suara & Auto-Context",
        desc: "Mahasiswa tidak perlu lagi mengetik prompt rumit berparagraf. Cukup mendiktekan kebingungan dalam bahasa percakapan sehari-hari; AI secara otomatis menarik konteks proyek dari workspace."
      },
      {
        head: "Menghapus Rasa Malu Kognitif",
        desc: "Mahasiswa sering enggan bertanya pada dosen di depan kelas karena takut dinilai bodoh. AI menyediakan ruang aman psikologis (<em>psychological safety</em>) tanpa penghakiman."
      }
    ],
    note: "Fogg Behavior Model (B=MAP): Motivasi tinggi + Kemampuan tinggi (kemudahan ekstrem) = Terbentuknya perilaku spontan."
  },
  reward: {
    badge: "FASE 03 / THE VARIABLE REWARD",
    title: "Ganjaran Variabel & Lonjakan Dopamin Validasi",
    summary: "Kepuasan kognitif yang tak terduga dalam hitungan detik.",
    points: [
      {
        head: "Reward of the Hunt (Penemuan Instan)",
        desc: "Mendapatkan sintesis referensi jurnal langka dan analogi konseptual yang disesuaikan persis dengan gaya belajar pribadi dalam 3 detik."
      },
      {
        head: "Reward of the Self (Validasi Kognitif & Mastery)",
        desc: "AI bertindak sebagai <em>affirmative sparring partner</em>, memperluas ide mentah mahasiswa menjadi kerangka kerja bernilai tinggi dan memberikan rasa penguasaan (<em>sense of agency</em>)."
      }
    ],
    note: "Variabilitas respon AI memicu pelepasan dopamin yang memperkuat siklus pengulangan perilaku."
  },
  investment: {
    badge: "FASE 04 / THE INVESTMENT",
    title: "Investasi Data & Efek Penguncian (High Switching Cost)",
    summary: "Semakin banyak data yang dimasukkan mahasiswa, semakin tinggi biaya untuk meninggalkan sistem.",
    points: [
      {
        head: "Akumulasi Digital Brain",
        desc: "Mahasiswa memasukkan catatan pribadi, gaya penalaran, riwayat kegagalan, dan portofolio proyek sepanjang semester ke dalam basis memori AI."
      },
      {
        head: "Cognitive Digital Twin",
        desc: "AI berevolusi menjadi 'kembaran kognitif'. Beralih ke dosen konvensional atau sistem lain terasa lambat dan tidak efisien karena harus mengulang proses adaptasi dari nol."
      }
    ],
    note: "Investasi ini mengubah penggunaan produk dari sekadar <em>utility tool</em> menjadi <em>ekosistem identitas intelektual</em>."
  }
};

function initHookEditorialTabs() {
  const tabs = document.querySelectorAll('.hook-tab-btn');
  const panel = document.getElementById('hookDisplay');
  if (!panel || !tabs.length) return;

  function renderHookStep(key) {
    const data = hookEditorialData[key];
    if (!data) return;

    panel.innerHTML = `
      <div style="border-bottom: 1px solid var(--border-fine); padding-bottom: 1rem; margin-bottom: 1.25rem;">
        <span style="font-family: var(--font-ui); font-size: 0.74rem; font-weight: 800; color: var(--accent-primary); letter-spacing: 0.06em; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">${data.badge}</span>
        <h4 style="font-family: var(--font-heading); font-size: 1.3rem; font-weight: 700; color: var(--ink-primary);">${data.title}</h4>
        <p style="font-size: 0.9rem; color: var(--ink-muted); margin: 0.25rem 0 0;">${data.summary}</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem;">
        ${data.points.map(pt => `
          <div style="background: var(--paper-bg); border: 1.5px solid var(--border-strong); padding: 1.1rem; border-radius: var(--radius-sm); box-shadow: var(--shadow-sm);">
            <div style="font-family: var(--font-ui); font-weight: 700; font-size: 0.92rem; color: var(--ink-primary); margin-bottom: 0.4rem;">${pt.head}</div>
            <div style="font-size: 0.86rem; color: var(--ink-secondary); line-height: 1.55;">${pt.desc}</div>
          </div>
        `).join('')}
      </div>

      <div style="background: var(--paper-subtle); padding: 0.85rem 1.1rem; border-radius: var(--radius-sm); border-left: 4px solid var(--accent-primary); font-size: 0.84rem; color: var(--ink-secondary);">
        <strong style="color: var(--ink-primary);">Wawasan Perilaku:</strong> ${data.note}
      </div>
    `;
  }

  renderHookStep('trigger');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const step = tab.getAttribute('data-step');
      renderHookStep(step);
    });
  });
}

/* ==========================================================================
   4. Sustainability Policy Simulator
   ========================================================================== */
function initPolicySimulator() {
  const slider = document.getElementById('sustRange');
  const badge = document.getElementById('sliderValBadge');
  const display = document.getElementById('sustMetricsDisplay');
  if (!slider || !badge || !display) return;

  function updateMetrics(val) {
    badge.textContent = `${val}% Adopsi AI`;

    let costSaving = Math.round(val * 0.74);
    let equityScore = Math.min(99, Math.round(48 + val * 0.5));
    let computeEnergy = Math.round(18 + val * 1.35);
    let socialBonding = Math.max(12, Math.round(100 - val * 0.68));

    let statusText = "";
    let borderAccent = "";

    if (val <= 35) {
      statusText = "Konservatif: Biaya kuliah tinggi, jangkauan terbatas, namun kohesi tatap muka terjaga prima.";
      borderAccent = "var(--ink-muted)";
    } else if (val <= 75) {
      statusText = "Keseimbangan Simbiotik (Rekomendasi): Efisiensi operasional tinggi, akses inklusif luas, modal sosial dosen tetap hidup.";
      borderAccent = "var(--accent-forest)";
    } else {
      statusText = "Otomasi Ekstrem: Risiko erosi empati sosial, ketergantungan kognitif parah, dan lonjakan jejak komputasi GPU.";
      borderAccent = "var(--accent-primary)";
    }

    display.innerHTML = `
      <div class="metric-editorial-box">
        <div class="m-title">Efisiensi Biaya Operasional</div>
        <div class="m-val" style="color: var(--accent-forest);">+${costSaving}%</div>
        <div class="m-desc">Penghematan overhead administratif & fasilitas kelas statis.</div>
      </div>

      <div class="metric-editorial-box">
        <div class="m-title">Indeks Pemerataan Akses (3T)</div>
        <div class="m-val" style="color: var(--accent-sky);">${equityScore}/100</div>
        <div class="m-desc">Akses materi berkualitas dunia bagi mahasiswa di pelosok.</div>
      </div>

      <div class="metric-editorial-box">
        <div class="m-title">Beban Energi Komputasi AI</div>
        <div class="m-val" style="color: var(--accent-primary);">${computeEnergy} MWh</div>
        <div class="m-desc">Konsumsi listrik data center & beban pendingin server LLM.</div>
      </div>

      <div class="metric-editorial-box">
        <div class="m-title">Keeratan Modal Sosial Fisik</div>
        <div class="m-val" style="color: var(--ink-primary);">${socialBonding}/100</div>
        <div class="m-desc">Tingkat asah empati dan resolusi konflik verbal tatap muka.</div>
      </div>

      <div class="metric-editorial-box" style="grid-column: 1 / -1; border-left: 4px solid ${borderAccent}; background: var(--paper-surface);">
        <div class="m-title" style="color: ${borderAccent}; font-weight: 800;">Kesimpulan Strategis Kebijakan:</div>
        <div style="font-size: 0.9rem; color: var(--ink-primary); font-weight: 600; margin-top: 0.2rem;">
          ${statusText}
        </div>
      </div>
    `;
  }

  updateMetrics(parseInt(slider.value));

  slider.addEventListener('input', (e) => {
    updateMetrics(parseInt(e.target.value));
  });
}

/* ==========================================================================
   5. Scroll Spy Navigator
   ========================================================================== */
function initScrollNavSpy() {
  const anchors = document.querySelectorAll('.nav-anchor');
  const sections = document.querySelectorAll('.essay-section');
  if (!anchors.length || !sections.length) return;

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 140;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    if (current) {
      anchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${current}`) {
          a.classList.add('active');
        }
      });
    }
  });
}
