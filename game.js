'use strict';
/* Northern Front: The Security Cabinet. Offline capable, no libraries required. */
const SOURCES = {
  unifil: { name: 'UNIFIL: Background and history', url: 'https://unifil.unmissions.org/en/background' },
  mandate: { name: 'UNIFIL: Mandate and Resolution 1701', url: 'https://unifil.unmissions.org/en/unifil-mandate' },
  blue: { name: 'UNIFIL: Blue Line and operations', url: 'https://unifil.unmissions.org/en/unifil-operations' },
  security: { name: 'Security Council Report: Lebanon chronology', url: 'https://www.securitycouncilreport.org/chronology/lebanon.php?print=true' },
  kahan: { name: 'Kahan Commission report, February 1983', url: 'https://www.palquest.org/en/node/9664' },
  resolution: { name: 'UN Security Council Resolution 1701 (2006)', url: 'https://digitallibrary.un.org/record/581053' },
  commons: { name: 'House of Commons Library: Israel and Hezbollah, 2023 to 2024', url: 'https://commonslibrary.parliament.uk/research-briefings/cbp-10108/' },
  statement: { name: 'French Presidency: Cessation of hostilities, November 2024', url: 'https://www.elysee.fr/en/emmanuel-macron/2024/11/26/joint-statement-by-president-biden-and-president-macron-announcing-a-cessation-of-hostilities' },
  timeline: { name: 'IDF: Operation Northern Arrows timeline', url: 'https://www.idf.il/en/mini-sites/idf-press-releases-israel-at-war/the-northern-front/a-timeline-of-operation-northern-arrows/' },
  war2006: { name: 'Security Council Report: 2006 Lebanon war background', url: 'https://www.securitycouncilreport.org/update-report/lookup_c_glkwlemtisg_b_1862907.php' }
};
const CHAPTERS = [
  {
    year:'1978',era:'THE 1970s',title:'THE PLO THREAT',subtitle:'An attack across a fragile border',prime:'Menachem Begin',number:'01',
    intro:'The PLO has established armed bases in Lebanon. An attack on Israel has killed civilians, and the cabinet must respond.',
    briefing:'Prime Minister, the PLO has claimed responsibility for the deadly Coastal Road attack. Armed groups are operating across the border. What should Israel do?',
    context:['Palestinian fighters relocated from Jordan to Lebanon in the early 1970s.','Lebanon entered a civil war in 1975.','The PLO claimed responsibility for the Coastal Road attack on 11 March 1978.'],
    objective:'Protect civilians in northern Israel while weighing the consequences of operations inside Lebanon.',
    military:{name:'Ezer Weizman',role:'Defence Minister',initials:'EW',quote:'We cannot let armed groups use southern Lebanon to launch attacks on Israeli civilians.'},
    diplomatic:{name:'Moshe Dayan',role:'Foreign Minister',initials:'MD',quote:'A major operation risks regional escalation and an international response.'},
    question:'HOW SHOULD ISRAEL RESPOND?',
    choices:[
      {title:'Reinforce the border',detail:'Build defences and seek international action.',impacts:['Stronger border protection may reassure communities but cannot remove distant bases.','The armed threat may remain intact.','A restrained approach could reduce international pressure.'],reflection:'Does stronger defence reduce a threat if the armed groups remain nearby?'},
      {title:'Carry out limited strikes',detail:'Target PLO positions without a major ground operation.',impacts:['Targeted action might disrupt some planned attacks but could also provoke retaliation.','A limited operation may leave much of the network in place.','There could still be criticism and a risk of escalation.'],reflection:'Can a limited response deter further attacks?'},
      {title:'Enter southern Lebanon',detail:'Launch a larger operation against PLO bases.',impacts:['There may be an immediate reduction in attacks, but civilians on both sides could face danger.','Ground forces might disrupt armed groups at the cost of deeper involvement.','The UN and neighbouring states may demand withdrawal.'],reflection:'When does a short operation become an extended commitment?'}
    ],
    history:[
      'On the night of 14 to 15 March 1978, Israel launched Operation Litani into southern Lebanon.',
      'The UN Security Council called for Israeli withdrawal and established UNIFIL through Resolutions 425 and 426.',
      'The wider conflict and attacks along the border continued, showing the limits of a single operation.'
    ],
    takeaway:'The 1978 operation temporarily changed the situation on the ground but did not settle the underlying threat.',
    nuance:'The Lebanese government protested the invasion and stated it had no connection with the PLO attack.',
    map:'map_plo.webp',archive:'archive_1978.webp',archiveLabel:'Archive: Palestinian armed groups in Lebanon, from the supplied presentation',
    markers:[{x:48,y:33,label:'SOUTHERN LEBANON',tone:'gold'},{x:44,y:54,label:'BORDER AREA',tone:'blue'},{x:55,y:63,label:'ISRAELI COMMUNITIES',tone:'red'}],
    route:'M 360 417 Q 376 354 428 265',mapCues:['PLO groups operate from southern Lebanon.','Israeli communities are exposed to attacks.','Operation Litani moves the front beyond the border.'],sources:['unifil','security']
  },
  {
    year:'1982',era:'JUNE 1982',title:'THE FIRST LEBANON WAR',subtitle:'An operation expands into a wider conflict',prime:'Menachem Begin',number:'02',
    intro:'After renewed fighting, Israel prepares a major military response. The question is how far the operation should go.',
    briefing:'Prime Minister, our ambassador Shlomo Argov has been shot in London by a group opposed to the PLO. Fighting on the Lebanese border has intensified. Military commanders want a decisive response.',
    context:['The 3 June attack on Ambassador Argov was carried out by the Abu Nidal organisation, not the PLO.','Israeli and Palestinian forces subsequently exchanged attacks.','Lebanon was already devastated by civil war and involved outside powers, including Syria.'],
    objective:'Reduce attacks against northern Israel without becoming trapped in a wider Lebanese war.',
    military:{name:'Ariel Sharon',role:'Defence Minister',initials:'AS',quote:'We can push armed forces away from the border. A deeper operation could dismantle PLO leadership.'},
    diplomatic:{name:'Yitzhak Shamir',role:'Foreign Minister',initials:'YS',quote:'The further we advance, the greater the risk of a prolonged war and confrontation with Syria.'},
    question:'HOW FAR SHOULD THE IDF GO?',
    choices:[
      {title:'Hold a defensive line',detail:'Use defensive and limited military measures.',impacts:['This may reduce immediate military exposure but might leave towns at risk.','PLO positions farther north could continue operating.','A limited response may be easier to defend diplomatically.'],reflection:'Can holding the line provide lasting security?'},
      {title:'Advance into the south',detail:'Conduct a ground operation against nearby armed positions.',impacts:['Northern communities might gain distance from some threats.','Israeli forces risk a prolonged presence and casualties.','International pressure may grow as operations expand.'],reflection:'How should a government define the limits of its operation?'},
      {title:'Push towards Beirut',detail:'Pursue PLO leaders and infrastructure deeper in Lebanon.',impacts:['Major PLO infrastructure might be disrupted, but fighting and harm to civilians could grow.','An expanded offensive risks fighting more groups, including Syrian forces.','Diplomatic and political costs could become severe.'],reflection:'Is defeating one organisation worth entering a wider civil conflict?'}
    ],
    history:[
      'Israel invaded Lebanon on 6 June 1982. Its forces advanced beyond the initially stated limited objectives and reached Beirut.',
      'Following a siege and international negotiations, the PLO leadership and fighters left Beirut.',
      'The war inflicted extensive harm. Lebanese Phalangist militiamen massacred civilians at Sabra and Shatila. Israel’s Kahan Commission found indirect Israeli responsibility.'
    ],
    takeaway:'Military success against an armed organisation did not produce an easy political settlement or a swift exit.',
    nuance:'The attempt to assassinate Ambassador Argov was not ordered by the PLO. It was carried out by the rival Abu Nidal organisation.',
    map:'map_plo.webp',archive:'archive_1982.webp',archiveLabel:'Archive: First Lebanon War slide from the supplied presentation',
    markers:[{x:48,y:34,label:'PLO POSITIONS',tone:'red'},{x:45,y:59,label:'BORDER',tone:'blue'},{x:52,y:13,label:'BEIRUT DIRECTION',tone:'gold'}],
    route:'M 350 430 Q 380 345 447 259 T 487 105',mapCues:['Military operations begin in southern Lebanon.','The operation expands far beyond the border.','Forces reach Beirut amid a broader conflict.'],sources:['unifil','security','kahan']
  },
  {
    year:'2000',era:'MAY 2000',title:'ISRAEL WITHDRAWS',subtitle:'Leaving Lebanon and securing the border',prime:'Ehud Barak',number:'03',
    intro:'After years of deployment in a security zone, Israel prepares to leave southern Lebanon. New risks remain.',
    briefing:'Prime Minister, Israeli forces and the South Lebanon Army have maintained a security zone for years. The deployment has cost lives. Hezbollah attacks continue. Do we stay or leave?',
    context:['Israel retained a security zone in southern Lebanon after a partial withdrawal in 1985.','Hezbollah emerged in the early 1980s with Iranian backing. Amal was a separate Lebanese Shi’a movement.','The Israeli government announced its intention to complete withdrawal in 2000.'],
    objective:'End a costly deployment while preparing for security challenges along the border.',
    military:{name:'Shaul Mofaz',role:'IDF Chief of Staff',initials:'SM',quote:'Leaving removes the immediate burden of the security zone, but the border may face new threats.'},
    diplomatic:{name:'David Levy',role:'Foreign Minister',initials:'DL',quote:'A withdrawal coordinated with the UN may improve Israel’s position and strengthen the case for border security.'},
    question:'DO WE STAY OR WITHDRAW?',
    choices:[
      {title:'Remain in the zone',detail:'Keep military positions in southern Lebanon.',impacts:['A forward position might protect some border areas while exposing deployed troops.','Continuing deployment requires resources and risks further attacks.','Israel may face pressure to end its presence.'],reflection:'Does remaining inside another country create security or prolong conflict?'},
      {title:'Withdraw in stages',detail:'Reduce forces while seeking stronger security arrangements.',impacts:['Phased withdrawal may offer preparation time, but uncertainty remains.','Transition periods can carry their own operational risks.','Coordination may be easier but guarantees are difficult to enforce.'],reflection:'How can a government judge whether security guarantees will hold?'},
      {title:'Withdraw fully',detail:'Return forces to Israel and reinforce the border.',impacts:['Soldiers leave the security zone, while border communities remain vulnerable to future attacks.','A costly military commitment ends but deterrence is tested.','The UN can verify withdrawal, though this does not ensure peace.'],reflection:'Can withdrawal be successful even if the conflict continues?'}
    ],
    history:[
      'Israeli forces withdrew from southern Lebanon in May 2000, earlier than the government’s original July target.',
      'The South Lebanon Army collapsed during the withdrawal. Some members and their families fled to Israel.',
      'The UN confirmed withdrawal along the Blue Line. Hezbollah remained armed and border tensions persisted.'
    ],
    takeaway:'Withdrawal ended Israel’s military presence in the security zone but did not end the conflict with Hezbollah.',
    nuance:'The Blue Line is a UN line used to verify withdrawal. It is not a formally agreed international border.',
    map:'map_hezbollah.webp',archive:'archive_2000.webp',archiveLabel:'Archive: Southern Lebanon security zone map in the supplied presentation',
    markers:[{x:47,y:42,label:'FORMER SECURITY ZONE',tone:'gold'},{x:44,y:60,label:'BLUE LINE AREA',tone:'blue'},{x:53,y:31,label:'HEZBOLLAH',tone:'red'}],
    route:'M 431 264 Q 406 336 359 417',mapCues:['Israel maintains positions inside a security zone.','In May 2000 Israeli forces return to the Israeli side.','The Blue Line is established to verify withdrawal.'],sources:['unifil','blue','security']
  },
  {
    year:'2006',era:'JULY 2006',title:'THE SECOND LEBANON WAR',subtitle:'An abduction triggers a major conflict',prime:'Ehud Olmert',number:'04',
    intro:'Hezbollah attacks an Israeli patrol, capturing two soldiers. Rockets strike the north as the government considers its response.',
    briefing:'Prime Minister, on 12 July Hezbollah has attacked our soldiers across the Blue Line. Two have been captured and rockets have been fired. The cabinet must choose how to respond.',
    context:['Hezbollah remained armed after Israel’s withdrawal in 2000.','On 12 July 2006 Hezbollah captured two Israeli soldiers and killed others during an attack.','Northern Israeli communities came under rocket fire as the fighting escalated.'],
    objective:'Protect Israeli communities, respond to the attack and weigh the danger of a larger war.',
    military:{name:'Dan Halutz',role:'IDF Chief of Staff',initials:'DH',quote:'A strong response is needed to stop rockets, weaken Hezbollah and restore deterrence.'},
    diplomatic:{name:'Tzipi Livni',role:'Foreign Minister',initials:'TL',quote:'Military pressure alone may not secure the soldiers’ return. A diplomatic settlement will also be needed.'},
    question:'WHAT RESPONSE SHOULD ISRAEL CHOOSE?',
    choices:[
      {title:'Negotiate with pressure',detail:'Pursue diplomacy alongside limited military action.',impacts:['Civilians might avoid some wider fighting, though rocket attacks may continue.','Hezbollah’s capabilities may be less affected.','Diplomatic channels could remain more open.'],reflection:'Can pressure and negotiation work while rockets are being fired?'},
      {title:'Use extensive air power',detail:'Strike Hezbollah capabilities from the air.',impacts:['Some rocket sites may be disrupted, but attacks and civilian harm may persist.','Air power alone may have limits against dispersed armed networks.','International scrutiny may intensify as fighting continues.'],reflection:'Is air power enough against an embedded armed group?'},
      {title:'Add a ground operation',detail:'Combine air operations with an advance into Lebanon.',impacts:['Ground forces may reach additional sites but face casualties and difficult fighting.','The threat could be reduced locally, while escalation risks rise.','The political and humanitarian costs of a wider war may grow.'],reflection:'How should leaders decide whether greater force will produce a better outcome?'}
    ],
    history:[
      'Israel responded with extensive air operations and later a larger ground offensive. Hezbollah continued firing rockets into Israel.',
      'The 34 day war caused substantial loss of life, infrastructure damage and displacement in both countries.',
      'UN Resolution 1701 established a framework for ending hostilities and expanding the role of the Lebanese Armed Forces and UNIFIL.'
    ],
    takeaway:'The war demonstrated the difficulty of stopping rocket attacks and the importance of enforceable security arrangements.',
    nuance:'The remains of the two soldiers, Ehud Goldwasser and Eldad Regev, were returned to Israel in 2008. Resolution 1701 did not fully resolve Hezbollah’s armed presence.',
    map:'map_hezbollah.webp',archive:'archive_2006.webp',archiveLabel:'Archive: Second Lebanon War slide from the supplied presentation',
    markers:[{x:53,y:39,label:'HEZBOLLAH ROCKETS',tone:'red'},{x:43,y:55,label:'BORDER INCIDENT',tone:'gold'},{x:51,y:68,label:'NORTHERN ISRAEL',tone:'blue'}],
    route:'M 450 255 Q 418 345 365 412',mapCues:['Hezbollah attacks an Israeli patrol across the Blue Line.','Rockets reach Israeli towns and cities.','Resolution 1701 calls for measures in southern Lebanon.'],sources:['unifil','resolution','war2006']
  },
  {
    year:'2024',era:'SEPTEMBER 2024',title:'OPERATION NORTHERN ARROWS',subtitle:'The struggle to bring northern residents home',prime:'Benjamin Netanyahu',number:'05',
    intro:'Nearly a year of attacks has displaced residents from northern Israel. A decision on major military escalation approaches.',
    briefing:'Prime Minister, Hezbollah has fired into Israel since 8 October 2023. Thousands of families have left their homes. Diplomacy has not ended the attacks. How do we restore security?',
    context:['Hezbollah began attacks on Israel on 8 October 2023, followed by repeated exchanges of fire.','Israel evacuated tens of thousands of residents from northern communities.','Escalating attacks in September 2024 increased the urgency of the government’s decision.'],
    objective:'Enable families to return home while considering regional escalation and the safety of civilians in both countries.',
    military:{name:'Herzi Halevi',role:'IDF Chief of Staff',initials:'HH',quote:'We must degrade the threat along the border and create conditions for displaced residents to return safely.'},
    diplomatic:{name:'Israel Katz',role:'Foreign Minister',initials:'IK',quote:'A wider conflict carries regional and humanitarian risks. Any outcome needs enforceable security commitments.'},
    question:'HOW DO WE RESTORE NORTHERN SECURITY?',
    choices:[
      {title:'Pursue a monitored deal',detail:'Seek a ceasefire with stronger international supervision.',impacts:['An agreement could reduce attacks and displacement if all parties comply.','Hezbollah capabilities may remain unless arrangements are enforced.','Diplomacy may build support but enforcement will be difficult.'],reflection:'What happens if an agreement is reached but not enforced?'},
      {title:'Continue targeted strikes',detail:'Increase pressure while avoiding a full ground operation.',impacts:['Some threats may be disrupted, but families may still fear returning.','Targeted attacks can degrade capabilities but cannot guarantee quiet.','The risk of regional escalation remains.'],reflection:'Can precision operations alone change the conditions at the border?'},
      {title:'Expand military operations',detail:'Strike more extensively and consider a ground operation.',impacts:['Military pressure may weaken Hezbollah but also increase danger to civilians.','A broader operation could disrupt infrastructure at the risk of prolonged conflict.','Diplomatic and humanitarian pressures may grow sharply.'],reflection:'What must be achieved before displaced civilians can safely return?'}
    ],
    history:[
      'Israel intensified major strikes in September 2024, killing senior Hezbollah commanders, including Hassan Nasrallah on 27 September.',
      'Israeli ground operations followed at the end of September and beginning of October. Fighting caused extensive displacement and casualties, particularly in Lebanon.',
      'An Israel and Lebanon cessation of hostilities agreement took effect on 27 November 2024. Its implementation and lasting security remained contested.'
    ],
    takeaway:'The 2024 crisis returned Israel to a familiar dilemma: weakening a military threat is different from achieving a durable border settlement.',
    nuance:'Israel’s stated aim included the safe return of northern residents. Displacement and civilian casualties also affected Lebanese communities on a large scale.',
    map:'map_hezbollah.webp',archive:'archive_2024.webp',archiveLabel:'Archive: Israeli border landscape from the supplied presentation',
    markers:[{x:50,y:35,label:'HEZBOLLAH POSITIONS',tone:'red'},{x:46,y:52,label:'BORDER INCIDENTS',tone:'gold'},{x:50,y:68,label:'EVACUATED TOWNS',tone:'blue'}],
    route:'M 445 279 Q 415 350 370 420',mapCues:['Attacks begin on 8 October 2023 and continue.','Families leave communities along the northern border.','September 2024 sees a major military escalation.'],sources:['commons','statement','timeline','resolution']
  }
];
const $ = (q,root=document)=>root.querySelector(q);
const $$ = (q,root=document)=>Array.from(root.querySelectorAll(q));
const state={screen:'welcome',chapter:0,chosen:{},player:'',mapOverlay:false,mapAmal:false,cue:0,sound:false,classroom:false,modal:null};
let audioCtx=null,oscillators=[],lastFocus=null;
function escapeHTML(v){return String(v??'').replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));}
function chapter(){return CHAPTERS[state.chapter];}
function progress(){return `<div class="progress-top"><span class="section-kicker">SECURITY CABINET ARCHIVE · ${chapter().era}</span><div class="progress-points" aria-label="Chapter ${state.chapter+1} of 5">${CHAPTERS.map((_,i)=>`<span class="progress-point ${i<state.chapter?'done':i===state.chapter?'current':''}" title="Chapter ${i+1}"></span>`).join('')}</div></div>`;}
function listSources(ids){return ids.map(key=>SOURCES[key]).filter(Boolean).map(s=>`<a href="${escapeHTML(s.url)}" target="_blank" rel="noopener noreferrer">↗ ${escapeHTML(s.name)}</a>`).join('');}
function render(){
 let html='';
 if(state.screen==='welcome')html=renderWelcome();
 if(state.screen==='intro')html=renderIntro();
 if(state.screen==='cabinet')html=renderCabinet();
 if(state.screen==='consequence')html=renderConsequence();
 if(state.screen==='reveal')html=renderReveal();
 if(state.screen==='final')html=renderFinal();
 $('#app').innerHTML=html;
 document.body.classList.toggle('classroom',state.classroom);document.body.dataset.screen=state.screen;
 $('#classroomToggle').setAttribute('aria-pressed',String(state.classroom));
 $('#soundToggle').setAttribute('aria-pressed',String(state.sound));
 $('#soundToggle .sound-word').textContent=state.sound?'SOUND ON':'SOUND OFF';
 $('#soundToggle').setAttribute('title',state.sound?'Mute ambient sound':'Enable ambient sound');
 document.title=`${state.screen==='welcome'?'Northern Front':state.screen==='final'?'Final Briefing':chapter().year+' | '+chapter().title} | Explore`;
 window.scrollTo({top:0,behavior:'instant'});
}
function renderWelcome(){return `<section class="welcome appear">
 <div class="welcome-copy"><div class="kicker-line"><span class="eyebrow">STANDWITHUS UK · EXPLORE PRESENTS</span></div>
 <h1>NORTHERN <span>FRONT</span></h1><h2>THE SECURITY CABINET</h2>
 <p class="welcome-intro">You are Israel’s Prime Minister. Five moments in history. Five difficult cabinet decisions. One enduring question: how do we keep the northern border safe?</p>
 <div class="entry"><label class="hidden" for="playerName">Your name</label><input id="playerName" maxlength="34" autocomplete="given-name" placeholder="Your name (optional)" value="${escapeHTML(state.player)}"><button class="btn btn-primary" data-action="start">ENTER THE CABINET <span aria-hidden="true">→</span></button><button class="btn btn-ghost" data-action="howto">HOW TO PLAY</button></div>
 <div class="welcome-points"><span class="pill pill-blue">5 HISTORICAL CHAPTERS</span><span class="pill pill-gold">12 TO 15 MINUTES</span><span class="pill">AGES 16 TO 17</span></div>
 <p class="small-muted" style="margin-top:20px;max-width:560px">This educational simulation uses an Israeli government perspective. Adviser dialogue and the choices you make are reconstructed for learning. History remains unchanged.</p></div>
 <div class="welcome-art" aria-hidden="true"><div class="radar-halo"></div><img class="welcome-map" src="assets/map_base.webp" alt=""><img class="welcome-map-alt" src="assets/map_hezbollah.webp" alt=""><div class="hero-map-glow"></div><div class="hero-disc"></div><div class="hero-stamp">CABINET EYES ONLY</div><div class="hero-data"><small><span class="pulse"></span> NORTHERN SECTOR</small><strong>1978 → 2024</strong></div></div>
 </section>`;}
