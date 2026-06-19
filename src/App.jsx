import { useEffect } from "react";

const styles = `:root {
      --bg: #f6f0e3;
      --bg-soft: #efe5d2;
      --panel: rgba(255,255,255,.72);
      --panel-strong: rgba(255,255,255,.92);
      --text: #102f2b;
      --muted: #5f716b;
      --line: rgba(16,47,43,.14);
      --green: #daa300;
      --green-2: #f1bf24;
      --gold: #daa300;
      --gold-2: #f1bf24;
      --cream: #fffaf1;
      --shadow: 0 24px 80px rgba(34,50,42,.13);
      --radius: 28px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background:
        radial-gradient(circle at 82% 4%, rgba(218,163,0,.16), transparent 34rem),
        radial-gradient(circle at 8% 22%, rgba(218,163,0,.20), transparent 30rem),
        linear-gradient(180deg, #fbf5e8 0%, #f6f0e3 48%, #efe5d2 100%);
      color: var(--text);
      overflow-x: hidden;
    }

    body:before {
      content: "";
      position: fixed;
      inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(16,47,43,.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(16,47,43,.05) 1px, transparent 1px);
      background-size: 48px 48px;
      mask-image: linear-gradient(to bottom, black, transparent 85%);
      z-index: -2;
    }

    a { color: inherit; text-decoration: none; }
    .container { width: min(1180px, calc(100% - 40px)); margin: 0 auto; }

    .nav {
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(18px);
      background: rgba(255,250,241,.84);
      border-bottom: 1px solid var(--line);
    }

    .nav-inner {
      min-height: 78px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      font-weight: 800;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    .mark {
      width: 42px;
      height: 42px;
      border-radius: 14px;
      display: grid;
      place-items: center;
      background: linear-gradient(135deg, var(--gold), var(--gold-2));
      color: #fffaf1;
      box-shadow: 0 12px 40px rgba(218,163,0,.24);
      font-weight: 950;
    }

    .nav-links { display: flex; align-items: center; gap: 28px; color: var(--muted); font-size: 14px; }

    .mobile-menu-toggle {
      display: none;
      width: 46px;
      height: 46px;
      border-radius: 14px;
      border: 1px solid var(--line);
      background: rgba(255,250,241,.76);
      color: var(--text);
      font-size: 24px;
      font-weight: 900;
      cursor: pointer;
      align-items: center;
      justify-content: center;
    }
    .mobile-menu {
      display: none;
      border-top: 1px solid var(--line);
      background: rgba(255,250,241,.96);
      backdrop-filter: blur(18px);
    }
    .mobile-menu-inner {
      width: min(1180px, calc(100% - 40px));
      margin: 0 auto;
      padding: 16px 0 22px;
    }
    .mobile-menu a,
    .mobile-menu summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 14px 4px;
      color: var(--text);
      font-weight: 750;
      border-bottom: 1px solid rgba(16,47,43,.08);
      cursor: pointer;
      list-style: none;
      text-decoration: none;
    }
    .mobile-menu summary::-webkit-details-marker { display: none; }
    .mobile-menu details[open] summary { color: var(--gold); }
    .mobile-submenu {
      padding: 8px 0 10px 16px;
      border-bottom: 1px solid rgba(16,47,43,.08);
    }
    .mobile-submenu a {
      padding: 11px 4px;
      font-size: 14px;
      color: var(--muted);
      border-bottom: 0;
      font-weight: 650;
      justify-content: flex-start;
      gap: 10px;
    }
    .mobile-submenu strong {
      width: 22px;
      color: var(--gold);
      font-weight: 900;
    }
    .mobile-menu.is-open { display: block; }


    .nav-item {
      position: relative;
      display: inline-flex;
      align-items: center;
      padding: 18px 0;
      margin: -18px 0;
    }
    .nav-item:after {
      content: "";
      position: absolute;
      left: -18px;
      right: -18px;
      top: 100%;
      height: 24px;
      background: transparent;
    }
    .nav-dropdown {
      position: absolute;
      top: calc(100% + 4px);
      left: 50%;
      transform: translateX(-50%) translateY(8px);
      min-width: 260px;
      padding: 10px;
      border: 1px solid rgba(16,47,43,.12);
      border-radius: 18px;
      background: rgba(255,250,241,.96);
      box-shadow: 0 18px 46px rgba(34,50,42,.14);
      backdrop-filter: blur(14px);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      transition: opacity .18s ease, transform .18s ease, visibility .18s ease;
    }
    .nav-item:hover .nav-dropdown,
    .nav-item:focus-within .nav-dropdown {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translateX(-50%) translateY(0);
    }
    .nav-dropdown:before {
      content: "";
      position: absolute;
      top: -7px;
      left: 50%;
      width: 14px;
      height: 14px;
      transform: translateX(-50%) rotate(45deg);
      background: rgba(255,250,241,.96);
      border-left: 1px solid rgba(16,47,43,.12);
      border-top: 1px solid rgba(16,47,43,.12);
    }
    .nav-dropdown a {
      display: block;
      padding: 11px 12px;
      border-radius: 12px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.25;
      white-space: nowrap;
    }
    .nav-dropdown a:hover {
      background: rgba(218,163,0,.10);
      color: var(--text);
    }
    .nav-dropdown strong {
      display: inline-flex;
      justify-content: center;
      width: 20px;
      margin-right: 8px;
      color: var(--gold);
      font-weight: 900;
    }

    .nav-links a:hover { color: var(--text); }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 48px;
      padding: 0 20px;
      border-radius: 999px;
      font-weight: 700;
      border: 1px solid rgba(255,255,255,.12);
      transition: transform .2s ease, border-color .2s ease, background .2s ease;
    }
    .btn:hover { transform: translateY(-2px); border-color: rgba(255,255,255,.25); }
    .btn-primary { background: linear-gradient(135deg, var(--gold), var(--gold-2)); color: #fffaf1; border: 0; box-shadow: 0 14px 34px rgba(218,163,0,.22); }
    .btn-ghost { background: rgba(255,255,255,.62); color: var(--text); }

    .hero { padding: 96px 0 70px; position: relative; }
    .hero-grid {
      display: grid;
      grid-template-columns: 1.04fr .96fr;
      align-items: center;
      gap: 58px;
    }
    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 12px;
      border: 1px solid rgba(218,163,0,.22);
      border-radius: 999px;
      color: var(--gold);
      background: rgba(255,250,241,.72);
      font-size: 13px;
      font-weight: 700;
    }
    .pulse { width: 8px; height: 8px; border-radius: 50%; background: var(--gold); box-shadow: 0 0 0 7px rgba(218,163,0,.12); }
    h1 {
      margin: 24px 0 20px;
      font-size: clamp(44px, 7vw, 82px);
      line-height: .93;
      letter-spacing: -0.065em;
    }
    .hero h1 span { color: var(--gold); }
    .lead {
      max-width: 680px;
      color: var(--muted);
      font-size: clamp(17px, 2vw, 20px);
      line-height: 1.7;
      margin: 0 0 34px;
    }
    .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; }

    .visual {
      min-height: 560px;
      position: relative;
      display: grid;
      place-items: center;
    }
    .orb {
      position: absolute;
      width: 420px;
      height: 420px;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 30%, rgba(255,250,241,.95), rgba(218,163,0,.16) 36%, rgba(216,185,109,.16) 64%, transparent 72%);
      filter: blur(.2px);
      opacity: .55;
    }
    .ring {
      position: absolute;
      border-radius: 50%;
      border: 1px solid rgba(16,47,43,.16);
    }
    .ring.one { width: 500px; height: 500px; animation: rotate 28s linear infinite; }
    .ring.two { width: 365px; height: 365px; animation: rotate 20s linear infinite reverse; border-style: dashed; }
    .ring.three { width: 245px; height: 245px; border-color: rgba(218,163,0,.34); }
    @keyframes rotate { to { transform: rotate(360deg); } }

    .center-card {
      position: relative;
      width: 250px;
      height: 250px;
      border-radius: 42px;
      background: linear-gradient(180deg, rgba(255,250,241,.96), rgba(255,255,255,.72));
      border: 1px solid rgba(16,47,43,.12);
      box-shadow: var(--shadow);
      display: grid;
      place-items: center;
      text-align: center;
      padding: 28px;
    }
    .center-card strong { display: block; font-size: 38px; letter-spacing: .16em; padding-left: .16em; }
    .center-card small { color: var(--muted); line-height: 1.5; }
    .floating {
      position: absolute;
      width: 182px;
      padding: 16px;
      border-radius: 22px;
      border: 1px solid rgba(16,47,43,.13);
      background: rgba(255,250,241,.86);
      backdrop-filter: blur(16px);
      box-shadow: 0 16px 46px rgba(0,0,0,.28);
      color: var(--muted);
      font-size: 13px;
      line-height: 1.4;
    }
    .floating strong { color: var(--text); display: block; margin-bottom: 5px; font-size: 15px; }
    .f1 { top: 72px; left: 18px; }
    .f2 { top: 112px; right: 0; }
    .f3 { bottom: 80px; left: 44px; }
    .f4 { bottom: 40px; right: 38px; }

    section { padding: 84px 0; }
    #contact { padding-top: 36px; }
    .section-head { max-width: 760px; margin-bottom: 34px; }
    .kicker { color: var(--gold-2); text-transform: uppercase; letter-spacing: .18em; font-size: 12px; font-weight: 800; }
    h2 { font-size: clamp(34px, 4.8vw, 56px); line-height: 1; letter-spacing: -.055em; margin: 12px 0 16px; }
    .section-head p { color: var(--muted); font-size: 17px; line-height: 1.7; margin: 0; }

    .pillars { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
    .card {
      border: 1px solid var(--line);
      background: linear-gradient(180deg, rgba(255,250,241,.88), rgba(255,255,255,.66));
      border-radius: var(--radius);
      padding: 26px;
      min-height: 260px;
      box-shadow: 0 18px 60px rgba(0,0,0,.18);
      transition: transform .22s ease, border-color .22s ease, background .22s ease;
    }
    .card:hover { transform: translateY(-6px); border-color: rgba(218,163,0,.30); background: var(--panel-strong); }
    .icon {
      width: 54px;
      height: 54px;
      border-radius: 18px;
      display: grid;
      place-items: center;
      margin-bottom: 24px;
      background: rgba(218,163,0,.08);
      border: 1px solid rgba(218,163,0,.20);
      color: var(--gold);
      font-size: 22px;
      font-weight: 900;
      letter-spacing: .08em;
      padding-left: .08em;
    }
    .card h3 { font-size: 22px; margin: 0 0 12px; letter-spacing: -.025em; }
    .card p { color: var(--muted); line-height: 1.65; margin: 0; }

    .split { display: grid; grid-template-columns: .9fr 1.1fr; gap: 36px; align-items: start; }
    .list-panel {
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: rgba(255,250,241,.62);
      overflow: hidden;
    }
    .service-row {
      display: grid;
      grid-template-columns: 58px 1fr;
      gap: 18px;
      padding: 24px;
      border-bottom: 1px solid var(--line);
    }
    .service-row:last-child { border-bottom: 0; }
    .num { color: var(--gold-2); font-weight: 900; font-size: 13px; letter-spacing: .12em; }
    .service-row h3 { margin: 0 0 8px; font-size: 20px; }
    .service-row p { margin: 0; color: var(--muted); line-height: 1.65; }

    .cta {
      border: 1px solid rgba(16,47,43,.13);
      border-radius: 36px;
      padding: 42px;
      background:
        radial-gradient(circle at 90% 10%, rgba(218,163,0,.16), transparent 24rem),
        linear-gradient(135deg, rgba(255,250,241,.95), rgba(255,255,255,.66));
      box-shadow: var(--shadow);
    }
    .cta h2 { margin-top: 0; }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 26px; }
    input, textarea {
      width: 100%;
      border: 1px solid var(--line);
      background: rgba(255,255,255,.76);
      color: var(--text);
      border-radius: 18px;
      padding: 16px 18px;
      outline: none;
      font: inherit;
    }
    textarea { min-height: 130px; resize: vertical; grid-column: 1 / -1; }
    input:focus, textarea:focus { border-color: rgba(218,163,0,.48); }

    .calendly-box {
      margin-top: 22px;
      border: 1px solid var(--line);
      border-radius: 24px;
      overflow: hidden;
      min-height: 520px;
      background: rgba(255,250,241,.62);
    }

    footer {
      border-top: 1px solid var(--line);
      padding: 44px 0;
      color: var(--muted);
    }
    .footer-grid { display: grid; grid-template-columns: 1.2fr .8fr .8fr; gap: 28px; }
    footer strong { color: var(--text); }
    footer a { display: block; margin: 10px 0; color: var(--muted); }
    footer a:hover { color: var(--text); }

    .privacy-page { display: none; padding: 80px 0; }
    body.privacy .site-page { display: none; }
    body.privacy .privacy-page { display: block; }
    .legal {
      max-width: 880px;
      border: 1px solid var(--line);
      border-radius: 30px;
      padding: 34px;
      background: rgba(255,250,241,.62);
      color: var(--muted);
      line-height: 1.75;
    }
    .legal h1, .legal h2 { color: var(--text); }
    .legal h1 { font-size: 42px; letter-spacing: -.04em; }
    .legal h2 { font-size: 24px; margin-top: 30px; }


    .brand span:last-child { color: var(--text); }
    .nav-links { color: #50645f; }
    .pulse { background: var(--gold); box-shadow: 0 0 0 7px rgba(201,155,67,.14); }
    .hero h1 { color: #102f2b; }
    .center-card strong { color: var(--gold); }
    .floating strong, .service-row h3, .card h3 { color: #102f2b; }
    .cta, .card, .list-panel, .legal, .calendly-box { backdrop-filter: blur(10px); }



    .ecosystem-flow {
      position: relative;
      margin-top: 38px;
      padding: 70px 42px 64px;
      border: 1px solid var(--line);
      border-radius: 34px;
      background:
        radial-gradient(circle at 50% 0%, rgba(218,163,0,.12), transparent 26rem),
        linear-gradient(180deg, rgba(255,250,241,.90), rgba(255,255,255,.64));
      box-shadow: 0 22px 70px rgba(0,0,0,.12);
      overflow: hidden;
    }
    .ecosystem-flow:before {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(16,47,43,.035) 1px, transparent 1px),
        linear-gradient(90deg, rgba(16,47,43,.035) 1px, transparent 1px);
      background-size: 38px 38px;
      pointer-events: none;
      mask-image: linear-gradient(90deg, transparent, black 18%, black 82%, transparent);
    }
    .flow-line { display: none; }

    .flow-steps {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 18px;
      align-items: start;
      min-height: 420px;
    }
    .flow-step {
      min-height: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .flow-step:nth-child(1) { padding-top: 112px; }
    .flow-step:nth-child(2) { padding-top: 84px; }
    .flow-step:nth-child(3) { padding-top: 56px; }
    .flow-step:nth-child(4) { padding-top: 28px; }
    .flow-step:nth-child(5) { padding-top: 0; }

    .step-head {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 0 18px;
    }
    .step-label {
      color: var(--gold);
      font-size: 14px;
      font-weight: 900;
      letter-spacing: .08em;
      text-transform: uppercase;
      margin: 0;
      line-height: 1;
    }
    .step-dot {
      width: 18px;
      height: 18px;
      flex: 0 0 18px;
      border-radius: 999px;
      border: 4px solid rgba(218,163,0,.42);
      background: var(--cream);
      box-shadow: 0 0 0 5px rgba(255,250,241,.80);
      margin: 0;
    }
    .flow-card {
      border: 1px solid rgba(16,47,43,.10);
      background: rgba(255,250,241,.78);
      border-radius: 22px;
      padding: 20px;
      box-shadow: 0 14px 34px rgba(34,50,42,.08);
      backdrop-filter: blur(8px);
      min-height: 210px;
    }
    .flow-card h3 {
      margin: 0 0 12px;
      font-size: 16px;
      line-height: 1.22;
      color: var(--text);
      letter-spacing: -.02em;
    }
    .flow-card ul {
      margin: 0;
      padding-left: 18px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.5;
    }
    .flow-card li { margin: 3px 0; }

    .flow-note {
      position: relative;
      z-index: 2;
      max-width: 100%;
      margin: 30px 0 0;
      padding: 24px 42px;
      border-radius: 24px;
      background: rgba(218,163,0,.10);
      color: var(--text);
      text-align: center;
      line-height: 1.55;
      border: 1px solid rgba(218,163,0,.16);
      box-shadow: 0 14px 34px rgba(34,50,42,.06);
    }
    .flow-note-outside {
      margin-top: 28px;
      background: rgba(255,250,241,.74);
      backdrop-filter: blur(8px);
    }
    .flow-note strong { color: #111; }


    .support-visuals {
      display: grid;
      grid-template-columns: 1.05fr .95fr;
      gap: 16px;
      margin-top: 28px;
    }
    .support-photo {
      position: relative;
      min-height: 220px;
      border-radius: 28px;
      overflow: hidden;
      border: 1px solid rgba(16,47,43,.10);
      box-shadow: 0 18px 46px rgba(34,50,42,.12);
      background-size: cover;
      background-position: center;
    }
    .support-photo:after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 30%, rgba(16,47,43,.40));
    }
    .support-photo span {
      position: absolute;
      z-index: 2;
      left: 18px;
      right: 18px;
      bottom: 16px;
      color: #fffaf1;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    .support-photo.primary {
      grid-row: span 2;
      min-height: 456px;
      background-image: url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80");
    }
    .support-photo.secondary {
      background-image: url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80");
    }
    .support-photo.tertiary {
      background-image: url("https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=900");
    }


    .service-detail-page { display: none; padding: 84px 0; }
    body.service-detail-active .site-page,
    body.service-detail-active .privacy-page { display: none; }
    body.service-detail-active .service-detail-page.active { display: block; }
    .service-hero-card {
      border: 1px solid var(--line);
      border-radius: 36px;
      padding: 48px;
      background: radial-gradient(circle at 88% 12%, rgba(218,163,0,.14), transparent 28rem),
                  linear-gradient(180deg, rgba(255,250,241,.92), rgba(255,255,255,.66));
      box-shadow: var(--shadow);
      margin-bottom: 32px;
    }
    .service-letter {
      width: 64px; height: 64px; border-radius: 20px;
      display: grid; place-items: center;
      color: var(--gold);
      border: 1px solid rgba(218,163,0,.26);
      background: rgba(218,163,0,.08);
      font-size: 28px; font-weight: 900;
      margin-bottom: 22px;
    }
    .service-hero-card h1 {
      max-width: 860px;
      margin: 0 0 18px;
      font-size: clamp(42px, 5.6vw, 72px);
      line-height: .96;
      letter-spacing: -.06em;
    }
    .service-hero-card p {
      max-width: 780px;
      color: var(--muted);
      font-size: 18px;
      line-height: 1.75;
      margin: 0;
    }
    .service-page-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-top: 26px;
    }
    .service-detail-box {
      border: 1px solid var(--line);
      border-radius: 28px;
      padding: 28px;
      background: rgba(255,250,241,.72);
      box-shadow: 0 16px 44px rgba(34,50,42,.08);
    }
    .service-detail-box h2 { font-size: 26px; margin: 0 0 14px; letter-spacing: -.03em; }
    .service-detail-box p, .service-detail-box li { color: var(--muted); line-height: 1.65; }
    .service-detail-box ul { margin: 0; padding-left: 20px; }
    .back-link {
      margin: 28px 0 0;
      width: 100%;
      text-align: left;
      display: block;
    }
    .back-link .btn {
      margin-left: 0;
    }


    .fiduciary-layout {
      display: grid;
      grid-template-columns: .95fr 1.05fr;
      gap: 34px;
      align-items: stretch;
      margin-top: 30px;
    }
    .fiduciary-photo-stack {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .fiduciary-photo {
      position: relative;
      min-height: 230px;
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid rgba(16,47,43,.10);
      box-shadow: 0 18px 46px rgba(34,50,42,.12);
      background-size: cover;
      background-position: center;
    }
    .fiduciary-photo:after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(16,47,43,.04), rgba(16,47,43,.48));
    }
    .fiduciary-photo span {
      position: absolute;
      z-index: 2;
      left: 18px;
      right: 18px;
      bottom: 16px;
      color: #fffaf1;
      font-size: 13px;
      font-weight: 850;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    .fiduciary-photo.large {
      grid-column: 1 / -1;
      min-height: 300px;
      background-image: url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200");
    }
    .fiduciary-photo.office {
      background-image: url("https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .fiduciary-photo.meeting {
      background-image: url("https://images.pexels.com/photos/6693652/pexels-photo-6693652.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .fiduciary-services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .fiduciary-service-card {
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 22px;
      background: rgba(255,250,241,.74);
      box-shadow: 0 14px 36px rgba(34,50,42,.08);
    }
    .fiduciary-service-card .mini-letter {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      margin-bottom: 14px;
      background: rgba(218,163,0,.09);
      border: 1px solid rgba(218,163,0,.22);
      color: var(--gold);
      font-weight: 900;
      font-size: 13px;
    }
    .fiduciary-service-card h3 {
      margin: 0 0 8px;
      font-size: 18px;
      line-height: 1.25;
      letter-spacing: -.02em;
    }
    .fiduciary-service-card p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.6;
    }

    .fiduciary-process {
      margin-top: 34px;
      border: 1px solid var(--line);
      border-radius: 32px;
      padding: 30px;
      background:
        radial-gradient(circle at 85% 10%, rgba(218,163,0,.12), transparent 28rem),
        rgba(255,250,241,.72);
      box-shadow: 0 18px 52px rgba(34,50,42,.08);
    }
    .fiduciary-process h2 {
      margin-top: 0;
      font-size: 32px;
    }
    .process-flow {
      position: relative;
      margin-top: 24px;
      padding-top: 10px;
    }
    .process-flow-line {
      position: absolute;
      left: 56px;
      right: 56px;
      top: 18px;
      height: 3px;
      background: var(--gold);
      border-radius: 999px;
      z-index: 1;
    }
    .process-steps-inline {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      align-items: start;
    }
    .process-node {
      text-align: center;
      padding: 0 8px;
    }
    .process-dot {
      width: 14px;
      height: 14px;
      margin: 0 auto 18px;
      border-radius: 999px;
      background: var(--cream);
      border: 3px solid var(--gold);
      box-shadow: 0 0 0 5px rgba(255,250,241,.82);
    }
    .process-node strong {
      display: block;
      color: var(--text);
      margin-bottom: 8px;
      font-size: 13px;
      font-weight: 900;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .process-node span {
      display: block;
      max-width: 230px;
      margin: 0 auto;
      color: var(--muted);
      line-height: 1.55;
      font-size: 14px;
    }

.fiduciary-visual-note {
      margin-top: 18px;
      padding: 18px 20px;
      border-radius: 22px;
      background: rgba(218,163,0,.08);
      border: 1px solid rgba(218,163,0,.16);
      color: var(--muted);
      line-height: 1.6;
      font-size: 14px;
    }


    .advisory-layout {
      display: grid;
      grid-template-columns: .95fr 1.05fr;
      gap: 34px;
      align-items: stretch;
      margin-top: 30px;
    }
    .advisory-photo-stack {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .advisory-photo {
      position: relative;
      min-height: 230px;
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid rgba(16,47,43,.10);
      box-shadow: 0 18px 46px rgba(34,50,42,.12);
      background-size: cover;
      background-position: center;
    }
    .advisory-photo:after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(16,47,43,.04), rgba(16,47,43,.48));
    }
    .advisory-photo span {
      position: absolute;
      z-index: 2;
      left: 18px;
      right: 18px;
      bottom: 16px;
      color: #fffaf1;
      font-size: 13px;
      font-weight: 850;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    .advisory-photo.large {
      grid-column: 1 / -1;
      min-height: 300px;
      background-image: url("https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1200");
    }
    .advisory-photo.strategy {
      background-image: url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .advisory-photo.finance {
      background-image: url("https://images.pexels.com/photos/6693652/pexels-photo-6693652.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .advisory-services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .advisory-service-card {
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 22px;
      background: rgba(255,250,241,.74);
      box-shadow: 0 14px 36px rgba(34,50,42,.08);
    }
    .advisory-service-card .mini-letter {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      margin-bottom: 14px;
      background: rgba(218,163,0,.09);
      border: 1px solid rgba(218,163,0,.22);
      color: var(--gold);
      font-weight: 900;
      font-size: 13px;
    }
    .advisory-service-card h3 {
      margin: 0 0 8px;
      font-size: 18px;
      line-height: 1.25;
      letter-spacing: -.02em;
    }
    .advisory-service-card p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.6;
    }
    .advisory-process {
      margin-top: 34px;
      border: 1px solid var(--line);
      border-radius: 32px;
      padding: 30px;
      background:
        radial-gradient(circle at 85% 10%, rgba(218,163,0,.12), transparent 28rem),
        rgba(255,250,241,.72);
      box-shadow: 0 18px 52px rgba(34,50,42,.08);
    }
    .advisory-process h2 {
      margin-top: 0;
      font-size: 32px;
    }
    .advisory-visual-note {
      margin-top: 18px;
      padding: 18px 20px;
      border-radius: 22px;
      background: rgba(218,163,0,.08);
      border: 1px solid rgba(218,163,0,.16);
      color: var(--muted);
      line-height: 1.6;
      font-size: 14px;
    }


    .advisory-process .process-flow {
      position: relative;
      margin-top: 24px;
      padding-top: 10px;
    }
    .advisory-process .process-flow-line {
      position: absolute;
      left: 56px;
      right: 56px;
      top: 18px;
      height: 3px;
      background: var(--gold);
      border-radius: 999px;
      z-index: 1;
    }
    .advisory-process .process-steps-inline {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      align-items: start;
    }
    .advisory-process .process-node {
      text-align: center;
      padding: 0 8px;
    }
    .advisory-process .process-dot {
      width: 14px;
      height: 14px;
      margin: 0 auto 18px;
      border-radius: 999px;
      background: var(--cream);
      border: 3px solid var(--gold);
      box-shadow: 0 0 0 5px rgba(255,250,241,.82);
    }
    .advisory-process .process-node strong {
      display: block;
      color: var(--text);
      margin-bottom: 8px;
      font-size: 13px;
      font-weight: 900;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .advisory-process .process-node span {
      display: block;
      max-width: 230px;
      margin: 0 auto;
      color: var(--muted);
      line-height: 1.55;
      font-size: 14px;
    }


    .compliance-layout {
      display: grid;
      grid-template-columns: .95fr 1.05fr;
      gap: 34px;
      align-items: stretch;
      margin-top: 30px;
    }
    .compliance-photo-stack {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .compliance-photo {
      position: relative;
      min-height: 230px;
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid rgba(16,47,43,.10);
      box-shadow: 0 18px 46px rgba(34,50,42,.12);
      background-size: cover;
      background-position: center;
    }
    .compliance-photo:after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(16,47,43,.04), rgba(16,47,43,.48));
    }
    .compliance-photo span {
      position: absolute;
      z-index: 2;
      left: 18px;
      right: 18px;
      bottom: 16px;
      color: #fffaf1;
      font-size: 13px;
      font-weight: 850;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    .compliance-photo.large {
      grid-column: 1 / -1;
      min-height: 300px;
      background-image: url("https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=1200");
    }
    .compliance-photo.admin {
      background-image: url("https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .compliance-photo.docs {
      background-image: url("https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .compliance-services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .compliance-service-card {
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 22px;
      background: rgba(255,250,241,.74);
      box-shadow: 0 14px 36px rgba(34,50,42,.08);
    }
    .compliance-service-card .mini-letter {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      margin-bottom: 14px;
      background: rgba(218,163,0,.09);
      border: 1px solid rgba(218,163,0,.22);
      color: var(--gold);
      font-weight: 900;
      font-size: 13px;
    }
    .compliance-service-card h3 {
      margin: 0 0 8px;
      font-size: 18px;
      line-height: 1.25;
      letter-spacing: -.02em;
    }
    .compliance-service-card p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.6;
    }
    .compliance-process {
      margin-top: 34px;
      border: 1px solid var(--line);
      border-radius: 32px;
      padding: 30px;
      background:
        radial-gradient(circle at 85% 10%, rgba(218,163,0,.12), transparent 28rem),
        rgba(255,250,241,.72);
      box-shadow: 0 18px 52px rgba(34,50,42,.08);
    }
    .compliance-process h2 {
      margin-top: 0;
      font-size: 32px;
    }
    .compliance-process .process-flow {
      position: relative;
      margin-top: 24px;
      padding-top: 10px;
    }
    .compliance-process .process-flow-line {
      position: absolute;
      left: 56px;
      right: 56px;
      top: 18px;
      height: 3px;
      background: var(--gold);
      border-radius: 999px;
      z-index: 1;
    }
    .compliance-process .process-steps-inline {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      align-items: start;
    }
    .compliance-process .process-node {
      text-align: center;
      padding: 0 8px;
    }
    .compliance-process .process-dot {
      width: 14px;
      height: 14px;
      margin: 0 auto 18px;
      border-radius: 999px;
      background: var(--cream);
      border: 3px solid var(--gold);
      box-shadow: 0 0 0 5px rgba(255,250,241,.82);
    }
    .compliance-process .process-node strong {
      display: block;
      color: var(--text);
      margin-bottom: 8px;
      font-size: 13px;
      font-weight: 900;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .compliance-process .process-node span {
      display: block;
      max-width: 230px;
      margin: 0 auto;
      color: var(--muted);
      line-height: 1.55;
      font-size: 14px;
    }


    .technology-page {
      padding: 84px 0;
    }
    .technology-stage {
      position: relative;
      border: 1px solid var(--line);
      border-radius: 38px;
      padding: 46px 42px 38px;
      background:
        linear-gradient(180deg, rgba(255,255,255,.74), rgba(255,250,241,.78)),
        radial-gradient(circle at 78% 12%, rgba(218,163,0,.12), transparent 24rem);
      box-shadow: 0 20px 54px rgba(34,50,42,.10);
      overflow: hidden;
    }
    .technology-stage:before {
      content: "";
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(16,47,43,.045) 1px, transparent 1px),
        linear-gradient(90deg, rgba(16,47,43,.045) 1px, transparent 1px);
      background-size: 42px 42px;
      opacity: .42;
      pointer-events: none;
      mask-image: linear-gradient(90deg, transparent, black 10%, black 90%, transparent);
    }
    .technology-top {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 140px 1fr 1.25fr;
      gap: 28px;
      align-items: start;
    }
    .technology-badge {
      width: 96px;
      height: 96px;
      border-radius: 28px;
      display: grid;
      place-items: center;
      color: var(--gold);
      background: rgba(218,163,0,.10);
      border: 1px solid rgba(218,163,0,.22);
      font-size: 46px;
      font-weight: 900;
      margin-left: 8px;
    }
    .technology-heading h1 {
      margin: 0;
      font-size: clamp(44px, 5.2vw, 68px);
      line-height: .94;
      letter-spacing: -.06em;
      max-width: 420px;
    }
    .technology-intro p {
      margin: 0;
      color: var(--text);
      font-size: 18px;
      line-height: 1.6;
      max-width: 620px;
    }

    .technology-diagram {
      position: relative;
      z-index: 2;
      margin-top: 34px;
      padding: 18px 8px 8px;
    }
    .technology-line {
      position: absolute;
      left: 15%;
      right: 15%;
      top: 18px;
      height: 3px;
      background: var(--gold);
      border-radius: 999px;
    }
    .technology-line:after {
      content: "";
      position: absolute;
      right: 0;
      top: 0;
      width: 220px;
      height: 188px;
      border-top: 3px solid var(--gold);
      border-right: 3px solid var(--gold);
      border-bottom: 3px solid var(--gold);
      border-radius: 0 18px 18px 0;
      transform: translateY(0);
    }
    .technology-dots {
      position: absolute;
      left: 15%;
      right: 15%;
      top: 10px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      pointer-events: none;
    }
    .technology-dots span {
      width: 14px;
      height: 14px;
      justify-self: center;
      border-radius: 999px;
      background: var(--cream);
      border: 3px solid var(--gold);
      box-shadow: 0 0 0 5px rgba(255,250,241,.82);
    }

    .technology-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 26px 18px;
      margin-top: 30px;
      align-items: start;
    }
    .technology-cluster {
      position: relative;
      z-index: 2;
    }
    .technology-cluster.top {
      padding-top: 28px;
    }
    .technology-cluster.bottom {
      padding-top: 44px;
    }
    .technology-cluster h3 {
      margin: 0 0 8px;
      font-size: 16px;
      line-height: 1.2;
      color: var(--gold);
      letter-spacing: -.01em;
    }
    .technology-cluster ul {
      margin: 0;
      padding-left: 22px;
      color: var(--text);
      font-size: 15px;
      line-height: 1.45;
    }
    .technology-cluster li { margin: 3px 0; }

    .technology-highlight {
      position: relative;
      z-index: 2;
      grid-column: 4 / 6;
      align-self: start;
      margin-top: 8px;
      padding: 28px 26px;
      border-radius: 28px;
      background: rgba(218,163,0,.10);
      border: 1px solid rgba(218,163,0,.18);
      box-shadow: 0 16px 44px rgba(34,50,42,.08);
    }
    .technology-highlight h2 {
      margin: 0 0 12px;
      font-size: 32px;
      letter-spacing: -.04em;
    }
    .technology-highlight p {
      margin: 0;
      color: var(--muted);
      line-height: 1.65;
      font-size: 15px;
    }


    .technology-flow-section {
      margin-top: 34px;
      border: 1px solid var(--line);
      border-radius: 34px;
      padding: 34px 30px;
      background:
        radial-gradient(circle at 85% 10%, rgba(218,163,0,.12), transparent 28rem),
        rgba(255,250,241,.72);
      box-shadow: 0 18px 52px rgba(34,50,42,.08);
    }
    .technology-flow-section h2 {
      margin: 0 0 12px;
      font-size: 32px;
      letter-spacing: -.04em;
    }
    .technology-flow-section > p {
      margin: 0 0 26px;
      color: var(--text);
      line-height: 1.55;
      max-width: 980px;
    }
    .technology-vertical-flow {
      position: relative;
      display: grid;
      gap: 18px;
    }
    .technology-flow-row {
      display: grid;
      grid-template-columns: 240px 52px 1fr;
      gap: 18px;
      align-items: stretch;
      position: relative;
    }
    .technology-flow-stage {
      display: flex;
      align-items: flex-start;
      justify-content: flex-end;
      text-align: right;
      padding: 18px 0 0;
    }
    .technology-flow-stage strong {
      color: var(--gold);
      font-size: 16px;
      line-height: 1.2;
      letter-spacing: -.01em;
      display: block;
      max-width: 220px;
    }
    .technology-flow-axis {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: stretch;
      min-height: 100%;
    }
    .technology-flow-axis:before {
      content: "";
      position: absolute;
      top: -18px;
      bottom: -18px;
      left: 50%;
      transform: translateX(-50%);
      width: 3px;
      background: var(--gold);
      border-radius: 999px;
    }
    .technology-flow-row:first-child .technology-flow-axis:before {
      top: 22px;
    }
    .technology-flow-row:last-child .technology-flow-axis:before {
      bottom: 22px;
    }
    .technology-flow-dot {
      position: relative;
      z-index: 2;
      width: 16px;
      height: 16px;
      margin-top: 22px;
      border-radius: 999px;
      background: var(--cream);
      border: 3px solid var(--gold);
      box-shadow: 0 0 0 5px rgba(255,250,241,.82);
    }
    .technology-flow-card {
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 22px 22px 20px;
      background: rgba(255,255,255,.64);
      box-shadow: 0 14px 36px rgba(34,50,42,.07);
    }
    .technology-flow-card p {
      margin: 0;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.6;
    }
    .technology-flow-card ul {
      margin: 0;
      padding-left: 20px;
      color: var(--muted);
      font-size: 15px;
      line-height: 1.5;
    }
    .technology-flow-card li { margin: 3px 0; }


    .company-details-box {
      margin-top: 24px;
      border: 1px solid var(--line);
      border-radius: 28px;
      padding: 34px;
      min-height: 360px;
      background:
        radial-gradient(circle at 86% 12%, rgba(218,163,0,.12), transparent 24rem),
        linear-gradient(180deg, rgba(255,250,241,.88), rgba(255,255,255,.64));
      box-shadow: 0 18px 52px rgba(34,50,42,.08);
      display: flex;
      align-items: center;
    }
    .company-details-box h3 {
      margin: 10px 0 20px;
      font-size: 32px;
      letter-spacing: -.04em;
      color: var(--text);
    }
    .company-details-box p {
      max-width: 860px;
      color: var(--muted);
      line-height: 1.7;
      margin: 0 0 18px;
    }
    .company-details-box strong {
      color: var(--text);
    }
    .company-details-box a {
      color: var(--gold);
      font-weight: 800;
    }


    .footer-logo-placeholder {
      width: 180px;
      height: 56px;
      border-radius: 16px;
      border: 1px dashed rgba(16,47,43,.22);
      background: rgba(255,250,241,.65);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 18px;
      color: var(--muted);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: .08em;
      text-transform: uppercase;
    }

    @media (max-width: 980px) {
      .flow-steps { grid-template-columns: 1fr; min-height: 0; }
      .flow-step,
      .flow-step:nth-child(1),
      .flow-step:nth-child(2),
      .flow-step:nth-child(3),
      .flow-step:nth-child(4),
      .flow-step:nth-child(5) {
        padding-top: 0;
      }
      .flow-step {
        display: block;
      }
      .step-head {
        margin-bottom: 14px;
      }
      .flow-card {
        min-height: 0;
      }
    }


    .support-visuals {
      display: grid;
      grid-template-columns: 1.05fr .95fr;
      gap: 16px;
      margin-top: 28px;
    }
    .support-photo {
      position: relative;
      min-height: 220px;
      border-radius: 28px;
      overflow: hidden;
      border: 1px solid rgba(16,47,43,.10);
      box-shadow: 0 18px 46px rgba(34,50,42,.12);
      background-size: cover;
      background-position: center;
    }
    .support-photo:after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 30%, rgba(16,47,43,.40));
    }
    .support-photo span {
      position: absolute;
      z-index: 2;
      left: 18px;
      right: 18px;
      bottom: 16px;
      color: #fffaf1;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    .support-photo.primary {
      grid-row: span 2;
      min-height: 456px;
      background-image: url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80");
    }
    .support-photo.secondary {
      background-image: url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80");
    }
    .support-photo.tertiary {
      background-image: url("https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=900");
    }


    .service-detail-page { display: none; padding: 84px 0; }
    body.service-detail-active .site-page,
    body.service-detail-active .privacy-page { display: none; }
    body.service-detail-active .service-detail-page.active { display: block; }
    .service-hero-card {
      border: 1px solid var(--line);
      border-radius: 36px;
      padding: 48px;
      background: radial-gradient(circle at 88% 12%, rgba(218,163,0,.14), transparent 28rem),
                  linear-gradient(180deg, rgba(255,250,241,.92), rgba(255,255,255,.66));
      box-shadow: var(--shadow);
      margin-bottom: 32px;
    }
    .service-letter {
      width: 64px; height: 64px; border-radius: 20px;
      display: grid; place-items: center;
      color: var(--gold);
      border: 1px solid rgba(218,163,0,.26);
      background: rgba(218,163,0,.08);
      font-size: 28px; font-weight: 900;
      margin-bottom: 22px;
    }
    .service-hero-card h1 {
      max-width: 860px;
      margin: 0 0 18px;
      font-size: clamp(42px, 5.6vw, 72px);
      line-height: .96;
      letter-spacing: -.06em;
    }
    .service-hero-card p {
      max-width: 780px;
      color: var(--muted);
      font-size: 18px;
      line-height: 1.75;
      margin: 0;
    }
    .service-page-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-top: 26px;
    }
    .service-detail-box {
      border: 1px solid var(--line);
      border-radius: 28px;
      padding: 28px;
      background: rgba(255,250,241,.72);
      box-shadow: 0 16px 44px rgba(34,50,42,.08);
    }
    .service-detail-box h2 { font-size: 26px; margin: 0 0 14px; letter-spacing: -.03em; }
    .service-detail-box p, .service-detail-box li { color: var(--muted); line-height: 1.65; }
    .service-detail-box ul { margin: 0; padding-left: 20px; }
    .back-link {
      margin: 28px 0 0;
      width: 100%;
      text-align: left;
      display: block;
    }
    .back-link .btn {
      margin-left: 0;
    }


    .fiduciary-layout {
      display: grid;
      grid-template-columns: .95fr 1.05fr;
      gap: 34px;
      align-items: stretch;
      margin-top: 30px;
    }
    .fiduciary-photo-stack {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .fiduciary-photo {
      position: relative;
      min-height: 230px;
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid rgba(16,47,43,.10);
      box-shadow: 0 18px 46px rgba(34,50,42,.12);
      background-size: cover;
      background-position: center;
    }
    .fiduciary-photo:after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(16,47,43,.04), rgba(16,47,43,.48));
    }
    .fiduciary-photo span {
      position: absolute;
      z-index: 2;
      left: 18px;
      right: 18px;
      bottom: 16px;
      color: #fffaf1;
      font-size: 13px;
      font-weight: 850;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    .fiduciary-photo.large {
      grid-column: 1 / -1;
      min-height: 300px;
      background-image: url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200");
    }
    .fiduciary-photo.office {
      background-image: url("https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .fiduciary-photo.meeting {
      background-image: url("https://images.pexels.com/photos/6693652/pexels-photo-6693652.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .fiduciary-services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .fiduciary-service-card {
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 22px;
      background: rgba(255,250,241,.74);
      box-shadow: 0 14px 36px rgba(34,50,42,.08);
    }
    .fiduciary-service-card .mini-letter {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      margin-bottom: 14px;
      background: rgba(218,163,0,.09);
      border: 1px solid rgba(218,163,0,.22);
      color: var(--gold);
      font-weight: 900;
      font-size: 13px;
    }
    .fiduciary-service-card h3 {
      margin: 0 0 8px;
      font-size: 18px;
      line-height: 1.25;
      letter-spacing: -.02em;
    }
    .fiduciary-service-card p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.6;
    }
    .fiduciary-process {
      margin-top: 34px;
      border: 1px solid var(--line);
      border-radius: 32px;
      padding: 30px;
      background:
        radial-gradient(circle at 85% 10%, rgba(218,163,0,.12), transparent 28rem),
        rgba(255,250,241,.72);
      box-shadow: 0 18px 52px rgba(34,50,42,.08);
    }
    .fiduciary-process h2 {
      margin-top: 0;
      font-size: 32px;
    }
    .process-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-top: 20px;
    }
    .process-step {
      padding: 18px;
      border-radius: 20px;
      background: rgba(255,255,255,.62);
      border: 1px solid rgba(16,47,43,.09);
    }
    .process-step strong {
      display: block;
      color: var(--gold);
      margin-bottom: 8px;
      font-size: 13px;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .process-step span {
      color: var(--muted);
      line-height: 1.55;
      font-size: 14px;
    }


    .fiduciary-visual-note {
      margin-top: 18px;
      padding: 18px 20px;
      border-radius: 22px;
      background: rgba(218,163,0,.08);
      border: 1px solid rgba(218,163,0,.16);
      color: var(--muted);
      line-height: 1.6;
      font-size: 14px;
    }


    .advisory-layout {
      display: grid;
      grid-template-columns: .95fr 1.05fr;
      gap: 34px;
      align-items: stretch;
      margin-top: 30px;
    }
    .advisory-photo-stack {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .advisory-photo {
      position: relative;
      min-height: 230px;
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid rgba(16,47,43,.10);
      box-shadow: 0 18px 46px rgba(34,50,42,.12);
      background-size: cover;
      background-position: center;
    }
    .advisory-photo:after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(16,47,43,.04), rgba(16,47,43,.48));
    }
    .advisory-photo span {
      position: absolute;
      z-index: 2;
      left: 18px;
      right: 18px;
      bottom: 16px;
      color: #fffaf1;
      font-size: 13px;
      font-weight: 850;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    .advisory-photo.large {
      grid-column: 1 / -1;
      min-height: 300px;
      background-image: url("https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1200");
    }
    .advisory-photo.strategy {
      background-image: url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .advisory-photo.finance {
      background-image: url("https://images.pexels.com/photos/6693652/pexels-photo-6693652.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .advisory-services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .advisory-service-card {
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 22px;
      background: rgba(255,250,241,.74);
      box-shadow: 0 14px 36px rgba(34,50,42,.08);
    }
    .advisory-service-card .mini-letter {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      margin-bottom: 14px;
      background: rgba(218,163,0,.09);
      border: 1px solid rgba(218,163,0,.22);
      color: var(--gold);
      font-weight: 900;
      font-size: 13px;
    }
    .advisory-service-card h3 {
      margin: 0 0 8px;
      font-size: 18px;
      line-height: 1.25;
      letter-spacing: -.02em;
    }
    .advisory-service-card p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.6;
    }
    .advisory-process {
      margin-top: 34px;
      border: 1px solid var(--line);
      border-radius: 32px;
      padding: 30px;
      background:
        radial-gradient(circle at 85% 10%, rgba(218,163,0,.12), transparent 28rem),
        rgba(255,250,241,.72);
      box-shadow: 0 18px 52px rgba(34,50,42,.08);
    }
    .advisory-process h2 {
      margin-top: 0;
      font-size: 32px;
    }
    .advisory-visual-note {
      margin-top: 18px;
      padding: 18px 20px;
      border-radius: 22px;
      background: rgba(218,163,0,.08);
      border: 1px solid rgba(218,163,0,.16);
      color: var(--muted);
      line-height: 1.6;
      font-size: 14px;
    }


    .advisory-process .process-flow {
      position: relative;
      margin-top: 24px;
      padding-top: 10px;
    }
    .advisory-process .process-flow-line {
      position: absolute;
      left: 56px;
      right: 56px;
      top: 18px;
      height: 3px;
      background: var(--gold);
      border-radius: 999px;
      z-index: 1;
    }
    .advisory-process .process-steps-inline {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      align-items: start;
    }
    .advisory-process .process-node {
      text-align: center;
      padding: 0 8px;
    }
    .advisory-process .process-dot {
      width: 14px;
      height: 14px;
      margin: 0 auto 18px;
      border-radius: 999px;
      background: var(--cream);
      border: 3px solid var(--gold);
      box-shadow: 0 0 0 5px rgba(255,250,241,.82);
    }
    .advisory-process .process-node strong {
      display: block;
      color: var(--text);
      margin-bottom: 8px;
      font-size: 13px;
      font-weight: 900;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .advisory-process .process-node span {
      display: block;
      max-width: 230px;
      margin: 0 auto;
      color: var(--muted);
      line-height: 1.55;
      font-size: 14px;
    }


    .compliance-layout {
      display: grid;
      grid-template-columns: .95fr 1.05fr;
      gap: 34px;
      align-items: stretch;
      margin-top: 30px;
    }
    .compliance-photo-stack {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .compliance-photo {
      position: relative;
      min-height: 230px;
      border-radius: 30px;
      overflow: hidden;
      border: 1px solid rgba(16,47,43,.10);
      box-shadow: 0 18px 46px rgba(34,50,42,.12);
      background-size: cover;
      background-position: center;
    }
    .compliance-photo:after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(16,47,43,.04), rgba(16,47,43,.48));
    }
    .compliance-photo span {
      position: absolute;
      z-index: 2;
      left: 18px;
      right: 18px;
      bottom: 16px;
      color: #fffaf1;
      font-size: 13px;
      font-weight: 850;
      letter-spacing: .04em;
      text-transform: uppercase;
    }
    .compliance-photo.large {
      grid-column: 1 / -1;
      min-height: 300px;
      background-image: url("https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=1200");
    }
    .compliance-photo.admin {
      background-image: url("https://images.pexels.com/photos/7414284/pexels-photo-7414284.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .compliance-photo.docs {
      background-image: url("https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg?auto=compress&cs=tinysrgb&w=900");
    }
    .compliance-services-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .compliance-service-card {
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 22px;
      background: rgba(255,250,241,.74);
      box-shadow: 0 14px 36px rgba(34,50,42,.08);
    }
    .compliance-service-card .mini-letter {
      width: 34px;
      height: 34px;
      border-radius: 12px;
      display: grid;
      place-items: center;
      margin-bottom: 14px;
      background: rgba(218,163,0,.09);
      border: 1px solid rgba(218,163,0,.22);
      color: var(--gold);
      font-weight: 900;
      font-size: 13px;
    }
    .compliance-service-card h3 {
      margin: 0 0 8px;
      font-size: 18px;
      line-height: 1.25;
      letter-spacing: -.02em;
    }
    .compliance-service-card p {
      margin: 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.6;
    }
    .compliance-process {
      margin-top: 34px;
      border: 1px solid var(--line);
      border-radius: 32px;
      padding: 30px;
      background:
        radial-gradient(circle at 85% 10%, rgba(218,163,0,.12), transparent 28rem),
        rgba(255,250,241,.72);
      box-shadow: 0 18px 52px rgba(34,50,42,.08);
    }
    .compliance-process h2 {
      margin-top: 0;
      font-size: 32px;
    }
    .compliance-process .process-flow {
      position: relative;
      margin-top: 24px;
      padding-top: 10px;
    }
    .compliance-process .process-flow-line {
      position: absolute;
      left: 56px;
      right: 56px;
      top: 18px;
      height: 3px;
      background: var(--gold);
      border-radius: 999px;
      z-index: 1;
    }
    .compliance-process .process-steps-inline {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      align-items: start;
    }
    .compliance-process .process-node {
      text-align: center;
      padding: 0 8px;
    }
    .compliance-process .process-dot {
      width: 14px;
      height: 14px;
      margin: 0 auto 18px;
      border-radius: 999px;
      background: var(--cream);
      border: 3px solid var(--gold);
      box-shadow: 0 0 0 5px rgba(255,250,241,.82);
    }
    .compliance-process .process-node strong {
      display: block;
      color: var(--text);
      margin-bottom: 8px;
      font-size: 13px;
      font-weight: 900;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .compliance-process .process-node span {
      display: block;
      max-width: 230px;
      margin: 0 auto;
      color: var(--muted);
      line-height: 1.55;
      font-size: 14px;
    }

    @media (max-width: 980px) {
      .hero-grid, .split, .footer-grid, .service-page-grid, .fiduciary-layout, .advisory-layout, .compliance-layout, .technology-top { grid-template-columns: 1fr; }
      .pillars { grid-template-columns: repeat(2, 1fr); }
      .support-visuals { max-width: 720px; }
      .visual { min-height: 500px; }
      .nav-links { display: none; }
      .mobile-menu-toggle { display: inline-flex; }
      .nav-inner > .btn-primary { display: none; }
    }
    @media (max-width: 640px) {
      .container { width: min(100% - 28px, 1180px); }
      .hero { padding-top: 64px; }
      .pillars, .contact-grid, .support-visuals { grid-template-columns: 1fr; }
      textarea { grid-column: auto; }
      .visual { transform: scale(.82); transform-origin: top center; margin-bottom: -80px; }
      .floating { width: 165px; }
      .support-photo.primary { min-height: 260px; grid-row: auto; }
      .support-photo { min-height: 220px; }
      .fiduciary-photo.large, .advisory-photo.large { min-height: 240px; }
      .fiduciary-photo-stack, .advisory-photo-stack { grid-template-columns: 1fr; }
      .process-flow-line, .advisory-process .process-flow-line, .compliance-process .process-flow-line { display: none; }
      .process-node, .advisory-process .process-node, .compliance-process .process-node { text-align: left; }
      .process-dot, .advisory-process .process-dot, .compliance-process .process-dot { margin: 0 0 14px; }
      .process-node span, .advisory-process .process-node span, .compliance-process .process-node span { max-width: none; margin: 0; }
      .cta { padding: 28px; }
    }
  
    .brand-logo-img {
      width: 142px !important;
      max-height: 38px !important;
      height: auto !important;
      object-fit: contain !important;
      display: block !important;
    }

    .footer-logo-img {
      width: 165px !important;
      max-height: 52px !important;
      height: auto !important;
      object-fit: contain !important;
      display: block !important;
      margin-bottom: 18px !important;
    }

    @media (max-width: 640px) {
      .brand-logo-img {
        width: 118px !important;
        max-height: 34px !important;
      }

      .footer-logo-img {
        width: 145px !important;
        max-height: 48px !important;
      }
    }

  
    .brand-logo-img {
      width: 172px !important;
      max-height: 48px !important;
      height: auto !important;
      object-fit: contain !important;
      display: block !important;
    }

    @media (max-width: 640px) {
      .brand-logo-img {
        width: 138px !important;
        max-height: 40px !important;
      }
    }`;

