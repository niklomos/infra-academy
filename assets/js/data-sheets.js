// ─── DATA: SHEETS ─────────────────────────────────────────
var SHEETS={
  'mb-main':{t:'Mainboard / Motherboard',s:'Chipset · Socket · Form Factor · Desktop · Server · Brand',body:function(){
    return '<div class="section-label" style="padding-left:0">Form Factor — ขนาด Board</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Form</th><th>ขนาด (mm)</th><th>Slot PCIe</th><th>เหมาะกับ</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">E-ATX</span></td><td>305×330</td><td>5–7 slot</td><td>Enthusiast, Workstation, Multi-GPU</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">ATX</span></td><td>305×244</td><td>4–7 slot</td><td>Desktop Gaming/Office มาตรฐาน</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">mATX (Micro-ATX)</span></td><td>244×244</td><td>2–4 slot</td><td>Mid Tower, SFF compact</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">Mini-ITX</span></td><td>170×170</td><td>1 slot</td><td>Mini PC, HTPC, SFF ขนาดเล็กสุด</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">SSI-EEB / WS</span></td><td>305×330+</td><td>7+ slot</td><td>Server / Workstation grade</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0">Intel Desktop Chipset (Socket LGA1851 — Arrow Lake)</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Chipset</th><th>OC ได้?</th><th>PCIe 5.0</th><th>Target</th><th>ราคา Board</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">Z890</span></td><td>✅ K/KF CPU</td><td>✅</td><td>Enthusiast OC</td><td>5,000–25,000฿</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">B860</span></td><td>❌</td><td>✅</td><td>Mid-range</td><td>3,500–8,000฿</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">H810</span></td><td>❌</td><td>❌</td><td>Entry/Budget</td><td>2,500–4,500฿</td></tr>'+
    '</table></div>'+
    '<div class="note-box" style="margin:0 0 12px">⚠️ LGA1851 ≠ LGA1700 — Gen 12–14 CPU ใช้ LGA1700 ไม่เข้ากัน · ต้องตรวจ socket ก่อนซื้อเสมอ</div>'+

    '<div class="section-label" style="padding-left:0">Intel Legacy Chipset (Socket LGA1700 — Gen 12–14)</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Chipset</th><th>OC</th><th>เหมาะกับ CPU</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">Z790 / Z690</span></td><td>✅</td><td>Core i9/i7 K/KF series</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">B760 / B660</span></td><td>❌</td><td>Core i5/i7 standard</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">H770 / H670</span></td><td>❌</td><td>Office build</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0">AMD Desktop Chipset (Socket AM5 — Ryzen 7000/9000)</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Chipset</th><th>OC ได้?</th><th>PCIe 5.0</th><th>Target</th><th>ราคา Board</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">X870E</span></td><td>✅</td><td>✅ Full</td><td>Extreme Enthusiast</td><td>8,000–30,000฿</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">X870</span></td><td>✅</td><td>✅</td><td>High-end Gaming</td><td>5,000–15,000฿</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">B850</span></td><td>✅ (PBO)</td><td>✅ Partial</td><td>Mid-range Best Value</td><td>3,500–8,000฿</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">B650E / B650</span></td><td>✅ (PBO)</td><td>Partial</td><td>Mid สำหรับ AM5</td><td>3,000–7,000฿</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">A620</span></td><td>❌</td><td>❌</td><td>Budget AM5</td><td>2,000–3,500฿</td></tr>'+
    '</table></div>'+
    '<div class="note-box note-amd" style="margin:0 0 12px">AM5 รองรับ Ryzen 7000 และ Ryzen 9000 (Zen4/Zen5) — ข้อดีคือ upgrade CPU ได้ในภายหลังโดยไม่ต้องเปลี่ยน board · DDR5 เท่านั้น</div>'+

    '<div class="section-label" style="padding-left:0">AMD Legacy (Socket AM4 — Ryzen 5000 ลงไป)</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Chipset</th><th>OC</th><th>เหมาะกับ</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">X570</span></td><td>✅</td><td>Ryzen 5000 เต็มรูปแบบ</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">B550</span></td><td>✅ (PBO)</td><td>Mid-range Ryzen 3000–5000</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">A520</span></td><td>❌</td><td>Budget Ryzen</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0">Server / Workstation Board</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Platform</th><th>Socket</th><th>ECC</th><th>PCIe Slot</th><th>ตัวอย่าง</th></tr>'+
    '<tr><td>Intel Xeon</td><td>LGA4677 (Sapphire/Granite)</td><td>✅ RDIMM/LRDIMM</td><td>7+ PCIe 5.0</td><td>Supermicro X13, ASUS WS Pro</td></tr>'+
    '<tr><td>AMD EPYC</td><td>SP5 (Genoa/Turin)</td><td>✅ DDR5 ECC</td><td>128 PCIe 5.0 lanes</td><td>Supermicro H13, Gigabyte MZ73</td></tr>'+
    '<tr><td>Intel Xeon W (WS)</td><td>LGA4677</td><td>✅ ECC</td><td>4–7 slot</td><td>ASUS WS W790E-SAGE, MSI WS</td></tr>'+
    '<tr><td>AMD TR PRO</td><td>sWRX9</td><td>✅ ECC</td><td>7 slot</td><td>Supermicro, ASUS WRX90</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0">Key Features บน Mainboard</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">VRM (Voltage Regulator)</div><div class="spec-val">Phase มาก = CPU ทน OC ได้ดีกว่า · 16+ phase = high-end</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">M.2 Slot</div><div class="spec-val">NVMe PCIe 4.0/5.0 · ตรวจ keying (M-key) · Heatsink สำคัญ</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">RAM Slot</div><div class="spec-val">2 slot (mITX) หรือ 4 slot (ATX) · Dual channel สำคัญ</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">BIOS / UEFI</div><div class="spec-val">BIOS Flashback — update ไม่ต้องมี CPU เก่า</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">PCIe Bifurcation</div><div class="spec-val">แบ่ง x16 slot เป็น x8+x8 หรือ x4×4 สำหรับ NVMe card</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Fan Header</div><div class="spec-val">4-pin PWM/DC · จำนวนมาก = ดีกว่าสำหรับ cooling</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">I/O Shield</div><div class="spec-val">USB-A, USB-C, HDMI, DP, 2.5GbE LAN, Audio</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Q-LED / POST</div><div class="spec-val">Debug LED บอก boot error — จำเป็นสำหรับ troubleshoot</div></div>'+
    '</div>'+

    '<div class="section-label" style="padding-left:0;margin-top:8px">Mainboard Brand — Desktop</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Brand</th><th>Line</th><th>จุดเด่น</th><th>Target</th></tr>'+
    '<tr><td rowspan="3"><strong>ASUS</strong></td><td>ROG Maximus</td><td>สูงสุด OC performance, premium build</td><td>Enthusiast / Overclock</td></tr>'+
    '<tr><td>ROG Strix / TUF Gaming</td><td>Gaming-focused, durability</td><td>Gaming Mid-High</td></tr>'+
    '<tr><td>Prime / ProArt</td><td>Stable, Creator/Office</td><td>Office / Creator</td></tr>'+
    '<tr><td rowspan="3"><strong>Gigabyte</strong></td><td>AORUS Master/Xtreme</td><td>Extreme OC, 10-layer PCB</td><td>Enthusiast</td></tr>'+
    '<tr><td>AORUS Elite/Pro</td><td>Good VRM สำหรับราคา</td><td>Gaming Mid</td></tr>'+
    '<tr><td>Gaming X / UD</td><td>Budget-friendly reliable</td><td>Office / Budget</td></tr>'+
    '<tr><td rowspan="3"><strong>MSI</strong></td><td>MEG ACE/Godlike</td><td>Premium OC, RGB premium</td><td>Enthusiast</td></tr>'+
    '<tr><td>MAG Tomahawk</td><td>Best value VRM mid-range</td><td>Mid Gaming</td></tr>'+
    '<tr><td>PRO Series</td><td>Business stable</td><td>Office</td></tr>'+
    '<tr><td rowspan="2"><strong>ASRock</strong></td><td>Taichi / Steel Legend</td><td>Value-premium, unique features</td><td>Mid-High</td></tr>'+
    '<tr><td>Pro / Phantom Gaming</td><td>Budget ราคาดี</td><td>Budget-Mid</td></tr>'+
    '<tr><td><strong>Biostar</strong></td><td>Racing / Hi-Fi</td><td>Budget ราคาต่ำสุด</td><td>Budget</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0">Mainboard Brand — Server / Workstation</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Brand</th><th>จุดเด่น</th><th>ตลาด</th></tr>'+
    '<tr><td><strong>Supermicro</strong></td><td>Market leader server board — ยืดหยุ่นสูงสุด, OEM ทั่วโลก</td><td>DC / Enterprise</td></tr>'+
    '<tr><td><strong>ASUS Server (WS)</strong></td><td>Workstation + Server — ISV certified, ProArt WS</td><td>WS / SMB</td></tr>'+
    '<tr><td><strong>Gigabyte Server</strong></td><td>MZ series EPYC, competitive price</td><td>DC / Enterprise</td></tr>'+
    '<tr><td><strong>ASRock Rack</strong></td><td>Value server board — IPMI built-in ราคาดี</td><td>SMB / Edge</td></tr>'+
    '<tr><td><strong>HPE (proprietary)</strong></td><td>iLO integrated, ProLiant G11</td><td>Enterprise</td></tr>'+
    '<tr><td><strong>Dell (proprietary)</strong></td><td>iDRAC integrated, PowerEdge</td><td>Enterprise</td></tr>'+
    '<tr><td><strong>Lenovo (proprietary)</strong></td><td>XClarity mgmt, ThinkSystem</td><td>Enterprise</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0">วิธีอ่าน Spec Mainboard</div>'+
    '<div class="use-box"><div class="use-lbl">ตัวอย่าง: ASUS ROG STRIX B650E-F GAMING WIFI</div><div class="use-val">'+
    '<strong>ASUS ROG STRIX</strong> = Brand + Line · <strong>B650E</strong> = Chipset (B650 + E = PCIe 5.0 full) · <strong>F</strong> = Tier ใน line (F = Feature-rich) · <strong>GAMING</strong> = segment · <strong>WIFI</strong> = มี WiFi 6E/7 built-in'+
    '</div></div>'+
    '<div class="use-box"><div class="use-lbl">การเช็คความเข้ากันได้</div><div class="use-val">'+
    '1. Socket CPU ต้องตรง (LGA1851/AM5/LGA4677) · 2. RAM DDR version (DDR4 ≠ DDR5) · 3. Form factor ต้องพอดี Case · 4. PCIe version GPU ต้องรองรับ · 5. BIOS version รองรับ CPU รุ่นนั้น (ตรวจ QVL) · 6. M.2 slot รองรับ PCIe gen ที่ต้องการ'+
    '</div></div>'+

    '<div class="sales-strip" style="margin-top:8px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">'+
    'Z-series Intel / X-series AMD = OC ได้ — ต้องขาย CPU K/KF คู่กัน · B-series = best value สำหรับลูกค้าทั่วไป · Server board ใช้กับ CPU consumer ไม่ได้ — socket ต่างกัน · Supermicro คือ brand ที่ใช้มากที่สุดใน custom server build · BIOS Flashback ควรมีถ้าลูกค้า build ระบบใหม่เพราะ CPU ใหม่อาจต้อง update BIOS ก่อน'+
    '</div></div>';
  }},
  'ram-main':{t:'RAM / Memory',s:'DDR5 · ECC RDIMM · SO-DIMM · HBM · Brand Guide',body:function(){return '<div class="section-label" style="padding-left:0">DDR5 — Desktop / Laptop</div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Speed</div><div class="spec-val">4800–8000 MT/s</div></div><div class="spec-card"><div class="spec-lbl">Voltage</div><div class="spec-val">1.1V (JEDEC) / 1.35–1.5V (OC)</div></div><div class="spec-card"><div class="spec-lbl">Form</div><div class="spec-val">DIMM (Desktop) / SO-DIMM (Laptop)</div></div><div class="spec-card"><div class="spec-lbl">Platform</div><div class="spec-val">Intel LGA1851 · AMD AM5</div></div><div class="spec-card"><div class="spec-lbl">XMP 3.0 / EXPO</div><div class="spec-val">Intel XMP 3.0 · AMD EXPO — OC profile</div></div><div class="spec-card"><div class="spec-lbl">Channel</div><div class="spec-val">Dual channel = ใส่ 2 แถว ช่องเดียวกัน</div></div></div><div class="section-label" style="padding-left:0;margin-top:8px">DDR4 — Legacy</div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Speed</div><div class="spec-val">2133–4800 MT/s</div></div><div class="spec-card"><div class="spec-lbl">Voltage</div><div class="spec-val">1.2V JEDEC / 1.35V OC</div></div><div class="spec-card"><div class="spec-lbl">Platform</div><div class="spec-val">Intel LGA1700 · AMD AM4</div></div><div class="spec-card"><div class="spec-lbl">หมายเหตุ</div><div class="spec-val">DDR4 ≠ DDR5 — ขา 288 pin แต่ notch ต่างตำแหน่ง</div></div></div><div class="section-label" style="padding-left:0;margin-top:8px">ECC RDIMM — Server</div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">ECC</div><div class="spec-val">Error Correcting Code — ป้องกัน bit-flip อัตโนมัติ</div></div><div class="spec-card"><div class="spec-lbl">RDIMM</div><div class="spec-val">Registered — buffer ช่วย signal integrity</div></div><div class="spec-card"><div class="spec-lbl">LRDIMM</div><div class="spec-val">Load-Reduced — ใส่ได้มากกว่า แต่ latency สูงกว่า</div></div><div class="spec-card"><div class="spec-lbl">Max/socket EPYC</div><div class="spec-val">6 TB DDR5 ECC (Turin 9005)</div></div></div><div class="section-label" style="padding-left:0;margin-top:8px">HBM — AI GPU On-package Memory</div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">HBM3e</div><div class="spec-val">5.2 TB/s · H200 141GB · MI300X 192GB</div></div><div class="spec-card"><div class="spec-lbl">HBM3</div><div class="spec-val">3.35 TB/s · H100 80GB · A100</div></div><div class="spec-card"><div class="spec-lbl">ราคา</div><div class="spec-val">HBM แพงกว่า GDDR6 10–20×</div></div><div class="spec-card"><div class="spec-lbl">ผู้ผลิต HBM</div><div class="spec-val">SK Hynix · Samsung · Micron</div></div></div><div class="section-label" style="padding-left:0;margin-top:8px">Brand Guide — Consumer RAM</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Brand</th><th>Line</th><th>จุดเด่น</th><th>Target</th></tr><tr><td><strong>Corsair</strong></td><td>Dominator Platinum / Vengeance</td><td>Premium build, RGB, XMP</td><td>Enthusiast / Gaming</td></tr><tr><td><strong>G.Skill</strong></td><td>Trident Z5 / Ripjaws</td><td>OC ดีสุด DDR5, ค่า latency ต่ำ</td><td>Overclocker</td></tr><tr><td><strong>Kingston</strong></td><td>Fury Beast/Renegade</td><td>ราคาดี reliable, SMB นิยม</td><td>Office / Mid</td></tr><tr><td><strong>Crucial</strong></td><td>Pro / Classic</td><td>Micron IC ราคาถูก stable</td><td>Budget / Office</td></tr><tr><td><strong>ADATA</strong></td><td>XPG Lancer / Spectrix</td><td>ราคาดีสำหรับ performance</td><td>Gaming Budget</td></tr><tr><td><strong>Samsung</strong></td><td>M-Die / B-Die</td><td>Samsung B-Die = OC king DDR4</td><td>Overclocker</td></tr></table></div><div class="section-label" style="padding-left:0">Brand Guide — Server ECC RAM</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Brand</th><th>จุดเด่น</th></tr><tr><td><strong>Samsung</strong></td><td>Market leader server RAM — มากกว่า 40% market share</td></tr><tr><td><strong>SK Hynix</strong></td><td>HBM leader, Server DDR5 quality สูง</td></tr><tr><td><strong>Micron / Crucial</strong></td><td>US-based, reliable, ใช้ใน major server brands</td></tr><tr><td><strong>Kingston</strong></td><td>Server-specific line, certified for HPE/Dell/Lenovo</td></tr></table></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">DDR5 ≠ DDR4 — ตรวจ platform ก่อนเสมอ · ECC RAM จำเป็นสำหรับ Server ทุกตัว · Dual channel สำคัญมาก — ใส่ RAM คู่ดีกว่าใส่แท่งเดียว RAM ใหญ่ · Server RAM ควรซื้อ OEM หรือ certified brand เท่านั้น</div></div>';}}  ,
  'storage-main':{t:'Storage',s:'NVMe · SSD · HDD · SAN · NAS · Brand Guide',body:function(){return '<div class="table-wrap" style="margin:0 0 12px"><table><tr><th>ประเภท</th><th>Speed Read</th><th>Latency</th><th>เหมาะกับ</th></tr><tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">NVMe PCIe 5.0</span></td><td>14 GB/s</td><td>~0.02ms</td><td>OS / AI Hot data</td></tr><tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">NVMe PCIe 4.0</span></td><td>7 GB/s</td><td>~0.03ms</td><td>WS / Gaming flagship</td></tr><tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">NVMe PCIe 3.0</span></td><td>3.5 GB/s</td><td>~0.04ms</td><td>Mid-range / ราคาดี</td></tr><tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">SATA SSD</span></td><td>550 MB/s</td><td>~0.1ms</td><td>Bulk / Legacy system</td></tr><tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">SAS SSD</span></td><td>2.4 GB/s</td><td>~0.07ms</td><td>Enterprise Server 24/7</td></tr><tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">HDD SATA 7200rpm</span></td><td>250 MB/s</td><td>5–10ms</td><td>Bulk / NAS</td></tr><tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">HDD SAS 15K</span></td><td>300 MB/s</td><td>3–5ms</td><td>DB legacy</td></tr><tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">LTO-9 Tape</span></td><td>400 MB/s</td><td>นาที</td><td>Long-term archive 300TB/cart</td></tr></table></div><div class="section-label" style="padding-left:0">Shared Storage Architecture</div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">SAN (Storage Area Network)</div><div class="spec-val">Block storage · FC/iSCSI · Low latency · DB/VM</div></div><div class="spec-card"><div class="spec-lbl">NAS (Network Attached Storage)</div><div class="spec-val">File storage · NFS/SMB · เหมาะ file share / backup</div></div><div class="spec-card"><div class="spec-lbl">Object Storage</div><div class="spec-val">S3-compatible · scalable ไม่จำกัด · Backup/Media</div></div><div class="spec-card"><div class="spec-lbl">HCI (Hyperconverged)</div><div class="spec-val">Compute+Storage+Network รวมกัน · vSAN/Ceph/Nutanix</div></div></div><div class="use-box" style="margin-top:8px"><div class="use-lbl">RAID Level เปรียบเทียบ</div><div class="use-val">RAID 0 — Stripe เร็วสุด ไม่มี redundancy · RAID 1 — Mirror 2 disk ปลอดภัย · RAID 5 — Parity 1 disk fail ได้ (min 3 disk) · RAID 6 — 2 disk fail ได้ (min 4 disk) · RAID 10 — Mirror+Stripe เร็ว+ปลอดภัย (min 4 disk)</div></div><div class="section-label" style="padding-left:0;margin-top:8px">Brand Guide — Consumer SSD</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Brand</th><th>Model</th><th>Gen</th><th>จุดเด่น</th></tr><tr><td><strong>Samsung</strong></td><td>990 Pro / 970 EVO Plus</td><td>PCIe 4.0</td><td>Reliable, consistent, endurance สูง</td></tr><tr><td><strong>WD (Western Digital)</strong></td><td>Black SN850X / SN770</td><td>PCIe 4.0</td><td>Gaming tuned, PS5 compatible</td></tr><tr><td><strong>Seagate</strong></td><td>FireCuda 530 / 540</td><td>PCIe 4.0/5.0</td><td>High endurance, speed</td></tr><tr><td><strong>Crucial</strong></td><td>T705 / T500</td><td>PCIe 5.0/4.0</td><td>Micron NAND, value</td></tr><tr><td><strong>Kingston</strong></td><td>KC3000 / NV3</td><td>PCIe 4.0/3.0</td><td>SMB, price เป็นมิตร</td></tr><tr><td><strong>ADATA / XPG</strong></td><td>Legend 960 / Gammix</td><td>PCIe 4.0</td><td>Budget performance</td></tr></table></div><div class="section-label" style="padding-left:0">Brand Guide — Enterprise SSD / HDD</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Brand</th><th>Product Line</th><th>จุดเด่น</th></tr><tr><td><strong>Samsung</strong></td><td>PM9A3 / PM893 SAS</td><td>Enterprise NVMe/SATA leader</td></tr><tr><td><strong>Seagate</strong></td><td>Exos X / Nytro SAS</td><td>HDD enterprise หนาแน่นสูงสุด 24TB</td></tr><tr><td><strong>WD (HGST)</strong></td><td>Gold / Ultrastar DC</td><td>NAS/Enterprise HDD reliable</td></tr><tr><td><strong>Micron</strong></td><td>7450 NVMe / 5400 SATA</td><td>US-based, mission critical</td></tr><tr><td><strong>Kioxia (Toshiba)</strong></td><td>CD8 NVMe / MG series</td><td>NAND maker, enterprise grade</td></tr></table></div><div class="section-label" style="padding-left:0">Brand Guide — NAS</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Brand</th><th>Target</th><th>จุดเด่น</th></tr><tr><td><strong>Synology</strong></td><td>SMB/Home/Enterprise</td><td>DSM OS ดีสุด, ecosystem ครบ</td></tr><tr><td><strong>QNAP</strong></td><td>SMB/Enterprise</td><td>Hardware แรงกว่า, PCIe expansion</td></tr><tr><td><strong>NetApp</strong></td><td>Enterprise</td><td>ONTAP OS, enterprise SAN+NAS</td></tr><tr><td><strong>Pure Storage</strong></td><td>Enterprise Flash</td><td>All-flash array ประสิทธิภาพสูงสุด</td></tr><tr><td><strong>Dell PowerStore</strong></td><td>Enterprise</td><td>AI-driven storage, เติบโตได้</td></tr></table></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">SSD มี Endurance (TBW) — เลือก TBW ตาม workload · NAS Synology ขายได้ง่ายกับ SMB เพราะ DSM GUI ง่าย · Enterprise SSD ต้องซื้อ certified กับ server brand (HPE/Dell/Lenovo) มิฉะนั้น warranty อาจไม่ครอบคลุม · PCIe 5.0 SSD ร้อนมาก ต้องมี heatsink</div></div>';}},
  'gpu-main':{t:'GPU',s:'AI/HPC · Workstation · Gaming · iGPU',body:function(){return '<div class="section-label" style="padding-left:0">AI / HPC GPU (Data Center)</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Model</th><th>VRAM</th><th>เหมาะกับ</th></tr><tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">H200 SXM5</span></td><td>141GB HBM3e</td><td>LLM Training (ดีสุด)</td></tr><tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">H100 SXM5</span></td><td>80GB HBM3</td><td>AI Train/Inference</td></tr><tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">MI300X</span></td><td>192GB HBM3</td><td>LLM/HPC VRAM สูงสุด</td></tr><tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">L40S</span></td><td>48GB GDDR6</td><td>Inference/Video/Viz</td></tr><tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">A100 80GB</span></td><td>80GB HBM2e</td><td>Train/Fine-tune (เก่า)</td></tr></table></div><div class="section-label" style="padding-left:0">Workstation GPU</div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">NVIDIA RTX 6000 Ada</div><div class="spec-val">48GB ECC · VFX/CAD</div></div><div class="spec-card"><div class="spec-lbl">NVIDIA RTX 4500 Ada</div><div class="spec-val">24GB ECC · Mid WS</div></div><div class="spec-card"><div class="spec-lbl">AMD PRO W7900</div><div class="spec-val">48GB · Media/CAD</div></div><div class="spec-card"><div class="spec-lbl">ECC VRAM</div><div class="spec-val">ป้องกัน corruption</div></div></div><div class="section-label" style="padding-left:0;margin-top:8px">Gaming GPU (Consumer)</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Tier</th><th>NVIDIA RTX</th><th>AMD RX</th></tr><tr><td>Ultra High</td><td>5090 · 5080</td><td>9070 XT</td></tr><tr><td>High</td><td>5070 Ti · 4090</td><td>9070 · 7900 XTX</td></tr><tr><td>Mid-High</td><td>5070 · 4080</td><td>7800 XT</td></tr><tr><td>Mid</td><td>4070 · 3080</td><td>7700 XT · 6700 XT</td></tr><tr><td>Entry</td><td>4060 · 3060</td><td>7600 · 6600</td></tr></table></div><div class="section-label" style="padding-left:0">iGPU — ในตัว CPU</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>iGPU</th><th>CPU</th><th>ประสิทธิภาพ</th></tr><tr><td>Radeon 890M RDNA3.5</td><td>Ryzen AI 9 HX 375</td><td>ดีสุดใน iGPU ตลาด</td></tr><tr><td>Radeon 780M RDNA3</td><td>Ryzen 7 8700G</td><td>eSports ได้ดี</td></tr><tr><td>Arc 140V (Xe3)</td><td>Core Ultra 258V</td><td>ดีมากสำหรับ Intel</td></tr><tr><td>UHD 770</td><td>Core i9-13900K</td><td>Light office เท่านั้น</td></tr></table></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">AMD iGPU (RDNA3/3.5) แรงกว่า Intel iGPU ชัดเจน · H100 SXM5 ต้องคำนวณ 700W/GPU + cooling พิเศษ + NVLink · MI300X VRAM 192GB เหมาะ LLM ขนาดใหญ่ไม่ต้องแบ่ง model</div></div>';}},
  'psu-main':{t:'PSU & Power',s:'80Plus · ATX 3.0 · Server Power · Brand Guide',body:function(){return '<div class="section-label" style="padding-left:0">80Plus Certification</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Rating</th><th>20% Load</th><th>50% Load</th><th>100% Load</th><th>เหมาะกับ</th></tr><tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">80Plus</span></td><td>—</td><td>80%</td><td>—</td><td>Basic</td></tr><tr><td><span class="bx" style="background:#F0F0E8;color:#4A4A2A">Bronze</span></td><td>82%</td><td>85%</td><td>82%</td><td>Budget PC</td></tr><tr><td><span class="bx" style="background:#D8D8C0;color:#3A3A20">Silver</span></td><td>85%</td><td>88%</td><td>85%</td><td>Mid</td></tr><tr><td><span class="bx" style="background:#E8F0E8;color:#1A401A">Gold</span></td><td>87%</td><td>90%</td><td>87%</td><td>Gaming/Office ✅</td></tr><tr><td><span class="bx" style="background:#E8F0F8;color:#1A3040">Platinum</span></td><td>90%</td><td>92%</td><td>89%</td><td>High-end WS</td></tr><tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">Titanium</span></td><td>92%</td><td>96%</td><td>91%</td><td>Server/DC</td></tr></table></div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">ATX 3.0 / 3.1</div><div class="spec-val">12V-2×6 connector สำหรับ RTX 4000/5000 — 600W peak</div></div><div class="spec-card"><div class="spec-lbl">Modular</div><div class="spec-val">Full Modular = เลือกสายได้ · Semi = บางสายถาวร</div></div><div class="spec-card"><div class="spec-lbl">Server PSU</div><div class="spec-val">Redundant 1+1 · Hot-swap · PMBUS telemetry</div></div><div class="spec-card"><div class="spec-lbl">SFX / SFX-L</div><div class="spec-val">Small form factor สำหรับ ITX/SFF case</div></div><div class="spec-card"><div class="spec-lbl">Power คำนวณ</div><div class="spec-val">CPU TDP + GPU TDP + 100W system = เป้าหมาย PSU</div></div><div class="spec-card"><div class="spec-lbl">Ripple Noise</div><div class="spec-val">PSU ดี = Ripple ต่ำ &lt;50mV ไม่รบกวน component</div></div></div><div class="section-label" style="padding-left:0;margin-top:8px">Brand Guide — Consumer PSU</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Brand</th><th>Line</th><th>Rating</th><th>จุดเด่น</th></tr><tr><td><strong>Seasonic</strong></td><td>Prime / Focus</td><td>Gold–Titanium</td><td>Quality สูงสุด, OEM ให้หลายแบรนด์</td></tr><tr><td><strong>Corsair</strong></td><td>HX / RM / CV</td><td>Gold–Platinum</td><td>Ecosystem ดี, warranty 10 ปี</td></tr><tr><td><strong>be quiet!</strong></td><td>Dark Power / Pure Power</td><td>Gold–Titanium</td><td>เงียบสุด, German engineering</td></tr><tr><td><strong>EVGA (discontinued)</strong></td><td>SuperNOVA</td><td>Gold–Titanium</td><td>Warranty 10 ปี — ยังหาได้</td></tr><tr><td><strong>Fractal Design</strong></td><td>Ion / Torrent</td><td>Gold–Platinum</td><td>Case+PSU ecosystem</td></tr><tr><td><strong>Thermaltake</strong></td><td>Toughpower / Smart</td><td>Bronze–Platinum</td><td>ราคาดี, หลายขนาด</td></tr><tr><td><strong>ASUS ROG</strong></td><td>LOKI / THOR</td><td>Gold–Platinum</td><td>Premium gaming, OLED display</td></tr></table></div><div class="section-label" style="padding-left:0">Brand Guide — Server PSU</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Brand</th><th>จุดเด่น</th></tr><tr><td><strong>Delta Electronics</strong></td><td>OEM ให้ HPE/Dell/Lenovo — ผู้ผลิตรายใหญ่ที่สุด</td></tr><tr><td><strong>Murata / Lite-On</strong></td><td>1U Server PSU 80Plus Titanium</td></tr><tr><td><strong>Artesyn (nVent)</strong></td><td>Telecom / DC grade</td></tr></table></div><div class="sales-strip" style="margin-top:8px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">RTX 5090 ต้องการ PSU 1000W+ · Gold คือ sweet spot — Titanium จ่ายเพิ่ม 30% ประหยัดไฟได้ ~4% เท่านั้น · Seasonic เป็น OEM ให้ Corsair/Fractal หลายรุ่น · ATX 3.0 จำเป็นสำหรับ RTX 4000/5000 series เพื่อป้องกัน cable melt</div></div>';}},
  'cooling-main':{t:'Cooling',s:'Air · AIO · Custom Loop · Server · Brand Guide',body:function(){return '<div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Type</th><th>TDP Capacity</th><th>Noise</th><th>ราคา</th><th>เหมาะกับ</th></tr><tr><td>Air Cooler Low-profile</td><td>~65W</td><td>เงียบ</td><td>500–1,500฿</td><td>Office SFF</td></tr><tr><td>Air Cooler Tower Single</td><td>~180W</td><td>ปานกลาง</td><td>1,200–3,500฿</td><td>Mid-range PC</td></tr><tr><td>Air Cooler Tower Dual Fan</td><td>~250W</td><td>ต่ำ</td><td>2,500–6,000฿</td><td>High-end CPU</td></tr><tr><td>AIO 240mm</td><td>~280W</td><td>ต่ำ</td><td>3,000–7,000฿</td><td>Gaming</td></tr><tr><td>AIO 360mm</td><td>~400W</td><td>ต่ำมาก</td><td>5,000–15,000฿</td><td>Workstation/OC</td></tr><tr><td>Custom Loop</td><td>600W+</td><td>เงียบมาก</td><td>15,000฿+</td><td>Enthusiast/Multi-GPU</td></tr><tr><td>Server 1U Hot-plug Fan</td><td>Per CPU</td><td>ดังมาก</td><td>Built-in</td><td>Rack server DC</td></tr><tr><td>Direct Liquid Cooling</td><td>700W+/GPU</td><td>เงียบ</td><td>มาก</td><td>H100/H200 cluster</td></tr></table></div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">TIM ดีสุด</div><div class="spec-val">Thermal Grizzly Kryonaut (Paste) / Conductonaut (Liquid Metal)</div></div><div class="spec-card"><div class="spec-lbl">Liquid Metal</div><div class="spec-val">Conductonaut ลด temp 10–15°C แต่กัด aluminum</div></div><div class="spec-card"><div class="spec-lbl">Case Airflow</div><div class="spec-val">Positive pressure = ฝุ่นน้อย · Negative = cooling ดีกว่า</div></div><div class="spec-card"><div class="spec-lbl">Server Temp Target</div><div class="spec-val">Inlet ≤27°C · CPU Junction &lt;90°C</div></div><div class="spec-card"><div class="spec-lbl">PUE Target</div><div class="spec-val">Tier-3 DC ≤1.5 · Tier-4 ≤1.2 · Best-in-class ≤1.1</div></div><div class="spec-card"><div class="spec-lbl">Immersion Cooling</div><div class="spec-val">3M Novec / mineral oil · สำหรับ AI cluster 50kW+/rack</div></div></div><div class="section-label" style="padding-left:0;margin-top:8px">Brand Guide — Air Cooler</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Brand</th><th>รุ่นเด่น</th><th>จุดเด่น</th></tr><tr><td><strong>Noctua</strong></td><td>NH-D15 G2 / NH-U12S</td><td>เงียบสุด ประสิทธิภาพสูงสุด — Brown iconic</td></tr><tr><td><strong>be quiet!</strong></td><td>Dark Rock Pro 5 / Slim</td><td>เงียบมาก design สวย</td></tr><tr><td><strong>DeepCool</strong></td><td>AK620 / AK500</td><td>Performance/Price ratio ดีที่สุด</td></tr><tr><td><strong>Thermalright</strong></td><td>Peerless Assassin 120 SE</td><td>ราคาถูกสุดที่ยังดี</td></tr><tr><td><strong>Arctic</strong></td><td>Freezer 36 / Freezer II</td><td>Budget เงียบ แนะนำ Office</td></tr></table></div><div class="section-label" style="padding-left:0">Brand Guide — AIO Liquid Cooler</div><div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Brand</th><th>รุ่นเด่น</th><th>จุดเด่น</th></tr><tr><td><strong>Corsair</strong></td><td>Hydro H150i / H100i Elite</td><td>iCUE software, display head option</td></tr><tr><td><strong>NZXT</strong></td><td>Kraken 360 / Elite</td><td>Design สวย LCD, quiet pump</td></tr><tr><td><strong>EK Water Blocks</strong></td><td>AIO Basic / Nucleus</td><td>Custom loop components leader</td></tr><tr><td><strong>DeepCool</strong></td><td>LT720 / LE520</td><td>Best value AIO</td></tr><tr><td><strong>Arctic Liquid</strong></td><td>Freezer III 360</td><td>Budget AIO ที่ดีที่สุด</td></tr></table></div><div class="sales-strip" style="margin-top:8px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">Noctua NH-D15 เงียบและแรงเทียบเท่า AIO 360mm · H100/H200 GPU ต้องการ DLC — air cooling ไม่เพียงพอ 700W/card · Server 1U มีพัดลมดังมากเพราะต้องเย็นในพื้นที่แคบ เหมาะ DC เท่านั้น · AIO pump อายุสั้นกว่า air cooler (3–5 ปีเทียบกับ 10+ ปี)</div></div>';}},
  'ups-main':{t:'UPS & Power Protection',s:'Online · Offline · Line-interactive · Sizing',body:function(){
    return '<div class="section-label" style="padding-left:0">ประเภท UPS</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>ประเภท</th><th>การทำงาน</th><th>Switchover</th><th>เหมาะกับ</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">Offline/Standby</span></td><td>ปกติวิ่งไฟตรง เปลี่ยนแบตเมื่อไฟดับ</td><td>4–25ms</td><td>PC ทั่วไป ราคาถูก</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">Line-interactive</span></td><td>AVR ปรับ voltage ก่อน → แบต</td><td>2–4ms</td><td>SMB Server, Network</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">Online / Double Conversion</span></td><td>ไฟผ่านแบตตลอด 0ms switchover</td><td>0ms</td><td>Data Center, Mission Critical</td></tr>'+
    '</table></div>'+
    '<div class="section-label" style="padding-left:0;margin-top:4px">การคำนวณขนาด UPS (VA Sizing)</div>'+
    '<div class="use-box"><div class="use-lbl">สูตรคำนวณ</div><div class="use-val">'+
    '<strong>Step 1</strong> รวม Watt ของอุปกรณ์ทั้งหมด (ดูจากสติกเกอร์หรือ spec)<br>'+
    '<strong>Step 2</strong> หาร Power Factor: VA = Watt ÷ 0.8 (PF ทั่วไป)<br>'+
    '<strong>Step 3</strong> บวกเผื่อ 20–25% สำหรับ head room<br>'+
    '<strong>ตัวอย่าง</strong>: Server 500W → 500÷0.8 = 625VA × 1.25 = ~800VA → ซื้อ 1000VA</div></div>'+
    '<div class="section-label" style="padding-left:0;margin-top:4px">Runtime & Battery</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">Runtime เป้าหมาย</div><div class="spec-val">10–15 นาที (graceful shutdown)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Extended Runtime</div><div class="spec-val">External Battery Pack</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Battery อายุ</div><div class="spec-val">3–5 ปี (VRLA/AGM)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Hot-swap Battery</div><div class="spec-val">เปลี่ยนแบตโดยไม่ดับ</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Monitoring</div><div class="spec-val">SNMP card / USB / Network</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Auto-shutdown</div><div class="spec-val">Software ปิด OS อัตโนมัติ</div></div>'+
    '</div>'+
    '<div class="section-label" style="padding-left:0;margin-top:4px">Topology — Data Center</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Tier</th><th>Power Path</th><th>Availability</th></tr>'+
    '<tr><td>Tier 1</td><td>Single path (1 UPS)</td><td>99.671%</td></tr>'+
    '<tr><td>Tier 2</td><td>Redundant component (N+1)</td><td>99.741%</td></tr>'+
    '<tr><td>Tier 3</td><td>Dual path (2 UPS, 1 active)</td><td>99.982%</td></tr>'+
    '<tr><td>Tier 4</td><td>Fault-tolerant dual active</td><td>99.995%</td></tr>'+
    '</table></div>'+
    '<div class="chip-wrap"><span class="chip">APC Smart-UPS</span><span class="chip">APC Symmetra</span><span class="chip">Eaton 9PX</span><span class="chip">Vertiv Liebert</span><span class="chip">CyberPower OL</span></div>'+
    '<div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">'+
    'UPS ≠ surge protector — ลูกค้าหลายรายเข้าใจผิด · ทุก Server ควรต่อ UPS Online เสมอ · ขาย SNMP card เพิ่มเพื่อ monitor + auto-shutdown ผ่าน network · ถามลูกค้าว่า runtime ต้องการกี่นาที ก่อน size UPS'+
    '</div></div>';
  }},
  'ports-main':{t:'Ports & Connectors',s:'USB · PCIe · Video · Network · Thunderbolt · Server',body:function(){
    return '<div class="section-label" style="padding-left:0">USB</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Standard</th><th>Speed</th><th>Connector</th><th>หมายเหตุ</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">USB 2.0</span></td><td>480 Mbps</td><td>Type-A</td><td>Mouse/Keyboard</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">USB 3.2 Gen1</span></td><td>5 Gbps</td><td>Type-A/C</td><td>USB 3.0 เดิม</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">USB 3.2 Gen2</span></td><td>10 Gbps</td><td>Type-A/C</td><td>External SSD</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">USB 3.2 Gen2×2</span></td><td>20 Gbps</td><td>Type-C</td><td>NVMe enclosure</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--purple-bg);color:var(--purple-text)">USB4 Gen2×2</span></td><td>20 Gbps</td><td>Type-C</td><td>รองรับ DP + PD</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--purple-bg);color:var(--purple-text)">USB4 Gen3×2</span></td><td>40 Gbps</td><td>Type-C</td><td>เทียบ TB3</td></tr>'+
    '</table></div>'+
    '<div class="section-label" style="padding-left:0">Thunderbolt</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Version</th><th>Speed</th><th>Video</th><th>Power Delivery</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">TB3</span></td><td>40 Gbps</td><td>2× 4K/1× 5K</td><td>100W</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">TB4</span></td><td>40 Gbps</td><td>2× 4K</td><td>100W + 2× TB4 port</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">TB5</span></td><td>120 Gbps</td><td>3× 4K/8K</td><td>240W</td></tr>'+
    '</table></div>'+
    '<div class="section-label" style="padding-left:0">Video Output</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Port</th><th>Max Resolution</th><th>Audio</th><th>หมายเหตุ</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">VGA (D-Sub)</span></td><td>1920×1200</td><td>ไม่มี</td><td>เก่า analog ยังพบ Projector</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">DVI-D</span></td><td>2560×1600</td><td>ไม่มี</td><td>Dual-link 2K</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">HDMI 2.0</span></td><td>4K @60Hz</td><td>มี</td><td>TV/Monitor ทั่วไป</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">HDMI 2.1</span></td><td>10K / 4K @120Hz</td><td>eARC</td><td>Gaming Monitor / TV 8K</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">DisplayPort 1.4</span></td><td>8K @30Hz / 4K @120Hz</td><td>มี</td><td>PC Monitor มาตรฐาน</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">DisplayPort 2.1</span></td><td>16K / 4K @240Hz</td><td>มี</td><td>Gaming 4K high refresh</td></tr>'+
    '</table></div>'+
    '<div class="section-label" style="padding-left:0">PCIe (การ์ดต่อขยาย)</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Version</th><th>Speed (×16)</th><th>ใช้กับ</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">PCIe 3.0</span></td><td>16 GB/s</td><td>เก่า GPU/NVMe</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">PCIe 4.0</span></td><td>32 GB/s</td><td>GPU/NVMe mainstream</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">PCIe 5.0</span></td><td>64 GB/s</td><td>GPU ใหม่/NVMe 14GB/s</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--purple-bg);color:var(--purple-text)">PCIe 6.0</span></td><td>128 GB/s</td><td>Server/AI (2025+)</td></tr>'+
    '</table></div>'+
    '<div class="section-label" style="padding-left:0">Network Ports</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Port</th><th>Speed</th><th>Connector</th><th>ใช้กับ</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">RJ-45 1GbE</span></td><td>1 Gbps</td><td>RJ-45 copper</td><td>Office / Home</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">RJ-45 2.5GbE</span></td><td>2.5 Gbps</td><td>RJ-45 copper</td><td>Gaming / NAS ใหม่</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">RJ-45 10GbE</span></td><td>10 Gbps</td><td>RJ-45 Cat6A</td><td>Server / NAS ระยะ 100m</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">SFP+ 10GbE</span></td><td>10 Gbps</td><td>Fiber / DAC</td><td>Server rack</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">SFP28 25GbE</span></td><td>25 Gbps</td><td>Fiber / DAC</td><td>Server → ToR switch</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">QSFP28 100GbE</span></td><td>100 Gbps</td><td>Fiber / DAC</td><td>Spine switch / uplink</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">QSFP-DD 400GbE</span></td><td>400 Gbps</td><td>Fiber</td><td>DC core / AI cluster</td></tr>'+
    '</table></div>'+
    '<div class="section-label" style="padding-left:0">Server-specific Ports</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">IPMI / BMC / iDRAC</div><div class="spec-val">Out-of-band mgmt — KVM over IP ไม่ต้องอยู่หน้า Server</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">iDRAC (Dell)</div><div class="spec-val">Dell Remote Access Controller</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">iLO (HPE)</div><div class="spec-val">Integrated Lights-Out</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ALOM/ILOM (Sun/Oracle)</div><div class="spec-val">ALOM/ILOM management</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">VGA Console</div><div class="spec-val">KVM switch ต่อ monitor หลาย server</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Serial Console</div><div class="spec-val">RS-232 fallback เมื่อ network down</div></div>'+
    '</div>'+
    '<div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">'+
    'iDRAC/iLO = ต้องขายเสมอกับ Server — ช่วย Remote KVM ไม่ต้องไป Data Center ทุกครั้ง · SFP+ DAC cable ถูกกว่า Fiber module มาก (ระยะ ≤7m) · HDMI 2.1 จำเป็นสำหรับ 4K @120Hz Gaming monitor'+
    '</div></div>';
  }},
  'pc-types':{t:'Desktop PC ประเภทต่างๆ',s:'Tower · SFF · Mini · Micro · AIO · Workstation · Server',body:function(){
    return '<div class="section-label" style="padding-left:0">ภาพรวม Form Factor</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>ประเภท</th><th>ขนาด</th><th>Expandability</th><th>เหมาะกับ</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">Full Tower</span></td><td>50×22×50 cm+</td><td>สูงสุด — GPU ยาว/หนัก</td><td>Enthusiast, WS, Server Tower</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">Mid Tower</span></td><td>45×20×45 cm</td><td>สูง — ATX MB + 3 card</td><td>Gaming, Creator ทั่วไป</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">Mini Tower</span></td><td>35×18×35 cm</td><td>กลาง — mATX MB</td><td>Office, Home general</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">SFF (Small Form Factor)</span></td><td>30×10×30 cm</td><td>จำกัด — low-profile card</td><td>Office compact, POS</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">Mini PC</span></td><td>~12×12×5 cm</td><td>น้อย — SO-DIMM/M.2</td><td>Office, HTPC, Digital signage</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">Micro PC / Stick PC</span></td><td>≤10×10×3 cm</td><td>แทบไม่มี — Soldered</td><td>Digital signage, IoT edge</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">AIO (All-in-One)</span></td><td>จอ 21–32 นิ้ว</td><td>น้อย — ติดจอ</td><td>Reception, Office สวยงาม</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">Workstation Desktop</span></td><td>Full/Mid Tower</td><td>สูงมาก — multi GPU/CPU</td><td>VFX, CAD, AI, Engineering</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">Tower Server</span></td><td>Full Tower</td><td>Server-grade — ECC/RAID</td><td>SMB server ไม่มี rack</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0">🖥️ Full / Mid / Mini Tower PC</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">Motherboard</div><div class="spec-val">ATX (Full/Mid) · mATX (Mini)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">GPU ได้ถึง</div><div class="spec-val">RTX 5090 / dual GPU (Full)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">RAM slot</div><div class="spec-val">4 slot DDR5 ถึง 192GB</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Storage bay</div><div class="spec-val">หลาย M.2 + 3.5" HDD bay</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">PSU standard</div><div class="spec-val">ATX 3.0 — แก้ไขได้ง่าย</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">แบรนด์นิยม</div><div class="spec-val">Lenovo, HP, Dell, Acer, ASUS</div></div>'+
    '</div>'+

    '<div class="section-label" style="padding-left:0;margin-top:4px">📦 SFF — Small Form Factor</div>'+
    '<div class="use-box"><div class="use-lbl">คุณลักษณะ</div><div class="use-val">'+
    'ใช้ Low Profile PCIe card เท่านั้น · PSU เป็น SFX หรือ Flex ATX · CPU เดียวกับ Desktop แต่ระบาย heat จำกัดกว่า · เหมาะ Office ที่ต้องการ Desktop แต่พื้นที่จำกัด · ราคาเทียบเท่า Mid Tower แต่ขยายได้น้อยกว่า'+
    '</div></div>'+
    '<div class="chip-wrap"><span class="chip">HP EliteDesk 800 G9 SFF</span><span class="chip">Dell OptiPlex SFF</span><span class="chip">Lenovo ThinkCentre M90s</span></div>'+

    '<div class="section-label" style="padding-left:0;margin-top:8px">🟦 Mini PC</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">CPU</div><div class="spec-val">Mobile CPU (TDP 15–28W) ไม่ใช่ Desktop</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">RAM</div><div class="spec-val">SO-DIMM DDR5 สูงสุด 96GB</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Storage</div><div class="spec-val">M.2 NVMe 1–2 slot</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">GPU</div><div class="spec-val">iGPU เท่านั้น (ไม่มี dGPU)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Output</div><div class="spec-val">HDMI + DP + TB4 (3 จอ)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ราคา</div><div class="spec-val">~10,000–35,000฿</div></div>'+
    '</div>'+
    '<div class="use-box"><div class="use-lbl">Use Case จริง</div><div class="use-val">'+
    'HTPC ต่อ TV · Office document/web · Digital signage ร้านค้า · Thin client แทน PC เก่า · Dev machine สำหรับ remote desktop · NAS/Homelab ประหยัดไฟ'+
    '</div></div>'+
    '<div class="chip-wrap"><span class="chip">Intel NUC 13</span><span class="chip">ASUS NUC 14 Pro</span><span class="chip">Beelink EQ/SER</span><span class="chip">MINISFORUM UM</span><span class="chip">HP Elite Mini 800</span><span class="chip">Lenovo ThinkCentre M75q</span></div>'+

    '<div class="section-label" style="padding-left:0;margin-top:8px">⬛ Micro PC / Stick PC</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">ขนาด</div><div class="spec-val">เล็กกว่า Mini PC อีก บางรุ่นเล็กกว่า palm</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">CPU</div><div class="spec-val">Intel N100 / AMD Ryzen Embedded</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">RAM</div><div class="spec-val">Soldered 8–16GB (แก้ไขไม่ได้)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ราคา</div><div class="spec-val">~3,000–8,000฿</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Stick PC</div><div class="spec-val">ขนาด USB drive เสียบ HDMI TV ได้เลย</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ข้อจำกัด</div><div class="spec-val">performance ต่ำ ไม่เหมาะงาน heavy</div></div>'+
    '</div>'+
    '<div class="chip-wrap"><span class="chip">Chuwi LarkBox</span><span class="chip">MeLE Quieter</span><span class="chip">ASUS Chromebox</span><span class="chip">Intel Compute Stick</span></div>'+

    '<div class="section-label" style="padding-left:0;margin-top:8px">🖼️ AIO — All-in-One</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">จอ</div><div class="spec-val">21.5–32 นิ้ว IPS/VA built-in</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">CPU</div><div class="spec-val">Mobile CPU (เหมือน Notebook)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">GPU</div><div class="spec-val">iGPU หรือ MXM dGPU (บางรุ่น)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ข้อดี</div><div class="spec-val">สะอาด ไม่มีสายระโยงระยาง</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ข้อเสีย</div><div class="spec-val">ซ่อมยาก upgrade น้อย จอพังต้องเปลี่ยนทั้งชุด</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ราคา</div><div class="spec-val">~20,000–80,000฿</div></div>'+
    '</div>'+
    '<div class="chip-wrap"><span class="chip">Apple iMac 24"</span><span class="chip">Dell Inspiron AIO</span><span class="chip">HP Envy AIO 32</span><span class="chip">Lenovo IdeaCentre AIO</span><span class="chip">ASUS Vivo AIO</span></div>'+

    '<div class="section-label" style="padding-left:0;margin-top:8px">🔬 Desktop Workstation</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">CPU</div><div class="spec-val">Intel Xeon W / AMD Ryzen Threadripper PRO</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">RAM</div><div class="spec-val">ECC RDIMM DDR5 — 128GB–2TB</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">GPU</div><div class="spec-val">NVIDIA RTX 6000 Ada / AMD PRO W7900</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Storage</div><div class="spec-val">NVMe PCIe 5.0 RAID</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Certification</div><div class="spec-val">ISV certified (AutoCAD, Maya, SolidWorks)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ราคา</div><div class="spec-val">80,000฿ – 1,000,000฿+</div></div>'+
    '</div>'+
    '<div class="table-wrap" style="margin:8px 0 12px"><table>'+
    '<tr><th>รุ่น</th><th>CPU</th><th>RAM Max</th><th>Use Case</th></tr>'+
    '<tr><td>HP Z8 Fury G5</td><td>Xeon W9-3595X</td><td>2TB ECC</td><td>VFX / AI Training</td></tr>'+
    '<tr><td>Dell Precision T7960</td><td>Dual Xeon W / EPYC</td><td>4TB ECC</td><td>Simulation / CAE</td></tr>'+
    '<tr><td>Lenovo ThinkStation P8</td><td>Ryzen Threadripper PRO</td><td>1TB ECC</td><td>Creator / Engineering</td></tr>'+
    '<tr><td>ASUS ProArt Station</td><td>Core Ultra / Ryzen</td><td>192GB DDR5</td><td>Video Edit / 3D</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0">🗄️ Tower Server</div>'+
    '<div class="use-box"><div class="use-lbl">Tower Server vs Rack Server</div><div class="use-val">'+
    'Tower Server รูปทรง PC tower ทั่วไป ไม่ต้องมี Server Rack · เหมาะ SMB/สำนักงานเล็กที่ไม่มีห้อง Data Center · ใช้ ECC RAM, RAID controller, Redundant PSU เหมือน Rack server · ย้ายไปใส่ Rack ได้ (Tower-to-Rack kit) เมื่อขยาย'+
    '</div></div>'+
    '<div class="chip-wrap"><span class="chip">Dell PowerEdge T550</span><span class="chip">HPE ProLiant ML350</span><span class="chip">Lenovo ThinkSystem ST650</span><span class="chip">Supermicro SuperServer</span></div>'+

    '<div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">'+
    'Mini PC เหมาะแทน PC เก่าในออฟฟิศ — ลดพื้นที่ + ลดค่าไฟ · AIO ขายได้ง่ายกับ Reception/Front desk ที่เน้นความสวยงาม · Workstation Desktop ต้องถามว่าใช้ซอฟต์แวร์อะไร (AutoCAD ต้องการ ISV certified) · Tower Server เหมาะ SMB ที่ยังไม่มี rack room'+
    '</div></div>';
  }},
  'notebook-types':{t:'Notebook ประเภทต่างๆ',s:'Ultrabook · Business · Gaming · Workstation · 2-in-1 · Chromebook',body:function(){
    return '<div class="section-label" style="padding-left:0">ภาพรวมประเภท Notebook</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>ประเภท</th><th>น้ำหนัก</th><th>Battery</th><th>Performance</th><th>เหมาะกับ</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">Ultrabook/Thin & Light</span></td><td>&lt;1.5 kg</td><td>10–18ชม</td><td>กลาง</td><td>Executive, Mobile worker</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">Business/Corporate</span></td><td>1.3–1.8 kg</td><td>8–14ชม</td><td>กลาง-สูง</td><td>Office, Enterprise จัดซื้อ</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">Gaming</span></td><td>2–3 kg</td><td>2–5ชม</td><td>สูง</td><td>Gamer, Content creator เบา</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">Mobile Workstation</span></td><td>2–3.5 kg</td><td>3–6ชม</td><td>สูงสุด + ECC</td><td>VFX, CAD, Engineering</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">2-in-1 Convertible</span></td><td>1.2–1.8 kg</td><td>8–14ชม</td><td>กลาง</td><td>Flexible หมุน/ถอดจอ</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">2-in-1 Detachable</span></td><td>0.9–1.4 kg</td><td>8–12ชม</td><td>กลาง</td><td>Tablet + Keyboard</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">Rugged</span></td><td>2–3.5 kg</td><td>8–20ชม</td><td>กลาง</td><td>Field work, Military, Oil&Gas</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">Chromebook</span></td><td>1.2–1.8 kg</td><td>10–15ชม</td><td>ต่ำ</td><td>Education, Web-only tasks</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0">💎 Ultrabook / Thin & Light</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">ความหนา</div><div class="spec-val">&lt;15mm — บางกว่านิ้วก้อย</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">CPU</div><div class="spec-val">Intel Core Ultra V / AMD Ryzen e — TDP 15–17W</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">RAM</div><div class="spec-val">Soldered LPDDR5X 16–32GB</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Battery</div><div class="spec-val">10–18ชม real-world</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">จุดขาย</div><div class="spec-val">น้ำหนักเบา แบตทน พกง่าย</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ราคา</div><div class="spec-val">30,000–80,000฿</div></div>'+
    '</div>'+
    '<div class="table-wrap" style="margin:8px 0 12px"><table>'+
    '<tr><th>รุ่นตัวอย่าง</th><th>น้ำหนัก</th><th>CPU</th><th>จุดเด่น</th></tr>'+
    '<tr><td>LG Gram 14</td><td>999g</td><td>Core Ultra 7</td><td>เบาสุดในตลาด MIL-SPEC</td></tr>'+
    '<tr><td>Apple MacBook Air M3</td><td>1.24 kg</td><td>Apple M3</td><td>แบตทน fanless เงียบ</td></tr>'+
    '<tr><td>ASUS ZenBook S14</td><td>1.2 kg</td><td>Core Ultra 7</td><td>OLED จอสวย บางมาก</td></tr>'+
    '<tr><td>Dell XPS 13</td><td>1.2 kg</td><td>Core Ultra 7</td><td>Premium compact</td></tr>'+
    '<tr><td>HP Spectre x360 14</td><td>1.4 kg</td><td>Core Ultra 7</td><td>2-in-1 premium</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0;margin-top:4px">💼 Business / Corporate Laptop</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">จุดเด่น</div><div class="spec-val">Durable + Security ระดับ Enterprise</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Security</div><div class="spec-val">TPM 2.0, Fingerprint, IR Camera, SmartCard</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Manageability</div><div class="spec-val">Intel vPro / AMD Pro — remote manage</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Keyboard</div><div class="spec-val">Business keyboard full size + spill resistant</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Port</div><div class="spec-val">RJ-45 · USB-A · HDMI · Thunderbolt</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Warranty</div><div class="spec-val">3 ปี Onsite มาตรฐาน</div></div>'+
    '</div>'+
    '<div class="use-box"><div class="use-lbl">Intel vPro / AMD Pro คืออะไร?</div><div class="use-val">'+
    'Platform สำหรับ Enterprise IT — ช่วยให้ IT Admin remote manage เครื่อง (BIOS level), encrypt drive ระยะไกล, deploy image ผ่าน network ได้แม้เครื่องดับ · จำเป็นสำหรับองค์กรที่มี PC Fleet จำนวนมาก'+
    '</div></div>'+
    '<div class="table-wrap" style="margin:8px 0 12px"><table>'+
    '<tr><th>Brand</th><th>Line</th><th>จุดเด่น</th></tr>'+
    '<tr><td>Lenovo</td><td>ThinkPad X1/T/L Series</td><td>Keyboard ดีสุด, MIL-SPEC, vPro</td></tr>'+
    '<tr><td>HP</td><td>EliteBook 800/900 Series</td><td>HP Wolf Security built-in, Sure View</td></tr>'+
    '<tr><td>Dell</td><td>Latitude 5000/7000/9000</td><td>Dell Optimizer AI, Precision trackpad</td></tr>'+
    '<tr><td>ASUS</td><td>ExpertBook B9/P Series</td><td>บางเบา ราคาดี</td></tr>'+
    '<tr><td>Panasonic</td><td>Toughbook CF/FZ Series</td><td>Semi-rugged สำหรับ Field</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0;margin-top:4px">🎮 Gaming Laptop</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">CPU</div><div class="spec-val">Core Ultra H/HX · Ryzen H/HX TDP 45–157W</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">GPU</div><div class="spec-val">RTX 5090/5080/5070 · RX 9070</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Display</div><div class="spec-val">144–360Hz · IPS/OLED · G-Sync/FreeSync</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">RAM</div><div class="spec-val">16–32GB DDR5 SO-DIMM (upgrade ได้)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Cooling</div><div class="spec-val">Vapor chamber · Triple fan</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ข้อเสีย</div><div class="spec-val">แบต 2–4ชม · หนัก 2.5kg+ · ร้อน</div></div>'+
    '</div>'+
    '<div class="table-wrap" style="margin:8px 0 12px"><table>'+
    '<tr><th>Segment</th><th>GPU</th><th>ราคาโดยประมาณ</th><th>เหมาะกับ</th></tr>'+
    '<tr><td>Entry Gaming</td><td>RTX 4060 / RX 7600M</td><td>25,000–35,000฿</td><td>1080p gaming เบาๆ</td></tr>'+
    '<tr><td>Mid Gaming</td><td>RTX 4070 / RX 7700M</td><td>40,000–60,000฿</td><td>1080p–1440p gaming</td></tr>'+
    '<tr><td>High Gaming</td><td>RTX 5080 / RX 9070</td><td>70,000–100,000฿</td><td>1440p–4K gaming</td></tr>'+
    '<tr><td>Flagship</td><td>RTX 5090 Max-Q</td><td>100,000–160,000฿</td><td>Desktop replacement</td></tr>'+
    '</table></div>'+
    '<div class="chip-wrap"><span class="chip">ASUS ROG Zephyrus</span><span class="chip">ASUS TUF Gaming</span><span class="chip">MSI Raider/Titan</span><span class="chip">Lenovo Legion</span><span class="chip">Acer Predator</span><span class="chip">Razer Blade</span></div>'+

    '<div class="section-label" style="padding-left:0;margin-top:8px">🔬 Mobile Workstation</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">CPU</div><div class="spec-val">Intel Core Ultra HX / Xeon W-series</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">GPU</div><div class="spec-val">NVIDIA RTX 3000/4000/5000 Ada (ECC VRAM)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ECC RAM</div><div class="spec-val">ECC SO-DIMM — ป้องกัน bit-flip ข้อมูลสำคัญ</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Display</div><div class="spec-val">DCI-P3 100% / Pantone Validated</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Certification</div><div class="spec-val">ISV: AutoCAD, CATIA, SolidWorks, Maya</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ราคา</div><div class="spec-val">60,000–250,000฿</div></div>'+
    '</div>'+
    '<div class="use-box"><div class="use-lbl">Mobile WS vs Gaming Laptop ต่างกันอย่างไร?</div><div class="use-val">'+
    'GPU Mobile WS = Quadro/RTX Professional มี ECC VRAM + ISV Certified driver ให้ความเสถียรสูงกว่า · GPU Gaming = GeForce ไม่มี ECC ไม่ได้ ISV certified · ECC ป้องกัน rendering error ที่ทำให้ไฟล์ชิ้นงาน CAD/VFX เสียหาย'+
    '</div></div>'+
    '<div class="table-wrap" style="margin:8px 0 12px"><table>'+
    '<tr><th>รุ่น</th><th>GPU</th><th>เหมาะกับ</th></tr>'+
    '<tr><td>HP ZBook Fury 16 G11</td><td>RTX 5000 Ada</td><td>VFX, Simulation, AI</td></tr>'+
    '<tr><td>Dell Precision 7780</td><td>RTX 4000/5000 Ada</td><td>CAD, CAE, VFX</td></tr>'+
    '<tr><td>Lenovo ThinkPad P16</td><td>RTX 3500/4500 Ada</td><td>Engineering, Data Science</td></tr>'+
    '<tr><td>ASUS ProArt Studiobook</td><td>RTX 4090</td><td>Creator, 3D Artist</td></tr>'+
    '</table></div>'+

    '<div class="section-label" style="padding-left:0;margin-top:4px">🔄 2-in-1 Laptop</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>ประเภท</th><th>การใช้งาน</th><th>ตัวอย่าง</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">Convertible 360°</span></td><td>หมุนจอ 360° เป็น Tent/Tablet/Stand mode</td><td>HP Spectre x360, Dell XPS 13 2-in-1</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">Detachable</span></td><td>ถอดจอออกใช้เป็น Tablet ได้</td><td>MS Surface Pro, Lenovo IdeaPad Duet</td></tr>'+
    '</table></div>'+
    '<div class="use-box"><div class="use-lbl">Stylus / Pen รองรับ</div><div class="use-val">'+
    'MPP (Microsoft Pen Protocol) — Surface Slim Pen 2 · USI 2.0 — Chromebook · Wacom AES — ASUS/Lenovo · Apple Pencil — iPad (ไม่ใช่ Windows) · Pressure level 4096 = มาตรฐานสำหรับ drawing/note'+
    '</div></div>'+

    '<div class="section-label" style="padding-left:0;margin-top:4px">🏗️ Rugged / Semi-Rugged</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">MIL-STD-810H</div><div class="spec-val">ทน drop, vibration, humidity, dust, temperature</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">IP Rating</div><div class="spec-val">IP65/IP67 — กันน้ำ กันฝุ่น</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Sunlight readable</div><div class="spec-val">จอ 1000 nits+ อ่านกลางแจ้งได้</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">ใช้กับ</div><div class="spec-val">Field service, Oil&Gas, Military, Logistics, Hospital</div></div>'+
    '</div>'+
    '<div class="chip-wrap"><span class="chip">Panasonic Toughbook</span><span class="chip">Dell Latitude Rugged</span><span class="chip">Getac B360</span><span class="chip">Zebra ET Series</span></div>'+

    '<div class="section-label" style="padding-left:0;margin-top:4px">📚 Chromebook</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">OS</div><div class="spec-val">Chrome OS (Linux-based, Google)</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">จุดเด่น</div><div class="spec-val">ราคาถูก boot เร็ว ใช้งาน web-based</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">จุดด้อย</div><div class="spec-val">ไม่รัน Windows app ต้องใช้ Cloud หรือ Web app</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">เหมาะกับ</div><div class="spec-val">Education, Firstline worker, Web-only task</div></div>'+
    '</div>'+

    '<div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">'+
    'Business Laptop ถามลูกค้าว่า: (1) ต้องการ vPro remote management ไหม? (2) ต้องการ ECC ไหม? (3) ISV certified ไหม? · Gaming Laptop ขาย upsell ไปหา Mobile WS ได้ ถ้าลูกค้าใช้ 3D/CAD · Rugged มี margin สูงกว่า standard laptop มาก · ThinkPad keyboard ยังคือ best-in-class สำหรับ type-heavy user'+
    '</div></div>';
  }},
  'vm-what':{t:'VM คืออะไร? ทำไมองค์กรต้องใช้?',s:'Virtual Machine — พื้นฐานที่ทุกคนในวงการ IT ต้องรู้',body:function(){
    return '<figure class="sheet-figure"><img src="assets/img/infra-overview.svg" alt="Infrastructure diagram"><figcaption>ภาพรวมสำหรับการคุยกับลูกค้า: ผู้ใช้และแอปจำนวนมากสามารถวิ่งอยู่บน virtualization cluster เดียว โดยมี shared storage, backup และ monitoring รองรับ</figcaption></figure>'+'<div class="use-box"><div class="use-lbl">VM คืออะไร?</div><div class="use-val">'+
    'Virtual Machine (VM) คือ <strong>"คอมพิวเตอร์เสมือน"</strong> ที่ถูกสร้างขึ้นโดยซอฟต์แวร์บน Server จริงเครื่องเดียว เปรียบได้กับการแบ่งบ้านหลังใหญ่หลังเดียวออกเป็นหลายห้องเช่า — แต่ละห้องมี CPU, RAM, Storage ของตัวเอง และแต่ละ VM ไม่รู้จักกัน ทำงานเป็นอิสระ</div></div>'+
    '<div class="section-label" style="padding-left:0">ทำไมองค์กรถึงใช้ VM?</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>ปัญหาเดิม (ไม่มี VM)</th><th>ประโยชน์ที่ได้ (มี VM)</th></tr>'+
    '<tr><td>Server 1 เครื่อง = 1 OS = 1 แอป</td><td>Server 1 เครื่อง = VM 20+ ตัว</td></tr>'+
    '<tr><td>CPU/RAM ถูกใช้งานแค่ 5–10%</td><td>ใช้ทรัพยากรได้ 70–80%</td></tr>'+
    '<tr><td>จะย้าย Server ต้องดาวน์</td><td>Live Migration ย้ายได้ไม่ดับเครื่อง</td></tr>'+
    '<tr><td>Server พัง ระบบล่มทั้งหมด</td><td>HA Auto-failover ย้าย VM อัตโนมัติ</td></tr>'+
    '<tr><td>Backup ยาก ใช้เวลานาน</td><td>Snapshot VM ได้ใน 1 นาที</td></tr>'+
    '<tr><td>ทดสอบบน Server Production</td><td>Clone VM สร้าง Dev/Test แยก</td></tr>'+
    '</table></div>'+
    '<div class="section-label" style="padding-left:0">VM ใช้ทำอะไรในองค์กร?</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">🗄️ File Server</div><div class="spec-val">Windows Server + Shared Drive สำหรับพนักงาน</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">📧 Email Server</div><div class="spec-val">MS Exchange / Zimbra รับ-ส่งอีเมลองค์กร</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">🌐 Web Server</div><div class="spec-val">IIS / Apache / NGINX รัน website บริษัท</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">🗃️ Database</div><div class="spec-val">MS SQL / Oracle / MySQL แยก VM ต่างหาก</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">🔐 Domain Controller</div><div class="spec-val">Active Directory จัดการ user login ทั้งบริษัท</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">💻 VDI / Remote Desktop</div><div class="spec-val">พนักงาน WFH ต่อเข้า Virtual Desktop</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">🧪 Dev / Test</div><div class="spec-val">นักพัฒนาทดสอบ app บน VM แยก</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">🔒 Security / FW</div><div class="spec-val">Virtual Firewall / IDS รันเป็น VM</div></div>'+
    '</div>'+
    '<div class="section-label" style="padding-left:0;margin-top:4px">เปรียบเทียบ Physical vs Virtual</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th></th><th>Physical Server</th><th>Virtual Machine</th></tr>'+
    '<tr><td>ความเร็ว deploy</td><td>สัปดาห์ (จัดซื้อ)</td><td>นาที (clone)</td></tr>'+
    '<tr><td>ต้นทุน</td><td>สูง (hardware per app)</td><td>ต่ำกว่า (share hardware)</td></tr>'+
    '<tr><td>การใช้ทรัพยากร</td><td>5–15%</td><td>60–80%</td></tr>'+
    '<tr><td>Backup/Recovery</td><td>ยาก ช้า</td><td>Snapshot นาที</td></tr>'+
    '<tr><td>HA / Failover</td><td>ต้องซื้อ hardware เพิ่ม</td><td>Built-in ใน hypervisor</td></tr>'+
    '<tr><td>เหมาะกับ</td><td>DB I/O สูง, Bare-metal performance</td><td>แอปทั่วไป, Dev/Test, VDI</td></tr>'+
    '</table></div>'+
    '<div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">'+
    'ลูกค้าที่ยัง run แอปแยก Physical ทุกตัว = โอกาสขาย Virtualization ชัดเจน · ROI ชัดเจน: Server 1 เครื่อง แทน 10–20 physical server เก่า · จุดขายหลัก: ลดค่า hardware, ลดค่าไฟ, เพิ่ม agility'+
    '</div></div>';
  }},
  'vm-license':{t:'Windows Server Licensing',s:'Standard · Datacenter · CAL · Core · CSP · SA',body:function(){
    return '<div class="section-label" style="padding-left:0">Edition เปรียบเทียบ</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Edition</th><th>VM ที่รวมอยู่</th><th>เหมาะกับ</th><th>ราคาโดยประมาณ</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">Essentials</span></td><td>ไม่รองรับ VM (bare-metal)</td><td>SMB ≤25 user ไม่มี VM</td><td>~15,000฿</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">Standard</span></td><td>2 VM per license</td><td>Server ทั่วไป VM น้อย</td><td>~50,000฿/16-core</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">Datacenter</span></td><td>Unlimited VM</td><td>Virtualization เต็มรูปแบบ</td><td>~200,000฿/16-core</td></tr>'+
    '</table></div>'+
    '<div class="section-label" style="padding-left:0">Core-based Licensing</div>'+
    '<div class="use-box"><div class="use-lbl">หลักการ</div><div class="use-val">'+
    'Windows Server 2022 ขาย <strong>per 2-core pack</strong> (minimum 16 cores/server)<br>'+
    'ตัวอย่าง: Server มี 32 core → ต้องซื้อ 32÷2 = 16 packs = 2 Standard License<br>'+
    'Standard 2 License = 2 VM เท่านั้น → ถ้าต้องการ 4 VM ต้องซื้อ 4 Standard<br>'+
    '<strong>เมื่อ VM มาก → Datacenter คุ้มกว่าเสมอ (ตั้งแต่ 4–5 VM ขึ้นไป)</strong>'+
    '</div></div>'+
    '<div class="section-label" style="padding-left:0">CAL — Client Access License</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>ประเภท CAL</th><th>ขอบเขต</th><th>เหมาะกับ</th></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">User CAL</span></td><td>1 user ต่อได้ทุก device</td><td>User ใช้หลายเครื่อง (WFH)</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">Device CAL</span></td><td>1 device หลาย user ใช้ได้</td><td>PC Kiosk, Shift work</td></tr>'+
    '<tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">RDS CAL</span></td><td>Remote Desktop Services</td><td>VDI / Remote Desktop</td></tr>'+
    '</table></div>'+
    '<div class="section-label" style="padding-left:0">Licensing Models</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">Perpetual (Perpetual)</div><div class="spec-val">ซื้อครั้งเดียว ใช้ได้ตลอด ไม่มี update ใหม่</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">SA (Software Assurance)</div><div class="spec-val">ต่ออายุ 3 ปี รับ version ใหม่ได้</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">CSP (Cloud Solution Provider)</div><div class="spec-val">Subscription รายเดือน/ปี ยืดหยุ่น</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">OEM</div><div class="spec-val">ติดกับ hardware ย้ายไม่ได้</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Volume (EA/Open)</div><div class="spec-val">Enterprise Agreement สำหรับ 250+ user</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Azure Hybrid Benefit</div><div class="spec-val">มี SA → ใช้ license บน Azure ได้</div></div>'+
    '</div>'+
    '<div class="section-label" style="padding-left:0;margin-top:4px">License ที่เกี่ยวข้องกับ Virtualization</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Product</th><th>License</th><th>หมายเหตุ</th></tr>'+
    '<tr><td>VMware vSphere Std</td><td>Per CPU socket</td><td>Post-Broadcom: เปลี่ยนเป็น VCF subscription</td></tr>'+
    '<tr><td>VMware vCenter</td><td>Per vCenter instance</td><td>รวมใน VCF แล้ว</td></tr>'+
    '<tr><td>Hyper-V</td><td>ฟรี ใน Windows Server</td><td>จำนวน VM ขึ้นกับ WS edition</td></tr>'+
    '<tr><td>Proxmox VE</td><td>Free / Subscription support</td><td>OSS ไม่มีค่า license</td></tr>'+
    '<tr><td>Nutanix AOS</td><td>Per node (subscription)</td><td>รวม AHV hypervisor</td></tr>'+
    '<tr><td>Microsoft SQL Server</td><td>Per core / Server+CAL</td><td>บน VM: ต้องนับ core ของ host</td></tr>'+
    '</table></div>'+
    '<div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">'+
    'Standard vs Datacenter break-even ที่ประมาณ 4–5 VM บน server เดียว · ลูกค้าที่มี perpetual WS+SA สามารถ use Azure Hybrid Benefit ลดค่าใช้จ่าย Azure ได้ชัดเจน · CSP เหมาะ SMB ที่ไม่อยากซื้อ perpetual license ราคาแพง'+
    '</div></div>';
  }},
  'vm-sizing':{t:'VM Sizing & Infrastructure Design',s:'vCPU · vRAM · Storage · HA · Cluster design',body:function(){
    return '<div class="section-label" style="padding-left:0">Overcommit Ratio — หลักการ</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>Resource</th><th>Safe Ratio</th><th>Maximum</th><th>หมายเหตุ</th></tr>'+
    '<tr><td>vCPU : pCPU</td><td>4:1</td><td>8:1</td><td>Mixed workload, ไม่ CPU-heavy ตลอดเวลา</td></tr>'+
    '<tr><td>vRAM : pRAM</td><td>1:1 (ไม่ควร overcommit)</td><td>1.2:1</td><td>RAM overcommit ทำให้ swap → ช้ามาก</td></tr>'+
    '<tr><td>vStorage (thin)</td><td>2:1</td><td>3:1</td><td>Thin provision ประหยัด แต่ต้อง monitor</td></tr>'+
    '</table></div>'+
    '<div class="section-label" style="padding-left:0">Sizing Formula</div>'+
    '<div class="use-box"><div class="use-lbl">ตัวอย่างการ Size Cluster (50 VM)</div><div class="use-val">'+
    '<strong>ต้องการ:</strong> VM 50 ตัว เฉลี่ย vCPU 4, RAM 16GB, Disk 200GB<br>'+
    '<strong>vCPU total:</strong> 50 × 4 = 200 vCPU ÷ ratio 4:1 = 50 pCPU<br>'+
    '<strong>RAM total:</strong> 50 × 16GB = 800GB RAM (ไม่ overcommit)<br>'+
    '<strong>Storage:</strong> 50 × 200GB = 10TB (thin) เผื่อ × 1.3 = 13TB<br>'+
    '<strong>HA N+1:</strong> ต้องทนสูญเสีย 1 node → แต่ละ node แบกได้ 100% workload<br>'+
    '<strong>ผลลัพธ์:</strong> 3 node × 18 pCPU × 300GB RAM / node (เผื่อ N+1)'+
    '</div></div>'+
    '<div class="section-label" style="padding-left:0">HA Design Patterns</div>'+
    '<div class="spec-grid">'+
    '<div class="spec-card"><div class="spec-lbl">N+1 (HA พื้นฐาน)</div><div class="spec-val">3 node → ทน 1 node fail, workload ย้ายไป 2 node ที่เหลือ</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">N+2 (High Availability)</div><div class="spec-val">4 node → ทน 2 node fail พร้อมกัน</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">Stretched Cluster</div><div class="spec-val">ข้าม 2 Data center, Metro distance ≤100km</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">DRS Auto-balance</div><div class="spec-val">VMware DRS ย้าย VM ไปหา node ที่ว่างอัตโนมัติ</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">vMotion / Live Migration</div><div class="spec-val">ย้าย VM ระหว่าง node ไม่ดับ — ต้องการ shared storage</div></div>'+
    '<div class="spec-card"><div class="spec-lbl">FT (Fault Tolerance)</div><div class="spec-val">VM shadow mirror real-time — 0 downtime แม้ node fail</div></div>'+
    '</div>'+
    '<div class="section-label" style="padding-left:0;margin-top:4px">Storage สำหรับ VM</div>'+
    '<div class="table-wrap" style="margin:0 0 12px"><table>'+
    '<tr><th>ประเภท</th><th>Protocol</th><th>เหมาะกับ</th><th>ข้อดี/ข้อเสีย</th></tr>'+
    '<tr><td>SAN FC</td><td>Fibre Channel</td><td>Enterprise DB, Mission Critical</td><td>Fast/Expensive</td></tr>'+
    '<tr><td>SAN iSCSI</td><td>TCP/IP</td><td>VM shared storage SMB-Enterprise</td><td>ถูกกว่า FC ยังดี</td></tr>'+
    '<tr><td>NFS</td><td>TCP/IP</td><td>VM datastore (VMware/KVM)</td><td>ง่าย config / latency สูงกว่า block</td></tr>'+
    '<tr><td>HCI (vSAN/Nutanix)</td><td>Internal cluster</td><td>Hyperconverged ไม่ต้องการ SAN</td><td>Scale-out ง่าย / ราคาเริ่มสูง</td></tr>'+
    '</table></div>'+
    '<div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">'+
    'RAM ห้าม overcommit เด็ดขาดสำหรับ production — swap ทำให้ทุก VM ช้าลง · HCI (vSAN/Nutanix) เหมาะลูกค้าที่อยากลดความซับซ้อนของ SAN · Minimum cluster 3 node เสมอ — 2 node ทำ HA ไม่ได้จริง'+
    '</div></div>';
  }},
  'vm-concept':{t:'Hypervisor & VM Architecture',s:'Type 1 vs Type 2 · vCPU · vRAM · Snapshot',body:function(){return '<figure class="sheet-figure"><img src="assets/img/infra-overview.svg" alt="VM architecture diagram"><figcaption>Host ที่ดีต้องแยก management, storage และ VM traffic ให้ชัด และต้องมี monitoring เพื่อดู contention ของ CPU, RAM และ datastore</figcaption></figure>'+'<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Type 1 — Bare-metal</div><div class="spec-val">รันตรงบน hardware ไม่มี Host OS</div></div><div class="spec-card"><div class="spec-lbl">Type 2 — Hosted</div><div class="spec-val">รันบน OS host เช่น VirtualBox บน Windows</div></div><div class="spec-card"><div class="spec-lbl">vCPU</div><div class="spec-val">Virtual CPU จาก physical core</div></div><div class="spec-card"><div class="spec-lbl">vRAM</div><div class="spec-val">Allocated RAM ต่อ VM</div></div><div class="spec-card"><div class="spec-lbl">vDisk</div><div class="spec-val">VMDK / VHD / QCOW2 file</div></div><div class="spec-card"><div class="spec-lbl">vNIC</div><div class="spec-val">Virtual Network Interface Card</div></div><div class="spec-card"><div class="spec-lbl">Live Migration</div><div class="spec-val">ย้าย VM ข้าม host ไม่ดับเครื่อง</div></div><div class="spec-card"><div class="spec-lbl">Snapshot</div><div class="spec-val">บันทึก state VM ณ จุดใดจุดหนึ่ง</div></div><div class="spec-card"><div class="spec-lbl">Overcommit vCPU</div><div class="spec-val">vCPU > pCPU (4:1 safe ratio)</div></div><div class="spec-card"><div class="spec-lbl">Thin Provision</div><div class="spec-val">disk โต lazily ประหยัด space</div></div></div><div class="use-box"><div class="use-lbl">Type 1 — Production</div><div class="use-val">ESXi (VMware) · Hyper-V (Microsoft) · KVM/Proxmox (Linux) · Nutanix AHV · XCP-ng</div></div><div class="use-box"><div class="use-lbl">Type 2 — Dev/Test/Lab</div><div class="use-val">VirtualBox (Oracle, ฟรี) · VMware Workstation/Fusion · Parallels (Mac)</div></div><div class="note-box">ข้อแตกต่างสำคัญ: Type 1 hypervisor มี performance ดีกว่า Type 2 เพราะไม่มี Host OS คั่นกลาง overhead น้อยกว่า 2–5%</div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">Production ใช้ Type 1 เสมอ · Type 2 เหมาะ test/dev เท่านั้น · vCPU Overcommit 4:1 ปลอดภัยสำหรับ mixed workload · RAM ไม่ควร overcommit — ทำให้เกิด balloon/swap ช้ามาก</div></div>';}},
  'vmware':{t:'VMware vSphere',s:'ESXi + vCenter + vSAN + NSX-T',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Hypervisor</div><div class="spec-val">ESXi (Type 1)</div></div><div class="spec-card"><div class="spec-lbl">Management</div><div class="spec-val">vCenter Server</div></div><div class="spec-card"><div class="spec-lbl">Storage HCI</div><div class="spec-val">vSAN (Flash/HDD)</div></div><div class="spec-card"><div class="spec-lbl">Network SDN</div><div class="spec-val">NSX-T micro-seg</div></div><div class="spec-card"><div class="spec-lbl">HA/DRS/FT</div><div class="spec-val">Auto failover+balance</div></div><div class="spec-card"><div class="spec-lbl">Migration</div><div class="spec-val">vMotion zero downtime</div></div></div><div class="chip-wrap"><span class="chip">VCF bundle</span><span class="chip">Tanzu K8s</span><span class="chip">Aria Monitor</span><span class="chip">Horizon VDI</span></div><div class="use-box" style="margin-top:10px"><div class="use-lbl">⚠️ ข้อควรระวัง</div><div class="use-val">หลัง Broadcom เข้าซื้อ เปลี่ยนเป็น subscription ราคาสูงขึ้น 3–5× หลายองค์กรพิจารณาย้ายไป Hyper-V, Proxmox, Nutanix</div></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">VCF bundle ทุก product — ต้องเปรียบ TCO กับ Hyper-V+Azure Stack HCI · ลูกค้า VMware เก่าอาจต้องการ migration path</div><div class="use-box" style="margin-top:10px"><div class="use-lbl">Engineer checklist</div><div class="use-val">ตรวจ compatiblity ของ HCL, firmware, NIC/HBA driver, storage multipath และ version alignment ของ ESXi/vCenter/vSAN ก่อน go-live ทุกครั้ง</div></div></div>';}},
  'hyperv':{t:'Microsoft Hyper-V',s:'Windows Server 2022 · Azure Stack HCI',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Hypervisor</div><div class="spec-val">Hyper-V (Type 1)</div></div><div class="spec-card"><div class="spec-lbl">Management</div><div class="spec-val">WAC / SCVMM</div></div><div class="spec-card"><div class="spec-lbl">Cluster</div><div class="spec-val">Windows Failover Cluster</div></div><div class="spec-card"><div class="spec-lbl">Storage</div><div class="spec-val">S2D (Storage Spaces Direct)</div></div><div class="spec-card"><div class="spec-lbl">License</div><div class="spec-val">รวมใน Windows Server</div></div><div class="spec-card"><div class="spec-lbl">Cloud hybrid</div><div class="spec-val">Azure Arc integration</div></div></div><div class="chip-wrap"><span class="chip">Azure Stack HCI 23H2</span><span class="chip">Azure Arc</span><span class="chip">Windows Admin Center</span></div><div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">ฟรีกับ Windows Server License — เหมาะองค์กร Microsoft ecosystem · ประหยัดค่า VMware ได้ชัดเจน · Azure Stack HCI รองรับ hybrid cloud ดี</div></div>';}},
  'kvm':{t:'KVM / Proxmox / OpenStack',s:'Open source — Linux native hypervisor',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Hypervisor</div><div class="spec-val">KVM (Linux kernel)</div></div><div class="spec-card"><div class="spec-lbl">GUI</div><div class="spec-val">Proxmox VE (web UI)</div></div><div class="spec-card"><div class="spec-lbl">Storage</div><div class="spec-val">Ceph / NFS / ZFS</div></div><div class="spec-card"><div class="spec-lbl">Container</div><div class="spec-val">LXC + KVM mixed</div></div><div class="spec-card"><div class="spec-lbl">Network</div><div class="spec-val">OVS / Linux bridge</div></div><div class="spec-card"><div class="spec-lbl">License</div><div class="spec-val">Open source ฟรี</div></div></div><div class="chip-wrap"><span class="chip">Proxmox VE 8</span><span class="chip">oVirt</span><span class="chip">OpenStack</span><span class="chip">RHEV/RHVH</span></div><div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">KVM = Hypervisor หลักของ AWS/GCP · ต้องการ Admin Linux ทักษะสูง · Proxmox เหมาะ SMB/Tech company ที่ต้องการ OSS alternative ต้นทุนต่ำ</div></div>';}},
  'k8s':{t:'Container & Kubernetes',s:'Docker · K8s · Helm · EKS/AKS/GKE',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Container Runtime</div><div class="spec-val">Docker / containerd</div></div><div class="spec-card"><div class="spec-lbl">Orchestration</div><div class="spec-val">Kubernetes (K8s)</div></div><div class="spec-card"><div class="spec-lbl">Service mesh</div><div class="spec-val">Istio / Linkerd</div></div><div class="spec-card"><div class="spec-lbl">Registry</div><div class="spec-val">Harbor / ECR / ACR</div></div><div class="spec-card"><div class="spec-lbl">Managed K8s</div><div class="spec-val">EKS / AKS / GKE</div></div><div class="spec-card"><div class="spec-lbl">GitOps</div><div class="spec-val">ArgoCD / Flux</div></div></div><div class="chip-wrap"><span class="chip">Helm chart</span><span class="chip">Prometheus</span><span class="chip">Grafana</span><span class="chip">Calico CNI</span><span class="chip">Rancher</span></div><div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">ขาย Managed K8s (EKS/AKS/GKE) เมื่อลูกค้าไม่ต้องการดูแล control plane — เพิ่ม SLA ลด ops overhead · K8s ต้องการ persistent storage solution ด้วย (EBS/AzureDisk/Ceph)</div></div>';}},
  'cicd':{t:'CI/CD & DevOps',s:'Pipeline automation · GitOps · IaC',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">CI</div><div class="spec-val">Build + Test อัตโนมัติ</div></div><div class="spec-card"><div class="spec-lbl">CD</div><div class="spec-val">Deploy อัตโนมัติ</div></div><div class="spec-card"><div class="spec-lbl">GitOps</div><div class="spec-val">Git = Single source of truth</div></div><div class="spec-card"><div class="spec-lbl">IaC</div><div class="spec-val">Terraform / Ansible</div></div></div><div class="chip-wrap"><span class="chip">Jenkins</span><span class="chip">GitHub Actions</span><span class="chip">GitLab CI</span><span class="chip">ArgoCD</span><span class="chip">Terraform</span><span class="chip">Ansible</span><span class="chip">SonarQube</span></div><div class="use-box" style="margin-top:10px"><div class="use-lbl">Pipeline Stages</div><div class="use-val">Code → Build → Unit Test → SAST → Container Build → Push Registry → Deploy Staging → Integration Test → Deploy Prod</div></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">ขาย GitLab CI/CD ให้ลูกค้าที่ต้องการ All-in-one (Git+CI+Registry+Security scan) · GitHub Actions เหมาะ cloud-native startup</div></div>';}},
  'osi':{t:'OSI Model — 7 Layers',s:'Reference model สำหรับ network protocol',body:function(){return '<figure class="sheet-figure"><img src="assets/img/network-overview.svg" alt="Network diagram"><figcaption>เวลาคุยหน้างาน ให้เริ่มจากปัญหาของผู้ใช้ก่อน แล้วค่อยไล่ลงว่าอยู่ที่ L1, L2, L3 หรือ L7 เพื่อแยกวง troubleshoot ให้แคบลง</figcaption></figure>'+'<div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Layer</th><th>ชื่อ</th><th>Protocol / Device</th></tr><tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">L7</span></td><td>Application</td><td>HTTP/S, SMTP, DNS, FTP</td></tr><tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">L6</span></td><td>Presentation</td><td>SSL/TLS, encoding, JPEG</td></tr><tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">L5</span></td><td>Session</td><td>Session mgmt, RPC, SOCKS</td></tr><tr><td><span class="bx" style="background:var(--amber-bg);color:var(--amber-text)">L4</span></td><td>Transport</td><td>TCP · UDP · QUIC (Port-based)</td></tr><tr><td><span class="bx" style="background:var(--green-bg);color:var(--green-text)">L3</span></td><td>Network</td><td>IP · OSPF · BGP · Router</td></tr><tr><td><span class="bx" style="background:var(--intel-bg);color:var(--intel-text)">L2</span></td><td>Data Link</td><td>Ethernet · MAC · Switch</td></tr><tr><td><span class="bx" style="background:var(--badge-neutral);color:var(--badge-neutral-text)">L1</span></td><td>Physical</td><td>Cable · Fiber · SFP · Radio</td></tr></table></div><div class="use-box"><div class="use-lbl">จำง่าย (L7→L1)</div><div class="use-val">"All People Seem To Need Data Processing" — Application · Presentation · Session · Transport · Network · Data Link · Physical</div></div>';}},
  'l2':{t:'L2 — Switching',s:'MAC address · VLAN · STP · LACP',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Address Unit</div><div class="spec-val">MAC Address (48-bit)</div></div><div class="spec-card"><div class="spec-lbl">VLAN</div><div class="spec-val">802.1Q trunk/access</div></div><div class="spec-card"><div class="spec-lbl">Loop prevention</div><div class="spec-val">STP / RSTP / MSTP</div></div><div class="spec-card"><div class="spec-lbl">Link aggregation</div><div class="spec-val">LACP 802.3ad (LAG)</div></div><div class="spec-card"><div class="spec-lbl">Uplink speed</div><div class="spec-val">10/25/100 GbE SFP+</div></div><div class="spec-card"><div class="spec-lbl">Port security</div><div class="spec-val">802.1X NAC / MAB</div></div></div><div class="chip-wrap"><span class="chip">Cisco Catalyst</span><span class="chip">Aruba CX</span><span class="chip">Juniper EX</span><span class="chip">Huawei CloudEngine</span></div><div class="use-box" style="margin-top:10px"><div class="use-lbl">L2 Principle</div><div class="use-val">L2 ทำงานใน broadcast domain เดียว — ข้าม VLAN ต้องผ่าน L3 router หรือ SVI บน L3 Switch · ควรมี RSTP เสมอเพื่อป้องกัน loop</div></div>';}},
  'l3':{t:'L3 — Routing',s:'IP routing · OSPF · BGP · VRF',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Address Unit</div><div class="spec-val">IP Address (32/128-bit)</div></div><div class="spec-card"><div class="spec-lbl">IGP (Internal)</div><div class="spec-val">OSPF / EIGRP / IS-IS</div></div><div class="spec-card"><div class="spec-lbl">EGP (External)</div><div class="spec-val">BGP (inter-AS/ISP)</div></div><div class="spec-card"><div class="spec-lbl">Subnet</div><div class="spec-val">CIDR /24 /16 /8</div></div><div class="spec-card"><div class="spec-lbl">Multi-tenant</div><div class="spec-val">VRF routing table</div></div><div class="spec-card"><div class="spec-lbl">QoS</div><div class="spec-val">DSCP marking / CoS</div></div></div><div class="chip-wrap"><span class="chip">Static route</span><span class="chip">OSPF area 0</span><span class="chip">BGP AS path</span><span class="chip">ECMP 4-way</span></div><div class="use-box" style="margin-top:10px"><div class="use-lbl">L3 Switch vs Router</div><div class="use-val">L3 Switch ทำ inter-VLAN routing ด้วย SVI — เร็วกว่า router-on-a-stick เหมาะ DC core · Router เหมาะ WAN edge และ routing protocol complex</div></div>';}},
  'l4lb':{t:'Load Balancer L4 / L7',s:'TCP/UDP · SSL offload · WAF',body:function(){return '<div class="table-wrap" style="margin:0 0 12px"><table><tr><th></th><th>L4 LB</th><th>L7 LB</th></tr><tr><td>เห็น</td><td>IP + Port</td><td>HTTP header/URL/cookie</td></tr><tr><td>Speed</td><td>Line rate</td><td>ช้ากว่า (inspect)</td></tr><tr><td>Feature</td><td>IP stickiness</td><td>WAF, rate-limit, path route</td></tr><tr><td>SSL</td><td>Passthrough</td><td>Terminate + re-encrypt</td></tr><tr><td>ตัวอย่าง</td><td>HAProxy TCP</td><td>NGINX, F5 BIG-IP, Traefik</td></tr></table></div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Algorithm</div><div class="spec-val">Round-robin / Least-conn</div></div><div class="spec-card"><div class="spec-lbl">Health check</div><div class="spec-val">TCP probe / HTTP 200</div></div><div class="spec-card"><div class="spec-lbl">SSL offload</div><div class="spec-val">TLS terminate ที่ LB</div></div><div class="spec-card"><div class="spec-lbl">Sticky session</div><div class="spec-val">Cookie / IP Hash</div></div></div><div class="chip-wrap"><span class="chip">NGINX Plus</span><span class="chip">HAProxy Enterprise</span><span class="chip">F5 BIG-IP</span><span class="chip">AWS ALB/NLB</span></div>';}},
  'sdwan':{t:'SD-WAN / SASE',s:'Modern WAN — Overlay + ZT + SWG',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">MPLS</div><div class="spec-val">Dedicated leased line</div></div><div class="spec-card"><div class="spec-lbl">SD-WAN</div><div class="spec-val">Overlay บน broadband</div></div><div class="spec-card"><div class="spec-lbl">SASE</div><div class="spec-val">SD-WAN+ZT+SWG bundle</div></div><div class="spec-card"><div class="spec-lbl">ZTNA</div><div class="spec-val">Zero Trust Network Access</div></div><div class="spec-card"><div class="spec-lbl">SWG</div><div class="spec-val">Secure Web Gateway</div></div><div class="spec-card"><div class="spec-lbl">CASB</div><div class="spec-val">Cloud Access Security Broker</div></div></div><div class="chip-wrap"><span class="chip">Cisco Viptela</span><span class="chip">VMware SASE</span><span class="chip">Zscaler ZIA/ZPA</span><span class="chip">Palo Alto Prisma</span><span class="chip">Fortinet FortiSASE</span></div><div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">SD-WAN ประหยัดกว่า MPLS 40–60% แต่ QoS ขึ้นกับ internet quality · SASE เหมาะลูกค้า WFH+Multi-branch ที่ต้องการ security รวมใน WAN</div><div class="use-box" style="margin-top:10px"><div class="use-lbl">Sales angle</div><div class="use-val">SD-WAN ขายง่ายเมื่อองค์กรมีหลายสาขาและมีปัญหาเรื่อง policy ไม่เหมือนกัน, circuit ราคาแพง หรือ troubleshooting ช้าเพราะไม่มี dashboard กลาง</div></div></div>';}},
  'wifi6':{t:'Wi-Fi 6 / Wi-Fi 7',s:'802.11ax · 802.11be · WPA3 · MU-MIMO',body:function(){return '<div class="table-wrap" style="margin:0 0 12px"><table><tr><th></th><th>Wi-Fi 6 (ax)</th><th>Wi-Fi 7 (be)</th></tr><tr><td>Max speed</td><td>9.6 Gbps</td><td>46 Gbps</td></tr><tr><td>Bands</td><td>2.4/5 GHz</td><td>2.4/5/6 GHz</td></tr><tr><td>Channel BW</td><td>160 MHz</td><td>320 MHz (6GHz)</td></tr><tr><td>MU-MIMO</td><td>8×8</td><td>16×16</td></tr><tr><td>MLO</td><td>ไม่มี</td><td>Multi-Link Operation</td></tr><tr><td>Latency</td><td>ต่ำ</td><td>ต่ำมาก (&lt;1ms MLO)</td></tr></table></div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">WPA3-SAE</div><div class="spec-val">Enterprise security</div></div><div class="spec-card"><div class="spec-lbl">OFDMA</div><div class="spec-val">Multi-user efficiency</div></div><div class="spec-card"><div class="spec-lbl">BSS Color</div><div class="spec-val">ลด co-channel interference</div></div><div class="spec-card"><div class="spec-lbl">Target Wake Time</div><div class="spec-val">IoT battery saving</div></div></div><div class="chip-wrap"><span class="chip">Cisco Meraki</span><span class="chip">Aruba Wi-Fi 7</span><span class="chip">Ruckus</span><span class="chip">Ubiquiti UniFi</span></div><div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">Wi-Fi 7 เหมาะ dense environment (Conference center, Hospital) · MLO ช่วย roaming seamless · WPA3 จำเป็นสำหรับ enterprise compliance</div></div>';}},
  'vpc':{t:'VPC & Subnet Architecture',s:'Virtual Private Cloud — 3-tier design',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">VPC</div><div class="spec-val">Isolated virtual network</div></div><div class="spec-card"><div class="spec-lbl">Subnet tier</div><div class="spec-val">Public / Private / Data</div></div><div class="spec-card"><div class="spec-lbl">Internet GW</div><div class="spec-val">IGW (outbound)</div></div><div class="spec-card"><div class="spec-lbl">NAT Gateway</div><div class="spec-val">Private → Internet (1-way)</div></div><div class="spec-card"><div class="spec-lbl">Firewall</div><div class="spec-val">SG (instance) + NACL</div></div><div class="spec-card"><div class="spec-lbl">Peering</div><div class="spec-val">VPC Peering / Transit GW</div></div></div><div class="chip-wrap"><span class="chip">AWS VPC</span><span class="chip">Azure VNet</span><span class="chip">GCP VPC</span></div><div class="use-box" style="margin-top:10px"><div class="use-lbl">Best Practice — 3-tier</div><div class="use-val">Public subnet → ALB/NLB · Private subnet → App server · Data subnet → DB (RDS/Aurora) · แต่ละ tier แยก Security Group</div></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">Transit Gateway เหมาะเมื่อมีหลาย VPC+On-prem · VPC Endpoint ลด data transfer cost สำหรับ S3/DynamoDB · Flow Logs จำเป็นสำหรับ compliance</div></div>';}},
  'cloudlb':{t:'Cloud LB & CDN',s:'ALB · NLB · CloudFront · WAF · DDoS',body:function(){return '<div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Service</th><th>Layer</th><th>เหมาะกับ</th></tr><tr><td>AWS ALB</td><td>L7</td><td>HTTP path routing / microservice</td></tr><tr><td>AWS NLB</td><td>L4</td><td>High throughput / Static IP</td></tr><tr><td>AWS GLB</td><td>L3</td><td>3rd party appliance (NGFW)</td></tr><tr><td>Azure App GW v2</td><td>L7</td><td>WAF + SSL offload</td></tr><tr><td>Azure Front Door</td><td>Global L7</td><td>Multi-region + WAF + CDN</td></tr><tr><td>CloudFront</td><td>CDN</td><td>Static global delivery</td></tr></table></div><div class="chip-wrap"><span class="chip">Cloudflare</span><span class="chip">Akamai</span><span class="chip">AWS WAF</span><span class="chip">AWS Shield Advanced</span><span class="chip">Kong API GW</span></div><div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">AWS Shield Advanced = $3000/เดือน แต่รวม DDoS Protection + 24/7 DRT team · Cloudflare Magic Transit เหมาะ enterprise ที่มี public IP range ของตัวเอง</div></div>';}},
  'svcmodel':{t:'Cloud Service Model',s:'IaaS vs PaaS vs SaaS vs FaaS',body:function(){return '<div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Model</th><th>คุณดูแล</th><th>ตัวอย่าง</th></tr><tr><td><span class="bx" style="background:var(--purple-bg);color:var(--purple-text)">IaaS</span></td><td>OS, Runtime, App, Data</td><td>EC2, Azure VM, GCP CE</td></tr><tr><td><span class="bx" style="background:var(--purple-bg);color:var(--purple-text)">PaaS</span></td><td>App, Data</td><td>RDS, App Service, Cloud Run</td></tr><tr><td><span class="bx" style="background:var(--purple-bg);color:var(--purple-text)">SaaS</span></td><td>Config + Usage</td><td>M365, Salesforce, Workday</td></tr><tr><td><span class="bx" style="background:var(--purple-bg);color:var(--purple-text)">FaaS</span></td><td>Code only</td><td>Lambda, Azure Functions, GCF</td></tr><tr><td><span class="bx" style="background:var(--purple-bg);color:var(--purple-text)">CaaS</span></td><td>Container + Config</td><td>EKS, AKS, GKE</td></tr></table></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">ยิ่ง SaaS ยิ่ง operate ง่าย แต่ customize น้อย · IaaS flexible สุดแต่ต้องการ Admin สูง · เลือกตาม skill ทีมและ maturity ของ IT ลูกค้า</div></div>';}},
  'connectivity':{t:'Cloud Connectivity',s:'Direct Connect · ExpressRoute · VPN',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">AWS</div><div class="spec-val">Direct Connect (DX)</div></div><div class="spec-card"><div class="spec-lbl">Azure</div><div class="spec-val">ExpressRoute</div></div><div class="spec-card"><div class="spec-lbl">GCP</div><div class="spec-val">Cloud Interconnect</div></div><div class="spec-card"><div class="spec-lbl">Bandwidth</div><div class="spec-val">1 / 10 / 100 Gbps</div></div><div class="spec-card"><div class="spec-lbl">VPN (IPsec)</div><div class="spec-val">Site-to-site backup path</div></div><div class="spec-card"><div class="spec-lbl">Latency</div><div class="spec-val">Dedicated &lt;1ms · VPN ~5–20ms</div></div></div><div class="use-box" style="margin-top:10px"><div class="use-lbl">เมื่อไหร่ควรใช้ Direct Connect</div><div class="use-val">DB replication cross-site · Real-time application · Data transfer ขนาดใหญ่ (ถูกกว่า internet egress) · Regulatory compliance ที่ห้ามผ่าน internet</div></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">AWS DX Port fee + Data transfer fee แยกกัน · ควรมี VPN เป็น backup สำหรับ Direct Connect · Equinix = colocation ที่มี direct cross-connect ไป Cloud ทุกเจ้า</div></div>';}},
  'hadr':{t:'HA & Disaster Recovery',s:'RTO · RPO · Multi-AZ · Backup',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">RTO</div><div class="spec-val">Recovery Time Objective (กลับมาได้เร็วแค่ไหน)</div></div><div class="spec-card"><div class="spec-lbl">RPO</div><div class="spec-val">Recovery Point Objective (ข้อมูลสูญหายได้แค่ไหน)</div></div><div class="spec-card"><div class="spec-lbl">Multi-AZ</div><div class="spec-val">Active-Active ต่าง AZ</div></div><div class="spec-card"><div class="spec-lbl">Multi-region</div><div class="spec-val">Geo DR failover</div></div><div class="spec-card"><div class="spec-lbl">Backup</div><div class="spec-val">AWS Backup / Azure Backup</div></div><div class="spec-card"><div class="spec-lbl">Pilot light</div><div class="spec-val">Minimal standby รอ scale</div></div></div><div class="table-wrap" style="margin:8px 0 12px"><table><tr><th>Strategy</th><th>RTO</th><th>RPO</th><th>Cost</th></tr><tr><td>Backup+Restore</td><td>ชั่วโมง</td><td>ชั่วโมง</td><td>ต่ำสุด</td></tr><tr><td>Pilot Light</td><td>10–30 นาที</td><td>นาที</td><td>ต่ำ</td></tr><tr><td>Warm Standby</td><td>&lt;5 นาที</td><td>&lt;1 นาที</td><td>กลาง</td></tr><tr><td>Multi-site Active/Active</td><td>~0</td><td>~0</td><td>สูงสุด</td></tr></table></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">99.99% = downtime &lt;52 min/ปี · 99.999% = &lt;5 min/ปี · Multi-AZ จำเป็นสำหรับ Tier-1 workload · ถามลูกค้า RTO/RPO ก่อน design architecture</div></div>';}},
  'finops':{t:'FinOps & Cloud Cost',s:'Reserved · Spot · Savings Plans · Tagging',body:function(){return '<div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Option</th><th>Discount</th><th>Commitment</th></tr><tr><td>On-Demand</td><td>0%</td><td>ไม่มี</td></tr><tr><td>Savings Plans (1yr)</td><td>~30%</td><td>1 ปี flexible</td></tr><tr><td>Reserved (1yr)</td><td>~40%</td><td>1 ปี instance type</td></tr><tr><td>Reserved (3yr)</td><td>~60%</td><td>3 ปี ล็อก</td></tr><tr><td>Spot/Preemptible</td><td>70–90%</td><td>Interruptible</td></tr></table></div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Tagging</div><div class="spec-val">Cost allocation by team/project</div></div><div class="spec-card"><div class="spec-lbl">Right-sizing</div><div class="spec-val">CPU utilization &lt;30% → down</div></div><div class="spec-card"><div class="spec-lbl">Waste</div><div class="spec-val">Stop idle dev env overnight</div></div><div class="spec-card"><div class="spec-lbl">S3 lifecycle</div><div class="spec-val">Move old data → Glacier</div></div></div><div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">AWS Cost Explorer ดู top spender ก่อน · Spot เหมาะ batch/ML training ที่รับ interrupt ได้ · Enterprise Discount Program (EDP) ลดได้ 15–30% เพิ่มเติม</div><div class="use-box" style="margin-top:10px"><div class="use-lbl">Engineer checklist</div><div class="use-val">ตั้ง budget alert, tag policy, rightsizing review และ reserved/spot coverage report ทุกเดือน จะช่วยลด surprise bill ได้มาก</div></div></div>';}},
  'ngfw':{t:'Firewall & Perimeter',s:'NGFW · IPS/IDS · DMZ · DDoS scrubbing',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">NGFW</div><div class="spec-val">App-aware L7 firewall</div></div><div class="spec-card"><div class="spec-lbl">IPS/IDS</div><div class="spec-val">Snort / Suricata rules</div></div><div class="spec-card"><div class="spec-lbl">DMZ</div><div class="spec-val">Public-facing isolated zone</div></div><div class="spec-card"><div class="spec-lbl">URL filter</div><div class="spec-val">Web proxy / SWG</div></div><div class="spec-card"><div class="spec-lbl">Email GW</div><div class="spec-val">Anti-spam + sandbox</div></div><div class="spec-card"><div class="spec-lbl">DDoS</div><div class="spec-val">Scrubbing center (Tbps)</div></div></div><div class="chip-wrap"><span class="chip">Palo Alto PA-Series</span><span class="chip">FortiGate NGFW</span><span class="chip">Check Point</span><span class="chip">Cisco FTD</span><span class="chip">Juniper SRX</span></div><div class="use-box" style="margin-top:10px"><div class="use-lbl">NGFW vs Stateful FW</div><div class="use-val">NGFW inspect ถึง L7 — block YouTube แต่ allow Google Meet ได้ · SSL inspection สำคัญ เพราะ 80%+ traffic เป็น HTTPS</div></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">Palo Alto App-ID เด่นที่ application awareness · FortiGate ดี TCO (FortiASIC hardware) · เลือก throughput ให้ตรงกับ encrypted traffic (SSL inspection ลด throughput 30–50%)</div></div>';}},
  'zerotrust':{t:'Zero Trust & IAM',s:'"Never trust, always verify" — MFA · PAM · SSO',body:function(){return '<figure class="sheet-figure"><img src="assets/img/security-overview.svg" alt="Zero trust diagram"><figcaption>Identity คือ perimeter ใหม่ขององค์กรสมัยใหม่ ดังนั้น MFA, conditional access และ PAM ต้องถูกออกแบบเป็นชุดเดียวกัน ไม่ใช่ติดตั้งแยกกันทีละชิ้น</figcaption></figure>'+'<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Principle</div><div class="spec-val">Assume breach always</div></div><div class="spec-card"><div class="spec-lbl">IAM</div><div class="spec-val">AD / Entra ID / Okta</div></div><div class="spec-card"><div class="spec-lbl">MFA</div><div class="spec-val">TOTP / FIDO2 / Passkey</div></div><div class="spec-card"><div class="spec-lbl">PAM</div><div class="spec-val">Privileged Access Mgmt</div></div><div class="spec-card"><div class="spec-lbl">SSO</div><div class="spec-val">SAML 2.0 / OIDC</div></div><div class="spec-card"><div class="spec-lbl">Micro-segmentation</div><div class="spec-val">NSX / Illumio / Guardicore</div></div></div><div class="chip-wrap"><span class="chip">Okta / Auth0</span><span class="chip">Azure Entra ID</span><span class="chip">CyberArk PAM</span><span class="chip">BeyondTrust</span><span class="chip">Zscaler ZTNA</span></div><div class="use-box" style="margin-top:10px"><div class="use-lbl">ZTNA vs VPN</div><div class="use-val">VPN ให้ access ทั้ง network · ZTNA ให้ access เฉพาะ application ที่ authorize · ZTNA ปลอดภัยกว่าและ scale ได้ดีกว่าสำหรับ WFH</div></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">MFA = minimum requirement ทุกองค์กร · PAM จำเป็นสำหรับ privileged account เช่น domain admin/root · Phishing-resistant MFA = FIDO2/Passkey เท่านั้น (TOTP ยัง phish ได้)</div></div>';}},
  'edr':{t:'EDR / XDR',s:'Endpoint & Extended Detection Response',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">EDR</div><div class="spec-val">Endpoint Detection+Response</div></div><div class="spec-card"><div class="spec-lbl">XDR</div><div class="spec-val">Cross-layer visibility</div></div><div class="spec-card"><div class="spec-lbl">Coverage</div><div class="spec-val">Endpoint+Email+Cloud+Net</div></div><div class="spec-card"><div class="spec-lbl">AI detection</div><div class="spec-val">Behavioral analysis + ML</div></div><div class="spec-card"><div class="spec-lbl">Threat hunting</div><div class="spec-val">Proactive IOC search</div></div><div class="spec-card"><div class="spec-lbl">Response</div><div class="spec-val">Isolate, kill, remediate</div></div></div><div class="chip-wrap"><span class="chip">CrowdStrike Falcon</span><span class="chip">SentinelOne</span><span class="chip">Microsoft Defender XDR</span><span class="chip">Palo Alto Cortex XDR</span><span class="chip">Trend Vision One</span></div><div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">XDR รวม signal หลาย layer — ตรวจจับ attack ข้าม vector ได้ดีกว่า EDR standalone · CrowdStrike Falcon เด่นที่ lightweight agent · Defender XDR ดีถ้า ecosystem Microsoft</div></div>';}},
  'soc':{t:'SIEM & SOC',s:'Log management · SOAR · 24×7 monitoring',body:function(){return '<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">SIEM</div><div class="spec-val">Log collection+correlation</div></div><div class="spec-card"><div class="spec-lbl">SOAR</div><div class="spec-val">Automated playbook</div></div><div class="spec-card"><div class="spec-lbl">MTTD</div><div class="spec-val">Mean Time to Detect</div></div><div class="spec-card"><div class="spec-lbl">MTTR</div><div class="spec-val">Mean Time to Respond</div></div><div class="spec-card"><div class="spec-lbl">Threat Intel</div><div class="spec-val">MITRE ATT&CK framework</div></div><div class="spec-card"><div class="spec-lbl">SOC Tier</div><div class="spec-val">Tier 1 Triage → 2 Investigate → 3 Hunt</div></div></div><div class="chip-wrap"><span class="chip">Splunk SIEM</span><span class="chip">Microsoft Sentinel</span><span class="chip">IBM QRadar</span><span class="chip">Elastic SIEM</span><span class="chip">Wazuh (OSS)</span></div><div class="use-box" style="margin-top:10px"><div class="use-lbl">SIEM+SOAR+EDR Integration</div><div class="use-val">EDR detect → SIEM correlate → SOAR auto-response — ลด MTTR จาก ชั่วโมง → นาที ช่วยลดผล breach ได้ชัดเจน</div></div><div class="sales-strip"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">Microsoft Sentinel cloud-native + pay-per-GB ดีสำหรับ Azure org · Splunk Enterprise license by data ingest — ต้องประมาณ log volume ให้ถูกต้อง</div><div class="use-box" style="margin-top:10px"><div class="use-lbl">สิ่งที่ลูกค้ามักมองข้าม</div><div class="use-val">ถ้าไม่มี use case, asset inventory และ owner ของแต่ละ log source ต่อให้มี SIEM ราคาแพงก็จะเกิด alert ล้นและใช้งานจริงไม่ได้</div></div></div>';}},
  'compliance':{t:'Compliance & Standards',s:'PDPA · ISO 27001 · PCI DSS · NIST',body:function(){return '<div class="table-wrap" style="margin:0 0 12px"><table><tr><th>Standard</th><th>ขอบเขต</th><th>เหมาะกับ</th></tr><tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">PDPA</span></td><td>ข้อมูลส่วนบุคคล (ไทย)</td><td>ทุกองค์กรในไทย</td></tr><tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">ISO 27001:2022</span></td><td>ISMS ครบวงจร</td><td>Enterprise/Certification</td></tr><tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">PCI DSS v4</span></td><td>ข้อมูลบัตรเครดิต</td><td>Payment/FinTech</td></tr><tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">HIPAA</span></td><td>ข้อมูลสุขภาพ</td><td>Healthcare (US)</td></tr><tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">NIST CSF 2.0</span></td><td>Cybersecurity framework</td><td>ทุกภาคส่วน</td></tr><tr><td><span class="bx" style="background:var(--amd-bg);color:var(--amd-text)">BOT / OWASP</span></td><td>ธนาคาร / Web App Security</td><td>ธนาคาร/FinTech ไทย</td></tr></table></div><div class="spec-grid"><div class="spec-card"><div class="spec-lbl">Penetration Test</div><div class="spec-val">ต้องทำรายปี (PCI/ISO)</div></div><div class="spec-card"><div class="spec-lbl">Vulnerability Scan</div><div class="spec-val">ทุก quarter</div></div><div class="spec-card"><div class="spec-lbl">Security Audit</div><div class="spec-val">Log review + policy</div></div><div class="spec-card"><div class="spec-lbl">DLP</div><div class="spec-val">Data Loss Prevention</div></div></div><div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">PDPA บังคับทุกองค์กรในไทย · ISO 27001 ช่วยเพิ่ม credibility ในการประมูลงาน enterprise · PCI DSS v4 บังคับใช้เต็มรูปแบบ มีนาคม 2025</div></div>';}},
  'backup':{t:'Backup & Recovery',s:'3-2-1 Rule · Veeam · Immutable Backup',body:function(){return '<figure class="sheet-figure"><img src="assets/img/security-overview.svg" alt="Backup and recovery diagram"><figcaption>Backup ที่ดีต้องตอบได้ทั้งสองคำถาม: เก็บไว้ที่ไหน และกู้กลับได้เร็วแค่ไหนเมื่อโดน ransomware หรือ data corruption</figcaption></figure>'+'<div class="spec-grid"><div class="spec-card"><div class="spec-lbl">3-2-1 Rule</div><div class="spec-val">3 copies · 2 media · 1 offsite</div></div><div class="spec-card"><div class="spec-lbl">Immutable</div><div class="spec-val">Ransomware protection — write-once</div></div><div class="spec-card"><div class="spec-lbl">Air Gap</div><div class="spec-val">ตัดการเชื่อมต่อ backup ไม่ให้ encrypt</div></div><div class="spec-card"><div class="spec-lbl">Dedup+Compress</div><div class="spec-val">ลด storage 60–90%</div></div><div class="spec-card"><div class="spec-lbl">Backup Window</div><div class="spec-val">Full weekly + Incremental daily</div></div><div class="spec-card"><div class="spec-lbl">Recovery Test</div><div class="spec-val">ต้องทดสอบ restore ทุก Quarter</div></div></div><div class="chip-wrap"><span class="chip">Veeam B&R</span><span class="chip">Commvault</span><span class="chip">Veritas NetBackup</span><span class="chip">AWS Backup</span><span class="chip">Azure Backup</span></div><div class="sales-strip" style="margin-top:10px"><div class="sales-lbl">💡 เซลล์ควรรู้</div><div class="sales-val">Ransomware = เหตุผลหลักที่ลูกค้าซื้อ Immutable backup · Veeam ครอง market share สูงสุด ทำงานกับ VM ทุกเจ้า · Backup ที่ไม่เคย test restore = ไม่ใช่ backup</div></div>';}},
};