function renderIntro(){let c=chapter();return `<section class="chapter-intro appear">${progress()}<div class="intro-shell">
 <div class="intro-text"><div class="year-ribbon">CLASSIFIED BRIEFING · ${c.year}</div><div class="chapter-number">CHAPTER ${c.number}</div><h1>${escapeHTML(c.title)}</h1><p class="lead">${escapeHTML(c.intro)}</p><p class="briefing-copy">${escapeHTML(c.briefing)}</p><div class="intel-tag">PRIME MINISTER: ${escapeHTML(c.prime.toUpperCase())}</div><div class="intro-actions"><button class="btn btn-primary" data-action="enter">OPEN CABINET MEETING →</button><button class="btn btn-ghost" data-action="howto">HOW TO PLAY</button></div></div>
 <div class="intro-visual"><img src="assets/${c.map}" alt="Illustrative historical organisation map based on the supplied teaching material"><div class="visual-caption"><strong>INTELLIGENCE FILE ${c.number} / 05</strong><span>Historical setting · symbolic overlays do not depict exact control</span></div></div></div></section>`;}
function renderAdviser(data,type){return `<article class="adviser ${type}"><div class="advisor-head"><div class="advisor-avatar" aria-hidden="true">${escapeHTML(data.initials)}</div><div><h3>${escapeHTML(data.name)}</h3><div class="advisor-role">${escapeHTML(data.role)}</div></div></div><p>${escapeHTML(data.quote)}</p><div class="advisor-foot">SIMULATED ADVICE · NOT A HISTORICAL QUOTATION</div></article>`;}
function renderCabinet(){let c=chapter();return `<section class="cabinet appear">${progress()}
 <div class="cabinet-title-row"><div><span class="eyebrow">ISRAELI SECURITY CABINET / BRIEFING ${c.number}</span><h1>${escapeHTML(c.title)}</h1><p class="chapter-subtitle">${escapeHTML(c.subtitle)}</p></div><span class="cabinet-date">${c.year}</span></div>
 <div class="cabinet-layout">
   <aside class="cabinet-col intel-col"><div class="dossier"><span class="intel-tag">TOP SECRET · HISTORICAL FILE</span><h3>THE SITUATION</h3>${c.context.map((x,i)=>`<div class="item"><b>0${i+1}</b><span>${escapeHTML(x)}</span></div>`).join('')}</div><div class="contextphoto"><img src="assets/${c.archive}" alt="Archival slide about ${escapeHTML(c.title.toLowerCase())}"><div class="captionbar">ARCHIVE MATERIAL · ${c.year}<br>${escapeHTML(c.archiveLabel)}</div></div></aside>
   <div class="cabinet-col map-col"><section class="map-display" aria-label="Animated illustrative northern border map"><div class="map-header"><strong>◉ NORTHERN SECTOR MAP</strong><span>INTELLIGENCE DISPLAY / ${c.year}</span></div><div class="map-frame map-anim-enter ${state.mapOverlay?'organisation':state.mapAmal?'amal':''}" id="mapFrame"><img src="assets/map_base.webp" alt="Terrain map showing Lebanon and northern Israel"><img class="map-overlay-image" src="assets/${c.map}" alt="Illustrative armed organisation overlay"><img class="map-overlay-amal" src="assets/map_amal.webp" alt="Illustrative Amal context map"><svg class="map-routes" viewBox="0 0 1000 563" preserveAspectRatio="none" aria-hidden="true"><path class="${c.year==='2000'?'return':''}" d="${c.route}"></path></svg><div class="map-vignette"></div><div class="map-scan"></div><span class="map-label lebanon">🇱🇧 LEBANON</span><span class="map-label israel">🇮🇱 ISRAEL</span>${c.markers.map(m=>`<span class="map-pin ${m.tone}" style="left:${m.x}%;top:${m.y}%" data-label="${escapeHTML(m.label)}"></span>`).join('')}</div>
   <div class="map-legend"><div class="segmented"><button type="button" data-action="mapbase" class="${!state.mapOverlay&&!state.mapAmal?'active':''}" aria-pressed="${!state.mapOverlay&&!state.mapAmal}">TERRAIN</button><button type="button" data-action="maporg" class="${state.mapOverlay?'active':''}" aria-pressed="${state.mapOverlay}">HISTORICAL OVERLAY</button>${(c.year==='1982'||c.year==='2000')?`<button type="button" data-action="mapamal" class="${state.mapAmal?'active':''}" aria-pressed="${state.mapAmal}">AMAL CONTEXT</button>`:''}</div><span class="map-note">Schematic positions, not exact operational data</span></div></section>
   <div class="map-cue"><b>INTEL ${state.cue+1}/3</b><span>${escapeHTML(c.mapCues[state.cue])}</span><button type="button" class="btn btn-small" style="margin-left:auto;min-width:90px" data-action="nextcue">NEXT →</button></div><div class="cabinet-task"><strong>YOUR CABINET MISSION</strong><p>${escapeHTML(c.objective)}</p></div></div>
   <aside class="cabinet-col adviser-col">${renderAdviser(c.military,'military')}${renderAdviser(c.diplomatic,'diplomatic')}</aside>
 </div>
 <section class="decision-area"><div class="decision-heading"><div><span class="section-kicker">PRIME MINISTER · YOUR DECISION</span><h2>${escapeHTML(c.question)}</h2></div><span class="pill pill-gold">CHOOSE ONE OPTION</span></div><div class="decision-grid">${c.choices.map((o,i)=>`<button type="button" class="decision-choice" data-action="choose" data-choice="${i}"><span class="choice-letter">${String.fromCharCode(65+i)}</span><span class="choice-text"><strong>${escapeHTML(o.title)}</strong><small>${escapeHTML(o.detail)}</small></span></button>`).join('')}</div><p class="cabinet-warning">There is no single perfect answer. Consider civilian safety, military security and diplomacy. Your choice will not change historical events.</p></section>
 </section>`;}