const siteMarkup = `<nav class="nav">
    <div class="container nav-inner">
      <a class="brand" href="#home" onclick="showSite()"><img class="brand-logo-img" src="/cyto-logo.png" alt="Cyto Dollars logo" /></a>
      <div class="nav-links">
        <a href="#pillars-overview" onclick="showSite()">About Us</a>
        
        <div class="nav-item">
          <a href="#pillars" onclick="showSite()">Services</a>
          <div class="nav-dropdown" aria-label="Services menu">
            <a href="#fiduciary-services-page" onclick="showServicePage('fiduciary')"><strong>F</strong>Financial Services</a>
            <a href="#advisory-services-page" onclick="showServicePage('advisory')"><strong>A</strong>Advisory Services</a>
            <a href="#compliance-corporate-page" onclick="showServicePage('compliance')"><strong>C</strong>Compliance and Corporate</a>
            <a href="#technology-integration-page" onclick="showServicePage('technology')"><strong>T</strong>Technology Integration</a>
          </div>
        </div>
        <a href="#contact" onclick="showSite()">Contact</a>
        <a href="#privacy" onclick="showPrivacy()">Privacy Policy</a>
      </div>
      <a class="btn btn-primary" href="#contact" onclick="showSite()">Book a Call</a>
      <button class="mobile-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" onclick="toggleMobileMenu()">☰</button>
    </div>

    <div class="mobile-menu" id="mobileMenu">
      <div class="mobile-menu-inner">
        <a href="#pillars-overview" onclick="closeMobileMenu(); showSite()">About Us</a>

        <details>
          <summary>Services <span>⌄</span></summary>
          <div class="mobile-submenu">
            <a href="#pillars" onclick="closeMobileMenu(); showSite()"><strong>All</strong>Services We Offer</a>
            <a href="#fiduciary-services-page" onclick="closeMobileMenu(); showServicePage('fiduciary')"><strong>F</strong>Financial Services</a>
            <a href="#advisory-services-page" onclick="closeMobileMenu(); showServicePage('advisory')"><strong>A</strong>Advisory Services</a>
            <a href="#compliance-corporate-page" onclick="closeMobileMenu(); showServicePage('compliance')"><strong>C</strong>Compliance and Corporate</a>
            <a href="#technology-integration-page" onclick="closeMobileMenu(); showServicePage('technology')"><strong>T</strong>Technology Integration</a>
          </div>
        </details>

        <a href="#contact" onclick="closeMobileMenu(); showSite()">Contact</a>
        <a href="#privacy" onclick="closeMobileMenu(); showPrivacy()">Privacy Policy</a>
        <a href="#contact" onclick="closeMobileMenu(); showSite()">Book a Call</a>
      </div>
    </div>
  </nav>

  <main class="site-page" id="home">
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <div class="eyebrow"><span class="pulse"></span> Financial, Corporate & Technology Infrastructure</div>
          <h1>Practical advisory for businesses managing <span>finance, operations, and international growth.</span></h1>
          <p class="lead">Cyto Dollars supports companies that need sharper financial clarity, stronger internal processes, and more efficient international payment coordination.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#pillars-overview">Explore Services</a>
            <a class="btn btn-ghost" href="#contact">Schedule Consultation</a>
          </div>
        </div>

        <div class="visual" aria-label="Cyto Dollars infrastructure visual">
          <div class="orb"></div>
          <div class="ring one"></div>
          <div class="ring two"></div>
          <div class="ring three"></div>
          <div class="center-card">
            <div><strong>FACT</strong><small>Financial, Advisory, Corporate & Technology</small></div>
          </div>
          <div class="floating f1"><strong>Financial</strong> Governance and controlled administration.</div>
          <div class="floating f2"><strong>Advisory</strong> Strategy, analytics and business optimisation.</div>
          <div class="floating f3"><strong>Compliance</strong> KYC, KYB and counterparty screening support.</div>
          <div class="floating f4"><strong>Technology</strong> Payment gateways and workflow integration.</div>
        </div>
      </div>
    </section>

    <section id="pillars-overview">
      <div class="container">
        <div class="section-head">
          <div class="kicker">Four Main Pillars</div>
          <h2>One operating layer for regulated business needs.</h2>
          <p>Built for companies that need structured support across establishment, governance, transaction workflows and technology adoption.</p>
        </div>

        <div class="pillars">
          <article class="card" id="fiduciary-services">
            <div class="icon">F</div>
            <h3>Financial Services</h3>
            <p>Controlled fund administration, cross-border transfer support and governance-led transaction oversight.</p>
          </article>

          <article class="card" id="advisory-services">
            <div class="icon">A</div>
            <h3>Advisory</h3>
            <p>Strategic business guidance, operational analysis and practical optimisation for companies expanding across markets.</p>
          </article>

          <article class="card" id="compliance-corporate">
            <div class="icon">C</div>
            <h3>Corporate & Compliance</h3>
            <p>Entity incorporation, company secretarial support, registered office, nominee arrangements and continuous KYC/KYB workflows.</p>
          </article>

          <article class="card" id="technology-integration">
            <div class="icon">T</div>
            <h3>Technology Integration</h3>
            <p>Payment gateway setup, compliance technology, workflow tools and infrastructure planning for scalable operations.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="pillars">
      <div class="container">
        <div class="section-head">
          <div class="kicker">Services We Offer</div>
          <h2>A clear progression from structure to scale.</h2>
          <p>Cyto Dollars supports businesses through each stage of growth: establishing the right corporate and compliance foundation, improving internal operations, enabling technology workflows, coordinating fiduciary and financial infrastructure, and scaling with ongoing governance support.</p>
        </div>
        
<div class="ecosystem-flow">
          <div class="flow-steps">
            <div class="flow-step">
              <div class="step-head"><div class="step-dot"></div><div class="step-label">Structure</div></div>
              <div class="flow-card">
                <h3>Corporate & Compliance Services</h3>
                <ul>
                  <li>Company setup</li>
                  <li>Governance framework</li>
                  <li>KYC/KYB support</li>
                  <li>Corporate administration</li>
                </ul>
              </div>
            </div>

            <div class="flow-step">
              <div class="step-head"><div class="step-dot"></div><div class="step-label">Optimize</div></div>
              <div class="flow-card">
                <h3>Advisory & Operations Consulting</h3>
                <ul>
                  <li>Business review</li>
                  <li>Process improvement</li>
                  <li>Financial planning</li>
                  <li>Operational efficiency</li>
                </ul>
              </div>
            </div>

            <div class="flow-step">
              <div class="step-head"><div class="step-dot"></div><div class="step-label">Enable</div></div>
              <div class="flow-card">
                <h3>Technology Integration</h3>
                <ul>
                  <li>KYC portal</li>
                  <li>Payment solutions</li>
                  <li>Workflow automation</li>
                  <li>Compliance tools</li>
                </ul>
              </div>
            </div>

            <div class="flow-step">
              <div class="step-head"><div class="step-dot"></div><div class="step-label">Transact</div></div>
              <div class="flow-card">
                <h3>Financial Infrastructure</h3>
                <ul>
                  <li>Governence and Distribution coordination</li>
                  <li>Settlement support</li>
                  <li>Investment structures</li>
                </ul>
              </div>
            </div>

            <div class="flow-step">
              <div class="step-head"><div class="step-dot"></div><div class="step-label">Scale</div></div>
              <div class="flow-card">
                <h3>Integrated Ecosystem Support</h3>
                <ul>
                  <li>Ongoing compliance</li>
                  <li>Technology enhancement</li>
                  <li>Advisory retainers</li>
                  <li>Governance support</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div class="flow-note flow-note-outside">
          We help businesses <strong>bridge traditional operations with modern financial and technology infrastructure</strong> through integrated corporate and financial solutions.
        </div>
      </div>
    </section>

    <section id="services">
      <div class="container split">
        <div class="section-head">
          <div class="kicker">What We Support</div>
          <h2>From setup to long-term operating structure.</h2>
          <p>Cyto Dollars combines professional services and infrastructure advisory into a single coordinated ecosystem for growing businesses.</p>
          <div class="support-visuals" aria-label="Business advisory and operations imagery">
            <div class="support-photo primary"><span>Advisory Conversations</span></div>
            <div class="support-photo secondary"><span>Operational Planning</span></div>
            <div class="support-photo tertiary"><span>Business Coordination</span></div>
          </div>
        </div>
        <div class="list-panel">
          <div class="service-row"><div class="num">01</div><div><h3>Cross-Border Investment Support</h3><p>SPV establishment, governance support and controlled fund administration for structured investment activities.</p></div></div>
          <div class="service-row"><div class="num">02</div><div><h3>Corporate Establishment</h3><p>Entity incorporation, registered office, nominee support, management coordination and accounting readiness.</p></div></div>
          <div class="service-row"><div class="num">03</div><div><h3>Compliance Operations</h3><p>Client onboarding, KYB/KYC document flows, counterparty screening and monitoring processes for business continuity.</p></div></div>
          <div class="service-row"><div class="num">04</div><div><h3>Technology & Payment Infrastructure</h3><p>Advisory for payment gateways, compliance portals and integrated operational tools that improve speed and control.</p></div></div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container">
        <div class="cta">
          <div class="section-head">
            <div class="kicker">Contact</div>
            <h2>Build your next operating layer with Cyto Dollars.</h2>
            <p>Speak with us about financial coordination, corporate structuring, compliance support or technology integration.</p>
          </div>
          <form class="contact-grid" action="mailto:info@cytodollars.com" method="post" enctype="text/plain">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="Service Interest" />
            <textarea placeholder="Tell us what you are looking to build"></textarea>
            <button class="btn btn-primary" type="submit">Send Enquiry</button>
          </form>

          <div class="company-details-box">
            <div>
              <div class="kicker">Company Details</div>
              <h3>Cyto Dollars Sdn. Bhd.</h3>
              <p><strong>Address</strong><br>
              Wisma UOA 2, Level 15 Unit 13A (15-13A), No. 21, Jalan Pinang, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia.</p>
              <p><strong>Company</strong><br>
              CYTO DOLLARS SDN BHD (202601004652 (1666749-A))</p>
              <p><a href="#privacy" onclick="showPrivacy()">Privacy Policy</a></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

  <main class="privacy-page" id="privacy">
    <div class="container">
      <div class="legal">
        
        <h1>Privacy Policy</h1>
        <p>Effective Date: 2026</p>

        <h2>1. Introduction</h2>
        <p>Cyto Dollars Sdn. Bhd. (“Cyto Dollars”, “we”, “us” or “our”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, store and protect personal data when you access our website, communicate with us, submit enquiries, or engage with our services.</p>
        <p>This Privacy Policy is prepared in accordance with applicable personal data protection laws, including the Personal Data Protection Act 2010 of Malaysia where applicable.</p>

        <h2>2. Personal Data We May Collect</h2>
        <p>We may collect personal data that you provide to us directly or that is collected during the course of our business relationship, including but not limited to:</p>
        <p>i. name, contact details, email address, phone number, company name and job title;</p>
        <p>ii. business, corporate, compliance, financial, transaction or onboarding information submitted to us;</p>
        <p>iii. identification, verification, KYC, KYB or due diligence documents where required for service assessment or onboarding;</p>
        <p>iv. correspondence, enquiry details, meeting notes and other information you choose to provide to us; and</p>
        <p>v. technical information such as website usage data, browser information, device information and IP address where collected through standard website technologies.</p>

        <h2>3. How We Use Personal Data</h2>
        <p>We may use personal data for the following purposes:</p>
        <p>i. to respond to enquiries and communicate with you;</p>
        <p>ii. to assess your suitability for our services and perform onboarding, due diligence, KYC, KYB or compliance checks;</p>
        <p>iii. to provide Financial coordination, advisory, corporate, compliance, technology integration and related services;</p>
        <p>iv. to coordinate with service providers, professional advisers, counterparties, trustees, custodians, financial institutions, regulators or other relevant parties where necessary;</p>
        <p>v. to maintain business, compliance, legal, accounting and administrative records;</p>
        <p>vi. to improve our website, services, processes and client experience; and</p>
        <p>vii. to comply with legal, regulatory, contractual or risk management obligations.</p>

        <h2>4. Disclosure of Personal Data</h2>
        <p>We may disclose personal data where necessary to:</p>
        <p>i. our officers, employees, representatives and authorised personnel;</p>
        <p>ii. professional advisers, consultants, technology providers, compliance providers and service providers;</p>
        <p>iii. trustees, custodians, payment providers, financial institutions, counterparties or business partners involved in delivering requested services;</p>
        <p>iv. regulators, authorities, law enforcement agencies or courts where required by law or regulation; and</p>
        <p>v. any party where disclosure is necessary to protect our rights, comply with obligations, or perform requested services.</p>

        <h2>5. Data Security</h2>
        <p>We take reasonable administrative, technical and organisational measures to protect personal data against unauthorised access, disclosure, loss, misuse, alteration or destruction. However, no method of transmission or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

        <h2>6. Data Retention</h2>
        <p>We retain personal data for as long as necessary to fulfil the purposes for which it was collected, to provide services, to comply with legal and regulatory obligations, to resolve disputes, and to maintain business and compliance records.</p>

        <h2>7. Your Rights</h2>
        <p>Subject to applicable law, you may request access to, correction of, or withdrawal of consent for the processing of your personal data. We may require verification of your identity before processing such requests.</p>

        <h2>8. Third-Party Websites</h2>
        <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, content or security of such third-party websites. You should review the privacy policies of those third parties before providing any personal data.</p>

        <h2>9. Updates to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any updated version will be posted on this website and will take effect from the date of posting.</p>

        <h2>10. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or how your personal data is handled, please contact us through the contact details or enquiry form available on this website.</p>

        <p><a class="btn btn-ghost" href="#home" onclick="showSite()">Back to Website</a></p>
      </div>
    </div>
  </main>

  <main class="service-detail-page" id="fiduciary-page">
    <div class="container">
      <div class="service-hero-card">
        <div class="service-letter">F</div>
        <h1>Financial and Wealth Infrastructure Solutions</h1>
        <p>Cyto Dollars supports clients that need structured financial coordination, controlled transaction administration and wealth infrastructure planning across corporate, investment and cross-border operating needs.</p>
      </div>

      <div class="fiduciary-layout">
        <div>
          <div class="fiduciary-photo-stack" aria-label="Fiduciary service imagery">
            <div class="fiduciary-photo large"><span>Family Office & Administration Coordination</span></div>
            <div class="fiduciary-photo office"><span>Investment & SPV Structuring</span></div>
            <div class="fiduciary-photo meeting"><span>Settlement & Transaction Administration</span></div>
          </div>
        </div>

        <div class="fiduciary-services-grid">
          <div class="fiduciary-service-card">
            <div class="mini-letter">01</div>
            <h3>Govenrnance & Administration</h3>
            <p>Coordination support for governance requirements and financial administration workflows.</p>
          </div>
          <div class="fiduciary-service-card">
            <div class="mini-letter">02</div>
            <h3>Cross-Border Transaction Coordination</h3>
            <p>Structured coordination for cross-border commercial, investment and settlement-related transaction flows.</p>
          </div>
          <div class="fiduciary-service-card">
            <div class="mini-letter">03</div>
            <h3>Settlement & Payment Administration</h3>
            <p>Administrative support for payment workflows, settlement tracking, documentation and controlled fund movements.</p>
          </div>
          <div class="fiduciary-service-card">
            <div class="mini-letter">04</div>
            <h3>Custodial Coordination Support</h3>
            <p>Coordination between clients, custodial providers and operating stakeholders for secure asset administration.</p>
          </div>
          <div class="fiduciary-service-card">
            <div class="mini-letter">05</div>
            <h3>Family Office & Wealth Structuring Support</h3>
            <p>Support for family office planning, governance setup, asset-holding structures and long-term wealth coordination.</p>
          </div>
          <div class="fiduciary-service-card">
            <div class="mini-letter">06</div>
            <h3>SPV & Investment Structure Support</h3>
            <p>Assistance with SPV coordination, investment structure planning and administration readiness for structured activities.</p>
          </div>
        </div>
      </div>

      
      <div class="fiduciary-process">
        <h2>How the financial layer works</h2>
        <p>We keep the process practical: understand the structure, coordinate the parties, support the administration, and maintain governance visibility as the arrangement scales.</p>

        <div class="process-flow">
          <div class="process-flow-line" aria-hidden="true"></div>
          <div class="process-steps-inline">
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Assess</strong>
              <span>Understand the client structure, counterparties, assets and transaction needs.</span>
            </div>
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Structure</strong>
              <span>Coordinate the appropriate financial, SPV or administrative pathway.</span>
            </div>
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Administer</strong>
              <span>Support payment, settlement, custody and documentation workflows.</span>
            </div>
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Govern</strong>
              <span>Maintain oversight, reporting readiness and ongoing coordination support.</span>
            </div>
          </div>
        
      </div>
      <p class="back-link"><a class="btn btn-ghost" href="#pillars" onclick="showSite()">Back to Services</a></p>
    </div>
  </main>

  <main class="service-detail-page" id="advisory-page">
    <div class="container">
      <div class="service-hero-card">
        <div class="service-letter">A</div>
        <h1>Advisory and Operations Consulting</h1>
        <p>Cyto Dollars supports businesses with practical advisory across strategy, operations, finance, governance and transformation. The focus is to help companies improve clarity, strengthen processes and build a more controlled operating structure.</p>
      </div>

      <div class="advisory-layout">
        <div>
          <div class="advisory-photo-stack" aria-label="Advisory service imagery">
            <div class="advisory-photo large"><span>Strategic Advisory & Business Planning</span></div>
            <div class="advisory-photo strategy"><span>Operational Improvement</span></div>
            <div class="advisory-photo finance"><span>Financial Planning & Analysis</span></div>
          </div>
        </div>

        <div class="advisory-services-grid">
          <div class="advisory-service-card">
            <div class="mini-letter">01</div>
            <h3>Strategic Advisory</h3>
            <p>Business planning, growth strategy and corporate restructuring support for companies preparing to scale or reposition.</p>
          </div>
          <div class="advisory-service-card">
            <div class="mini-letter">02</div>
            <h3>Operational Improvement</h3>
            <p>Workflow optimisation, internal controls and process enhancement to improve business efficiency and execution.</p>
          </div>
          <div class="advisory-service-card">
            <div class="mini-letter">03</div>
            <h3>Financial Advisory</h3>
            <p>Management reporting, budgeting, cash flow planning and financial analysis for sharper decision-making.</p>
          </div>
          <div class="advisory-service-card">
            <div class="mini-letter">04</div>
            <h3>Governance & Risk Support</h3>
            <p>Policy development, operational governance and risk management frameworks for stronger oversight.</p>
          </div>
          <div class="advisory-service-card">
            <div class="mini-letter">05</div>
            <h3>Business Transformation</h3>
            <p>Support for scaling operations, digital transformation and organisational development initiatives.</p>
          </div>
          <div class="advisory-service-card">
            <div class="mini-letter">06</div>
            <h3>Operating Model Review</h3>
            <p>Assessment of current workflows, reporting lines and internal processes to identify practical improvement areas.</p>
          </div>
        </div>
      </div>

      
      <div class="advisory-process">
        <h2>How the advisory layer works</h2>
        <p>We assess where the business is today, identify operational gaps, design practical improvements and support implementation with clear governance and reporting discipline.</p>

        <div class="process-flow">
          <div class="process-flow-line" aria-hidden="true"></div>
          <div class="process-steps-inline">
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Review</strong>
              <span>Understand the current business model, financial position and operating workflow.</span>
            </div>
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Diagnose</strong>
              <span>Identify gaps across strategy, process, governance, risk and reporting.</span>
            </div>
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Improve</strong>
              <span>Design practical recommendations, controls and operating improvements.</span>
            </div>
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Scale</strong>
              <span>Support execution, transformation and ongoing advisory coordination.</span>
            </div>
          </div>
        </div>
      </div>

      <p class="back-link"><a class="btn btn-ghost" href="#pillars" onclick="showSite()">Back to Services</a></p>
    </div>
  </main>

  <main class="service-detail-page" id="compliance-page">
    <div class="container">
      <div class="service-hero-card">
        <div class="service-letter">C</div>
        <h1>Corporate & Compliance Services</h1>
        <p>Cyto Dollars assists businesses in building strong governance, compliance and administrative foundations that support sustainable growth, operational resilience and structured corporate development.</p>
      </div>

      <div class="compliance-layout">
        <div>
          <div class="compliance-photo-stack" aria-label="Corporate and compliance service imagery">
            <div class="compliance-photo large"><span>Corporate Structuring & Governance</span></div>
            <div class="compliance-photo admin"><span>Administration & Filing Support</span></div>
            <div class="compliance-photo docs"><span>Compliance Coordination</span></div>
          </div>
        </div>

        <div class="compliance-services-grid">
          <div class="compliance-service-card">
            <div class="mini-letter">01</div>
            <h3>Corporate Structuring</h3>
            <p>Company incorporation, business structuring and shareholding arrangement support for businesses establishing a stronger legal and governance foundation.</p>
          </div>
          <div class="compliance-service-card">
            <div class="mini-letter">02</div>
            <h3>Corporate Administration</h3>
            <p>Company secretarial coordination, registered office support and statutory maintenance to keep the corporate structure orderly and current.</p>
          </div>
          <div class="compliance-service-card">
            <div class="mini-letter">03</div>
            <h3>Governance & Risk Management</h3>
            <p>Corporate governance frameworks, policy development and operational controls that strengthen business oversight and accountability.</p>
          </div>
          <div class="compliance-service-card">
            <div class="mini-letter">04</div>
            <h3>Regulatory Coordination</h3>
            <p>Professional advisor coordination, regulatory filing support and documentation management for smoother compliance execution.</p>
          </div>
          <div class="compliance-service-card">
            <div class="mini-letter">05</div>
            <h3>Compliance Support</h3>
            <p>KYC/KYB coordination, due diligence support and compliance monitoring to help businesses maintain operational continuity.</p>
          </div>
          <div class="compliance-service-card">
            <div class="mini-letter">06</div>
            <h3>Documentation & Record Management</h3>
            <p>Structured handling of corporate records, board materials, internal documentation and filing readiness across the business lifecycle.</p>
          </div>
        </div>
      </div>

      <div class="compliance-process">
        <h2>How the corporate & compliance layer works</h2>
        <p>We establish the right structure, coordinate the administrative requirements, maintain governance discipline and support ongoing compliance so businesses can operate with stronger control and readiness.</p>

        <div class="process-flow">
          <div class="process-flow-line" aria-hidden="true"></div>
          <div class="process-steps-inline">
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Establish</strong>
              <span>Set up the company structure, ownership arrangement and governance baseline.</span>
            </div>
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Administer</strong>
              <span>Coordinate corporate secretarial work, statutory tasks and documentation upkeep.</span>
            </div>
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Coordinate</strong>
              <span>Support regulatory filings, advisor coordination and due diligence workflows.</span>
            </div>
            <div class="process-node">
              <div class="process-dot"></div>
              <strong>Maintain</strong>
              <span>Keep governance, compliance monitoring and record management aligned over time.</span>
            </div>
          </div>
        </div>
      </div>

      <p class="back-link"><a class="btn btn-ghost" href="#pillars" onclick="showSite()">Back to Services</a></p>
    </div>
  </main>

  
  <main class="service-detail-page technology-page" id="technology-page">
    <div class="container">
      <div class="technology-stage">
        <div class="technology-top">
          <div class="technology-badge">T</div>

          <div class="technology-heading">
            <h1>Technology integration</h1>
          </div>

          <div class="technology-intro">
            <p>Cyto Dollars integrates technology solutions that help businesses improve efficiency, strengthen operational controls, enhance customer experience, and support long-term scalability.</p>
          </div>
        </div>

        <div class="technology-flow-section">
          <h2>How the technology integration layer works</h2>
          <p>We help businesses move from infrastructure setup to connected automation. The flow starts with the core operational tools, then links payment and system workflows, before extending into optimisation and AI-enabled enhancements.</p>

          <div class="technology-vertical-flow">
            <div class="technology-flow-row">
            <div class="technology-flow-stage"><strong>Digital Infrastructure</strong></div>
            <div class="technology-flow-axis"><div class="technology-flow-dot"></div></div>
            <div class="technology-flow-card">
                <ul>
                  <li>KYC/KYB Platforms</li>
                  <li>Client Portals</li>
                  <li>Document Management</li>
                </ul>
                <p style="margin-top:12px;">This layer forms the operational base for onboarding, access control, document handling and internal visibility.</p>
              </div>
            </div>

            <div class="technology-flow-row">
            <div class="technology-flow-stage"><strong>Payment Solutions</strong></div>
            <div class="technology-flow-axis"><div class="technology-flow-dot"></div></div>
            <div class="technology-flow-card">
                <ul>
                  <li>Payment Gateway Integration</li>
                  <li>Settlement Coordination Support</li>
                  <li>Workflow Automation</li>
                </ul>
                <p style="margin-top:12px;">These solutions connect commercial activity to practical payment and transaction workflows.</p>
              </div>
            </div>

            <div class="technology-flow-row">
            <div class="technology-flow-stage"><strong>Business Automation</strong></div>
            <div class="technology-flow-axis"><div class="technology-flow-dot"></div></div>
            <div class="technology-flow-card">
                <ul>
                  <li>Process Automation</li>
                  <li>Reporting Automation</li>
                  <li>Operational Workflows</li>
                </ul>
                <p style="margin-top:12px;">Automation helps reduce manual work, improve consistency and support stronger operational control.</p>
              </div>
            </div>

            <div class="technology-flow-row">
            <div class="technology-flow-stage"><strong>System Connectivity</strong></div>
            <div class="technology-flow-axis"><div class="technology-flow-dot"></div></div>
            <div class="technology-flow-card">
                <ul>
                  <li>API Integration</li>
                  <li>Third-Party System Integration</li>
                  <li>Data Synchronisation</li>
                </ul>
                <p style="margin-top:12px;">System connectivity ensures tools and platforms work together as one operating environment.</p>
              </div>
            </div>

            <div class="technology-flow-row">
            <div class="technology-flow-stage"><strong>AI Enablement</strong></div>
            <div class="technology-flow-axis"><div class="technology-flow-dot"></div></div>
            <div class="technology-flow-card">
                <ul>
                  <li>AI Agent Advisory</li>
                  <li>Workflow Optimisation</li>
                  <li>Business Process Enhancement</li>
                </ul>
                <p style="margin-top:12px;">AI extends the stack into smarter, more scalable and more adaptive operating workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p class="back-link"><a class="btn btn-ghost" href="#pillars" onclick="showSite()">Back to Services</a></p>
    </div>
  </main>



    <footer>
    <div class="container footer-grid">
      <div>
        <img class="footer-logo-img" src="/cyto-logo-large.png" alt="Cyto Dollars logo" />
        <p>Wisma UOA 2, Level 15 Unit 13A (15-13A), No. 21, Jalan Pinang, 50450 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia.</p>
        <p>CYTO DOLLARS SDN BHD (202601004652 (1666749-A))</p>
        <p>© 2026 Cyto Dollars. All rights reserved.</p>
      </div>
      <div><strong>Navigation</strong><a href="#pillars-overview" onclick="showSite()">About Us</a><a href="#pillars" onclick="showSite()">Services</a><a href="#privacy" onclick="showPrivacy()">Privacy Policy</a></div>
      <div><strong>Contact</strong><a href="mailto:info@cytodollars.com">info@cytodollars.com</a><a href="#contact" onclick="showSite()">Book a Consultation</a></div>
    </div>
  </footer>`;