function renderConsequence(){let c=chapter(), idx=state.chosen[state.chapter],o=c.choices[idx];const labels=['CIVILIAN SAFETY','SECURITY','DIPLOMACY'];const sym=['◎','◇','◈'];return `<section class="consequence appear"><div class="result-topline"><span class="eyebrow">CABINET DECISION RECORDED / ${c.year}</span><span class="pill pill-blue">CHAPTER ${c.number} / 05</span></div><span class="section-kicker">SIMULATED CONSEQUENCES</span><h1 class="result-heading">THE <em>TRADEOFFS</em></h1><p class="result-intro">Prime Minister, your cabinet has selected a course of action. Every option carries potential benefits and risks.</p>
 <div class="decision-recap"><strong>YOUR DECISION · OPTION ${String.fromCharCode(65+idx)}</strong><p>${escapeHTML(o.title)} · ${escapeHTML(o.detail)}</p></div>
 <div class="impact-grid">${o.impacts.map((t,i)=>`<article class="impact ${['safety','security','diplomacy'][i]}"><div class="impact-head"><span>${labels[i]}</span><b>${sym[i]}</b></div><p>${escapeHTML(t)}</p></article>`).join('')}</div>
 <p class="result-note"><strong>Cabinet discussion:</strong> ${escapeHTML(o.reflection)}<br>These are teaching prompts about possible risks, not predictions of an alternative history.</p>
 <div class="result-actions"><button class="btn btn-primary" data-action="reveal">WHAT REALLY HAPPENED? →</button><button class="btn btn-ghost" data-action="rethink">RECONSIDER MY DECISION</button></div></section>`;}
function renderReveal(){let c=chapter(),idx=state.chosen[state.chapter],o=c.choices[idx];return `<section class="reveal appear">${progress()}<div class="result-topline"><span class="eyebrow">DECLASSIFIED · THE HISTORICAL RECORD</span><span class="pill pill-green">HISTORY REVEALED</span></div>
 <h1 class="result-heading">WHAT REALLY <em>HAPPENED?</em></h1><p class="result-intro">Your decision was <strong>${escapeHTML(o.title)}</strong>. Now compare that choice with the events that actually took place in ${c.year}.</p>
 <div class="reveal-grid"><article class="history-sheet"><div class="history-head"><span class="pill pill-gold">${c.year}</span><h2>${escapeHTML(c.title)}</h2></div>${c.history.map((t,i)=>`<div class="history-bullet"><b>${String(i+1).padStart(2,'0')}</b><p>${escapeHTML(t)}</p></div>`).join('')}<div class="history-takeaway"><strong>THE KEY LESSON</strong><br>${escapeHTML(c.takeaway)}</div></article>
 <aside><div class="history-image"><img src="assets/${c.archive}" alt="${escapeHTML(c.archiveLabel)}"><div class="image-caption">${escapeHTML(c.archiveLabel)}. Check image reuse permissions before public publication.</div></div><div class="reveal-links"><span class="section-kicker">IMPORTANT CONTEXT</span><p style="font-size:13px;margin:10px 0">${escapeHTML(c.nuance)}</p><span class="section-kicker">READ THE SOURCES</span>${listSources(c.sources)}</div></aside></div>
 <div class="reveal-actions"><button class="btn btn-primary" data-action="advance">${state.chapter<4?'CONTINUE TO '+CHAPTERS[state.chapter+1].year:'VIEW FINAL HISTORICAL BRIEFING'} →</button><button class="btn btn-ghost" data-action="sources">ALL SOURCES &amp; CREDITS</button></div></section>`;}