export default function App() {
  useEffect(() => {
    window.toggleMobileMenu = function toggleMobileMenu() {
      const menu = document.getElementById("mobileMenu");
      const toggle = document.querySelector(".mobile-menu-toggle");
      if (!menu || !toggle) return;
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.textContent = isOpen ? "×" : "☰";
    };

    window.closeMobileMenu = function closeMobileMenu() {
      const menu = document.getElementById("mobileMenu");
      const toggle = document.querySelector(".mobile-menu-toggle");
      if (!menu || !toggle) return;
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    };

    window.clearServicePages = function clearServicePages() {
      document.body.classList.remove("service-detail-active");
      document.querySelectorAll(".service-detail-page").forEach((page) => {
        page.classList.remove("active");
      });
    };

    window.showPrivacy = function showPrivacy() {
      window.closeMobileMenu?.();
      window.clearServicePages?.();
      document.body.classList.add("privacy");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.showSite = function showSite() {
      window.closeMobileMenu?.();
      document.body.classList.remove("privacy");
      window.clearServicePages?.();
    };

    window.showServicePage = function showServicePage(pageName) {
      window.closeMobileMenu?.();
      document.body.classList.remove("privacy");
      window.clearServicePages?.();

      const pageMap = {
        fiduciary: "fiduciary-page",
        advisory: "advisory-page",
        compliance: "compliance-page",
        technology: "technology-page",
      };

      const page = document.getElementById(pageMap[pageName]);
      if (page) {
        document.body.classList.add("service-detail-active");
        page.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    if (window.location.hash === "#privacy") window.showPrivacy();
    if (window.location.hash === "#fiduciary-services-page") window.showServicePage("fiduciary");
    if (window.location.hash === "#advisory-services-page") window.showServicePage("advisory");
    if (window.location.hash === "#compliance-corporate-page") window.showServicePage("compliance");
    if (window.location.hash === "#technology-integration-page") window.showServicePage("technology");
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{ __html: siteMarkup }} />
    </>
  );
}