function renderFinal(){return `<section class="final-screen appear"><div class="final-hero"><span class="eyebrow">THE CABINET SESSION HAS ENDED</span><h1>FIVE CRISES.<br><span>ONE BORDER.</span></h1><p>${state.player?'Prime Minister '+escapeHTML(state.player)+', y':'Y'}ou have examined five decisions facing successive Israeli governments. Compare your choices with the historical events below.</p></div>
 <div class="final-timeline">${CHAPTERS.map((c,i)=>{let n=state.chosen[i],selected=Number.isInteger(n)?c.choices[n].title:'Not played';return `<article class="final-step"><div class="final-year">${c.year}</div><h3>${escapeHTML(c.title)}</h3><strong>YOUR DECISION</strong><p>${escapeHTML(selected)}</p><strong>HISTORICAL OUTCOME</strong><p>${escapeHTML(c.takeaway)}</p></article>`}).join('')}</div>
 <div class="final-questions"><span class="section-kicker">FINAL CABINET REFLECTION</span><h2>WHAT WOULD YOU TAKE INTO THE NEXT CRISIS?</h2><ol><li>Why did Israel repeatedly become involved in military operations in Lebanon?</li><li>Why did withdrawing from Lebanon not necessarily end the threat?</li><li>How can leaders compare military success with a lasting political and diplomatic outcome?</li></ol><p class="small-muted">Our decisions involved real choices and real risks. The simulated alternatives cannot tell us exactly what would have happened.</p></div>
 <div class="final-actions"><button class="btn btn-primary" data-action="download">DOWNLOAD MY CABINET RECORD ↓</button><button class="btn btn-gold" data-action="restart">RESTART THE GAME ↺</button><a class="btn" href="educator_guide.html" target="_blank" rel="noopener">EDUCATOR GUIDE ↗</a></div></section>`;}
function showModal(type){lastFocus=document.activeElement;const modal=$('#modalRoot');let content='';
 if(type==='howto')content=`<span class="section-kicker">BEFORE YOU BEGIN</span><h2>HOW TO PLAY</h2><p>You are Israel’s Prime Minister. The historical setting changes in each chapter.</p><ol><li>Read the short security briefing and study the animated map.</li><li>Listen to the military and diplomatic advisers. Their words are <strong>educational reconstructions</strong>.</li><li>Choose one of three cabinet decisions. Think about civilian safety, security and diplomacy.</li><li>Review the possible tradeoffs, then select <strong>What Really Happened?</strong> to learn the actual outcome.</li><li>After five chapters, compare your choices with history. You can save a record of your decisions.</li></ol><p><strong>Example:</strong> In 2000, you might choose to withdraw from southern Lebanon. The game will explain the potential risks and then show what Israel actually did.</p><p>No points, no countdown and no rewriting history. Each chapter takes approximately two minutes.</p><div class="action-row"><button class="btn btn-primary" data-modal="close">UNDERSTOOD ✓</button></div>`;
 if(type==='sources')content=`<span class="section-kicker">RESEARCH &amp; IMAGE CREDITS</span><h2>SOURCES &amp; CREDITS</h2><p>The historical record draws on UN documentation, institutional research, and a supplied StandWithUs UK presentation. The choices and adviser dialogue are educational reconstructions.</p><div class="reveal-links">${listSources(Object.keys(SOURCES))}</div><p><strong>Map assets:</strong> the four maps supplied for this activity. They are illustrative, and movement markers are schematic.</p><p><strong>Archive images:</strong> extracted from the user supplied Northern Arrows presentation. Some source slides contain third party photographs or news imagery. Publication permission must be checked before deploying the images to a public website.</p><p><strong>Branding:</strong> StandWithUs UK and Explore artwork supplied from the user’s prior materials.</p><div class="action-row"><button class="btn btn-primary" data-modal="close">CLOSE</button></div>`;
 if(type==='restart')content=`<span class="section-kicker">RESET ALL DECISIONS</span><h2>RESTART THE GAME?</h2><p>This will clear your current cabinet record and return to the welcome screen.</p><div class="action-row"><button class="btn btn-gold" data-modal="confirmrestart">YES, RESTART</button><button class="btn" data-modal="close">KEEP PLAYING</button></div>`;
 modal.innerHTML=`<div class="dialog" role="dialog" aria-modal="true" aria-label="${type==='howto'?'How to play':type==='restart'?'Restart game':'Sources and credits'}"><button type="button" class="close-modal" aria-label="Close dialogue" data-modal="close">×</button>${content}</div>`;
 $('.close-modal',modal).focus();state.modal=type;document.body.style.overflow='hidden';}
function closeModal(){state.modal=null;$('#modalRoot').innerHTML='';document.body.style.overflow='';if(lastFocus && lastFocus.isConnected)lastFocus.focus();}
function setScreen(s){state.screen=s;state.cue=0;state.mapOverlay=false;state.mapAmal=false;render();}
function restart(){closeModal();state.chapter=0;state.chosen={};state.player='';setScreen('welcome');}
function soundToggle(){state.sound=!state.sound;const button=$('#soundToggle');button.setAttribute('aria-pressed',String(state.sound));$('.sound-word',button).textContent=state.sound?'SOUND ON':'SOUND OFF';if(state.sound)startAmbience();else stopAmbience();}
function startAmbience(){try{const AudioContext=window.AudioContext||window.webkitAudioContext;if(!AudioContext)return;if(!audioCtx)audioCtx=new AudioContext();audioCtx.resume();if(oscillators.length)return;const master=audioCtx.createGain();master.gain.value=.015;master.connect(audioCtx.destination);const notes=[65.41,98.0];notes.forEach((freq,i)=>{const osc=audioCtx.createOscillator(),gain=audioCtx.createGain();osc.type=i?'sine':'triangle';osc.frequency.value=freq;gain.gain.value=i?.18:.42;osc.connect(gain);gain.connect(master);osc.start();oscillators.push(osc)});}catch(e){console.warn('Audio unavailable',e);}}
function stopAmbience(){oscillators.forEach(o=>{try{o.stop()}catch(e){}});oscillators=[];if(audioCtx){audioCtx.close().catch(()=>{});audioCtx=null;}}
function downloadRecord(){const student=state.player?`${state.player}\n`:'';let out=`NORTHERN FRONT: THE SECURITY CABINET\nExplore Programme | StandWithUs UK\n${student}Educational record | ${new Date().toLocaleDateString('en-GB')}\n\n`;
 CHAPTERS.forEach((c,i)=>{let n=state.chosen[i];out+=`${c.year}: ${c.title}\nYour decision: ${Number.isInteger(n)?c.choices[n].title:'Not selected'}\nHistorical summary: ${c.history.join(' ')}\n\n`});
 out+='REFLECTION QUESTIONS\n1. Why did Israel repeatedly become involved in military operations in Lebanon?\n2. Why did withdrawal not necessarily end the threat?\n3. How do military, civilian and diplomatic priorities compete?\n\nNOTE: Decisions and adviser dialogue are educational reconstructions. The record is not an account of alternative history.\nSources: see SOURCES.md in the game package.\n';
 try{const blob=new Blob([out],{type:'text/plain;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='NorthernFront_Cabinet_Record.txt';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);}catch(e){alert('The record could not be downloaded in this browser.');}}
function setMapMode(mode){
 state.mapOverlay=mode==='maporg';state.mapAmal=mode==='mapamal';
 const frame=$('#mapFrame');frame.classList.toggle('organisation',state.mapOverlay);frame.classList.toggle('amal',state.mapAmal);const note=$('.map-note');if(note)note.textContent=state.mapAmal?'Amal was distinct from Hezbollah. Symbolic overlay only.':'Schematic positions, not exact operational data';
 $$('.segmented button').forEach(b=>{let selected=b.dataset.action===mode;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});
}
function handleAction(action,el){
 switch(action){
  case 'howto':showModal('howto');break;
  case 'start':{const input=$('#playerName');state.player=(input?.value||'').trim().slice(0,34);state.chapter=0;state.chosen={};setScreen('intro');break;}
  case 'enter':setScreen('cabinet');break;
  case 'choose':{let n=Number(el.dataset.choice);if(n<0||n>=chapter().choices.length)return;state.chosen[state.chapter]=n;setScreen('consequence');break;}
  case 'rethink':setScreen('cabinet');break;
  case 'reveal':setScreen('reveal');break;
  case 'advance':{if(state.chapter<CHAPTERS.length-1){state.chapter++;setScreen('intro')}else setScreen('final');break;}
  case 'nextcue':state.cue=(state.cue+1)%chapter().mapCues.length;render();break;
  case 'mapbase':setMapMode('mapbase');break;
  case 'maporg':setMapMode('maporg');break;
  case 'mapamal':setMapMode('mapamal');break;
  case 'sources':showModal('sources');break;
  case 'restart':showModal('restart');break;
  case 'download':downloadRecord();break;
 }
}
document.addEventListener('click',event=>{
 const modalAction=event.target.closest('[data-modal]');if(modalAction){if(modalAction.dataset.modal==='confirmrestart')restart();else closeModal();return;}
 const action=event.target.closest('[data-action]');if(action){handleAction(action.dataset.action,action);return;}
 if(event.target.id==='modalRoot'&&state.modal)closeModal();
});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&state.modal){e.preventDefault();closeModal();}if(e.key==='Enter'&&state.screen==='welcome'&&document.activeElement?.id==='playerName'){e.preventDefault();handleAction('start',null);}});
$('#soundToggle').addEventListener('click',soundToggle);
$('#classroomToggle').addEventListener('click',()=>{state.classroom=!state.classroom;document.body.classList.toggle('classroom',state.classroom);$('#classroomToggle').setAttribute('aria-pressed',String(state.classroom));});
$('#sourceFooter').addEventListener('click',()=>showModal('sources'));
$('#homeLink').addEventListener('click',e=>{if(state.screen!=='welcome'){e.preventDefault();showModal('restart');}});
render();
