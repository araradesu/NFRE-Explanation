const notebookPages = [
  { page: 1, title: '日記', anomaly: false, body: ['今日は朝からよく晴れていた。いつもより少し早く家を出たので、学校にも余裕をもって着いた。', '教室へ入ると、友達が窓を開けていた。席に座り、始業まで本を読んで待った。'], reason: '文章の流れに異変はない。' },
  { page: 2, title: '生き物係', anomaly: true, body: ['昼休みに水槽の水を少し入れ替えた。魚は元気に泳いでいた。', '昼休みに水槽の水を少し入れ替えた。魚は元気に泳いでいた。'], reason: 'まったく同じ文章が二度書かれている。' },
  { page: 3, title: '掃除', anomaly: false, body: ['机を後ろへ運んでから、床をほうきで掃いた。集めたごみはちりとりへ入れた。', '最後に机を元の場所へ戻し、窓を閉めて掃除を終えた。'], reason: '文章の流れに異変はない。' },
  { page: 4, title: '朝の会', anomaly: true, body: ['日直が前に出て、きょおの予定をせつめいした。みんなはしずかに話をきいいた。', 'れんらくじこうをかくににんしてから、朝の会をおわた。'], reason: '「きょお」「きいいた」「かくににん」「おわた」など、誤字が大量にある。' },
  { page: 5, title: '図書室', anomaly: false, body: ['借りていた本を返却台へ置き、新しい本を一冊選んだ。', '貸出の手続きを済ませ、本をかばんに入れて教室へ戻った。'], reason: '文章の流れに異変はない。' },
  { page: 6, title: '図書室', anomaly: true, body: ['本棚から物語の本を一冊選び、窓際の席で読み始めた。', '主人公が森へ入ったところで、じゃがいもを薄く切り、油をひいたフライパンで焼く。', '続きが気になったので、しおりを挟んで本を閉じた。'], reason: '読書の話の途中で、突然料理の手順に変わっている。' },
  { page: 7, title: '買い物', anomaly: false, body: ['帰りに店へ寄り、牛乳とパンをかごへ入れた。', '会計を済ませて商品を袋へ入れ、忘れ物がないか確認して店を出た。'], reason: '文章の流れに異変はない。' },
  { page: 8, title: '一週間の予定', anomaly: true, body: ['一週間は月曜日、火曜日、水曜日の三日間でできている。', '水曜日が終わると、次の一週間が始まる。'], reason: '一週間が三日しかないという、明らかな嘘が書かれている。' },
  { page: 9, title: '給食', anomaly: false, body: ['当番が机を拭き、食器とおかずを順番に配った。', '全員の準備ができてから、あいさつをして食べ始めた。'], reason: '文章の流れに異変はない。' },
  { page: 10, title: '天気', anomaly: true, body: ['朝から雲一つない青空で、雨は一滴も降らなかった。', '傘を差していても服がぬれるほど、一日中激しい雨が降り続いた。'], reason: '同じ一日の天気について、晴れと大雨という矛盾したことが書かれている。' },
  { page: 11, title: '遠足', anomaly: false, body: ['集合場所で人数を確認し、列になって公園まで歩いた。', '昼食の後はごみを持ち帰り、帰る前にもう一度人数を確認した。'], reason: '文章の流れに異変はない。' },
  { page: 12, title: '準備の手順', anomaly: true, body: ['1．机の上を片づける。', '2．必要な道具をかばんから出す。', '4．先生の合図を待つ。'], reason: '手順の番号が1、2、4となっており、3が抜けている。' },
  { page: 13, title: '朝の準備', anomaly: false, body: ['目覚まし時計が鳴ったので起き、顔を洗って着替えた。', '朝食を食べ、持ち物を確認してから家を出た。'], reason: '文章の流れに異変はない。' },
  { page: 14, title: '待ち合わせ', anomaly: true, body: ['美咲さんは駅前で健太さんを待っていた。', 'しばらくすると健太さんが来たので、美咲さんは翔太さんと一緒に歩き始めた。'], reason: '待っていた相手は健太さんなのに、突然翔太さんへ変わっている。' },
  { page: 15, title: '放課後', anomaly: false, body: ['授業が終わった後、黒板を消して教科書をかばんへ入れた。', '友達にあいさつをしてから、昇降口へ向かった。'], reason: '文章の流れに異変はない。' },
  { page: 16, title: '連絡事項', anomaly: true, body: ['明日のしゅうごうじこくは、午前はちじです。おくれなないように気をつけてくだい。', 'もちものは、すいとうと筆記よぐです。'], reason: '「おくれなない」「くだい」「筆記よぐ」など、誤字が大量にある。' },
  { page: 17, title: '係活動', anomaly: false, body: ['休み時間に掲示物の端をテープで留め直した。', '曲がっていないか少し離れて確認し、使った道具を棚へ戻した。'], reason: '文章の流れに異変はない。' },
  { page: 18, title: '係活動', anomaly: true, body: ['掲示板に今月の予定表を貼り、画びょうが外れないか確認した。', '次にロケットの燃料を満タンにし、月へ向けて発射した。', '使ったはさみとテープは、元の棚へ戻した。'], reason: '掲示物を貼る話の途中で、突然ロケットを打ち上げている。' },
  { page: 19, title: '雨の日', anomaly: false, body: ['家を出る前に雨が降っていたので、傘を持って出かけた。', '建物へ入るときは、傘の水をよく切って傘立てへ入れた。'], reason: '文章の流れに異変はない。' },
  { page: 20, title: 'ねこの観察', anomaly: true, body: ['庭に白いねこが一匹やって来た。ねこは日当たりのよい場所で丸くなった。', 'しばらくすると卵を三個産み、その卵から小さなねこがすぐに生まれた。'], reason: 'ねこが卵を産むという、明らかな嘘が書かれている。' },
  { page: 21, title: '体育祭', anomaly: false, body: ['開会式の後、学年ごとに決められた場所へ移動した。', '競技が終わるたびに得点を確認し、最後に全員で片づけをした。'], reason: '文章の流れに異変はない。' },
  { page: 22, title: '下校', anomaly: true, body: ['靴を履き替え、忘れ物がないか確認して校門を出た。', '靴を履き替え、忘れ物がないか確認して校門を出た。'], reason: 'まったく同じ文章が二度書かれている。' },
  { page: 23, title: '料理', anomaly: false, body: ['野菜をよく洗い、食べやすい大きさに切った。', '鍋で火を通してから味を整え、器へ盛り付けた。'], reason: '文章の流れに異変はない。' },
  { page: 24, title: '冷たい物', anomaly: true, body: ['冷凍庫から氷を取り出した。', 'その氷は触れないほど熱く、上に置いた紙がすぐ燃え始めた。'], reason: '冷凍庫から出した氷が紙を燃やすほど熱いという、明らかな嘘が書かれている。' },
  { page: 25, title: '忘れ物', anomaly: false, body: ['教室を出る前に、机の中とロッカーを確認した。', '水筒を置き忘れていたので、かばんへ入れてから帰った。'], reason: '文章の流れに異変はない。' },
  { page: 26, title: '今日の記録', anomaly: true, body: ['きょうは校ていでボールをつかた。遠くまでなげられたので、うれしかた。', 'おわったあと、みんあで道具をかたずけた。'], reason: '「つかた」「うれしかた」「みんあ」「かたずけた」など、誤字が大量にある。' },
  { page: 27, title: '美化活動', anomaly: false, body: ['花壇の周りに落ちていた紙くずを拾い、袋へ集めた。', '道具を洗って元の場所へ戻し、手を洗って活動を終えた。'], reason: '文章の流れに異変はない。' },
  { page: 28, title: '美化活動', anomaly: true, body: ['校庭の落ち葉を集め、いくつかの袋に分けて入れた。', '大きな鍋へ砂糖と卵を入れ、泡立て器でよく混ぜる。', '最後にほうきとちりとりを倉庫へ戻した。'], reason: '掃除の話の途中で、突然お菓子作りの手順に変わっている。' },
  { page: 29, title: '読書', anomaly: false, body: ['休み時間に短い物語を読み、気になった場面へしおりを挟んだ。', '読み終わった後、感想をノートに二行書いた。'], reason: '文章の流れに異変はない。' },
  { page: 30, title: '本の返却', anomaly: true, body: ['図書室から本を十冊借りた。', '読み終わったので、借りた本を十二冊すべて返却した。'], reason: '十冊しか借りていないのに、十二冊返している。' },
  { page: 31, title: '植物係', anomaly: false, body: ['土の表面が乾いていたので、じょうろで少しずつ水をやった。', '鉢の向きを変え、葉が重なりすぎていないか確認した。'], reason: '文章の流れに異変はない。' },
  { page: 32, title: '昨日の出来事', anomaly: true, body: ['昨日、友達と公園で遊ぶ約束をした。', '約束の時間は明日の午後だったので、昨日のうちに明日の公園へ行って遊んだ。'], reason: '昨日の出来事なのに、まだ来ていない明日の公園へ行ったことになっている。' },
  { page: 33, title: '音楽会', anomaly: false, body: ['舞台へ上がる前に、並ぶ順番と立つ位置を確認した。', '演奏が終わった後は、客席へ向かって礼をしてから退場した。'], reason: '文章の流れに異変はない。' },
  { page: 34, title: '持ち物確認', anomaly: true, body: ['筆箱、水筒、ノートを机の上に並べた。', '筆箱、水筒、ノートを机の上に並べた。'], reason: 'まったく同じ文章が二度書かれている。' },
  { page: 35, title: '工作', anomaly: false, body: ['厚紙に定規で線を引き、その線に沿ってはさみで切った。', '切った部品をのりで貼り、乾くまで動かさずに置いた。'], reason: '文章の流れに異変はない。' },
  { page: 36, title: '工作', anomaly: true, body: ['あつがみをせんにそて切り、のりで部ひんをはりつけけた。', 'かわくまて手でおさえ、かんせしたら名前をかた。'], reason: '「そて」「はりつけけた」「かわくまて」「かんせ」「かた」など、誤字が大量にある。' },
  { page: 37, title: '席替え', anomaly: false, body: ['黒板に新しい座席表が貼られたので、自分の番号を探した。', '机といすを新しい場所へ運び、通路をふさがないように並べた。'], reason: '文章の流れに異変はない。' },
  { page: 38, title: '席替え', anomaly: true, body: ['新しい席の番号を確認し、机を窓側へ運んだ。', '海底を泳ぐ巨大な魚を追いかけ、宝箱から金色の鍵を取り出した。', '最後にいすの高さを調整した。'], reason: '席替えの話の途中で、突然海底の冒険に変わっている。' },
  { page: 39, title: '帰宅', anomaly: false, body: ['校門を出て、いつもの道を歩いて家へ帰った。', '玄関で靴をそろえ、手を洗ってから荷物を部屋へ置いた。'], reason: '文章の流れに異変はない。' },
  { page: 40, title: '帰り道', anomaly: true, body: ['学校から家までは歩いて二十分かかる。', '今日は一歩も歩かず、その場から動かないまま徒歩で家へ着いた。'], reason: '一歩も歩かず、動かないまま徒歩で帰宅したという明らかな矛盾がある。' },
  { page: 41, title: '朝礼', anomaly: false, body: ['開始の合図で話をやめ、前を向いて先生の話を聞いた。', '連絡が終わった後、列の順番を守って教室へ戻った。'], reason: '文章の流れに異変はない。' },
  { page: 42, title: '時計', anomaly: true, body: ['時計の長い針が一周すると、一時間がたつ。', '一時間は十分なので、六時間でちょうど一時間になる。'], reason: '一時間が十分という、明らかな嘘が書かれている。' },
  { page: 43, title: '写真撮影', anomaly: false, body: ['全員が入るように二列に並び、前の人は少しかがんだ。', '撮影が終わるまで動かず、終わった後に並び方を戻した。'], reason: '文章の流れに異変はない。' },
  { page: 44, title: '貸し借り', anomaly: true, body: ['彩さんは、消しゴムを忘れた悠斗さんへ自分の消しゴムを貸した。', '授業の後、彩さんは健さんから消しゴムを返してもらった。'], reason: '消しゴムを貸した相手が、悠斗さんから健さんへ変わっている。' },
  { page: 45, title: '休み時間', anomaly: false, body: ['友達と次の授業の教室を確認し、必要な教科書を用意した。', '残った時間は席で話し、予鈴が鳴る前に自分の場所へ戻った。'], reason: '文章の流れに異変はない。' },
  { page: 46, title: '休み時間', anomaly: true, body: ['ともだちと校ていへ行き、ボールをけてあそんだ。', 'よれいがなったので、いそいで教しつにもどつた。'], reason: '「けて」「よれい」「教しつ」「もどつた」など、誤字が大量にある。' },
  { page: 47, title: '道案内', anomaly: false, body: ['校門を出て右へ曲がり、最初の信号までまっすぐ進む。', '信号を左へ曲がると、図書館が右側に見える。'], reason: '文章の流れに異変はない。' },
  { page: 48, title: '方角', anomaly: true, body: ['地図の上側を北、下側を南として見る。', '北と南はまったく同じ方角なので、どちらへ進んでも必ず同じ場所へ着く。'], reason: '北と南が同じ方角だという、明らかな嘘が書かれている。' },
  { page: 49, title: '運動会の準備', anomaly: false, body: ['白線に沿って目印を置き、競技で使う道具を順番に並べた。', '準備が終わった後、危ない物が落ちていないか全員で確認した。'], reason: '文章の流れに異変はない。' },
  { page: 50, title: '運動会の準備', anomaly: true, body: ['校庭へコーンと旗を運び、決められた場所へ置いた。', '小麦粉へ牛乳を少しずつ加え、だまにならないようによく混ぜる。', '準備した道具の数を確認し、倉庫の鍵を閉めた。'], reason: '運動会の準備の途中で、突然料理の手順に変わっている。' }
];

const roundSeconds = 15;

function createBonusView() {
  const container = document.createElement('div');
  container.innerHTML = `
    <header class="bonus-page-header">
      <p>11月祭謎解き試験・おまけ謎</p>
      <h1>ノート異変探し</h1>
      <a href="./">問題解説へ戻る</a>
    </header>
    <main class="bonus-page-main" data-bonus-game>
      <section class="bonus-intro">
        <p>ランダムに現れるノートを読み、文章に異変があるかどうかを見極めてください。知識ではなく、文章そのものをよく見るゲームです。</p>
        <ul class="bonus-game-rules">
          <li>1ページの制限時間は<strong>15秒</strong></li>
          <li>時間切れ、または1回の誤答で<strong>即終了</strong></li>
          <li>正解したページ数がスコアになります</li>
        </ul>
      </section>
      <section class="bonus-game-panel" aria-label="ノート異変探しゲーム">
        <div class="bonus-game-scoreboard" aria-label="スコア">
          <div><span>現在</span><strong data-bonus-score>0ページ</strong></div>
          <div><span>最高</span><strong data-bonus-best>0ページ</strong></div>
          <div><span>残り</span><strong><b data-bonus-timer>15.0</b>秒</strong></div>
        </div>
        <div class="bonus-game-timer-track" aria-hidden="true"><span data-bonus-timer-bar></span></div>
        <div class="bonus-notebook-stage" data-bonus-notebook-stage>
          <article class="bonus-notebook is-cover" data-bonus-notebook aria-live="off">
            <div class="bonus-notebook-meta"><span>Page : <b data-bonus-page-number>—</b></span><span>Date :</span></div>
            <h2 data-bonus-page-title>ノート異変探し</h2>
            <div class="bonus-notebook-copy" data-bonus-page-body>
              <p>「挑戦を始める」を押すと、1ページ目が開きます。</p>
            </div>
            <span class="bonus-notebook-page-mark" aria-hidden="true">NOTE</span>
          </article>
        </div>
        <p class="bonus-game-status" data-bonus-status aria-live="polite">準備ができたら開始してください。</p>
        <div class="bonus-game-actions">
          <button class="bonus-game-answer" type="button" data-bonus-answer="no" disabled><span>異変なし</span><small>横にめくる</small></button>
          <button class="bonus-game-answer bonus-game-answer-yes" type="button" data-bonus-answer="yes" disabled><span>異変あり</span><small>下に破る</small></button>
        </div>
        <button class="bonus-game-start" type="button" data-bonus-start>挑戦を始める</button>
        <div class="bonus-game-result" data-bonus-result aria-live="polite" hidden>
          <span>今回の記録</span>
          <strong data-bonus-result-score>0ページ正解</strong>
          <p data-bonus-result-message></p>
          <p class="bonus-game-result-answer" data-bonus-result-answer></p>
        </div>
      </section>
    </main>
  `;
  return container;
}

function setupGame(container) {
  const game = container.querySelector('[data-bonus-game]');
  const startButton = game?.querySelector('[data-bonus-start]');
  const answerButtons = Array.from(game?.querySelectorAll('[data-bonus-answer]') ?? []);
  const notebookStage = game?.querySelector('[data-bonus-notebook-stage]');
  const notebook = game?.querySelector('[data-bonus-notebook]');
  const pageNumber = game?.querySelector('[data-bonus-page-number]');
  const pageTitle = game?.querySelector('[data-bonus-page-title]');
  const pageBody = game?.querySelector('[data-bonus-page-body]');
  const scoreText = game?.querySelector('[data-bonus-score]');
  const bestText = game?.querySelector('[data-bonus-best]');
  const timerText = game?.querySelector('[data-bonus-timer]');
  const timerBar = game?.querySelector('[data-bonus-timer-bar]');
  const status = game?.querySelector('[data-bonus-status]');
  const result = game?.querySelector('[data-bonus-result]');
  const resultScore = game?.querySelector('[data-bonus-result-score]');
  const resultMessage = game?.querySelector('[data-bonus-result-message]');
  const resultAnswer = game?.querySelector('[data-bonus-result-answer]');

  let deck = [];
  let currentPage = null;
  let score = 0;
  let bestScore = 0;
  let isRunning = false;
  let acceptingAnswer = false;
  let timerFrame = 0;
  let revealToken = 0;
  let displayPageNumber = 0;
  let pointerStart = null;

  try {
    bestScore = Math.max(0, Number.parseInt(localStorage.getItem('nfre-bonus-notebook-best') ?? '0', 10) || 0);
  } catch {
    bestScore = 0;
  }

  const updateScore = () => {
    if (scoreText) scoreText.textContent = `${score}ページ`;
    if (bestText) bestText.textContent = `${bestScore}ページ`;
  };

  const setAnswersEnabled = enabled => {
    answerButtons.forEach(button => { button.disabled = !enabled; });
  };

  const shuffledPages = () => {
    const pages = [...notebookPages];
    for (let i = pages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pages[i], pages[j]] = [pages[j], pages[i]];
    }
    if (currentPage && pages.length > 1 && pages[pages.length - 1].page === currentPage.page)
      [pages[0], pages[pages.length - 1]] = [pages[pages.length - 1], pages[0]];
    return pages;
  };

  const drawPage = () => {
    if (deck.length === 0) deck = shuffledPages();
    return deck.pop();
  };

  const renderPage = (page, number = displayPageNumber) => {
    if (pageNumber) pageNumber.textContent = String(number);
    if (pageTitle) pageTitle.textContent = page.title;
    if (pageBody) {
      pageBody.replaceChildren(...page.body.map(paragraph => {
        const element = document.createElement('p');
        element.textContent = paragraph;
        return element;
      }));
    }
  };

  const stopTimer = () => {
    if (timerFrame) cancelAnimationFrame(timerFrame);
    timerFrame = 0;
  };

  const saveBest = () => {
    if (score <= bestScore) return;
    bestScore = score;
    try { localStorage.setItem('nfre-bonus-notebook-best', String(bestScore)); } catch { /* 保存不可でも続行 */ }
  };

  const finishGame = cause => {
    if (!isRunning) return;
    isRunning = false;
    acceptingAnswer = false;
    revealToken++;
    stopTimer();
    setAnswersEnabled(false);
    saveBest();
    updateScore();
    if (timerBar) timerBar.style.width = '0%';
    if (status) status.textContent = cause === 'timeout' ? '時間切れです。' : '判定を間違えました。';
    if (resultScore) resultScore.textContent = `${score}ページ正解`;
    if (resultMessage) resultMessage.textContent = cause === 'timeout' ? '15秒以内に判定できませんでした。' : '異変の判定が違っていました。';
    if (resultAnswer && currentPage)
      resultAnswer.textContent = `このページは「異変${currentPage.anomaly ? 'あり' : 'なし'}」。${currentPage.reason}`;
    if (result) result.hidden = false;
    if (startButton) {
      startButton.disabled = false;
      startButton.textContent = 'もう一度挑戦する';
    }
  };

  const startTimer = () => {
    const deadline = performance.now() + roundSeconds * 1000;
    const tick = now => {
      if (!isRunning || !acceptingAnswer) return;
      const remaining = Math.max(0, deadline - now);
      const seconds = remaining / 1000;
      if (timerText) timerText.textContent = seconds.toFixed(1);
      if (timerBar) {
        timerBar.style.width = `${(remaining / (roundSeconds * 1000)) * 100}%`;
        timerBar.classList.toggle('is-warning', seconds <= 5);
      }
      if (remaining <= 0) {
        finishGame('timeout');
        return;
      }
      timerFrame = requestAnimationFrame(tick);
    };
    stopTimer();
    timerFrame = requestAnimationFrame(tick);
  };

  const wait = milliseconds => new Promise(resolve => window.setTimeout(resolve, milliseconds));

  const resetNotebookMotion = () => {
    notebook?.classList.remove('is-cover', 'is-turning-page', 'is-tearing-page', 'is-dragging');
    notebook?.style.removeProperty('--drag-x');
    notebook?.style.removeProperty('--drag-y');
    notebook?.style.removeProperty('--drag-rotate');
  };

  const revealNextPage = () => {
    if (!isRunning) return;
    ++revealToken;
    acceptingAnswer = false;
    setAnswersEnabled(false);
    resetNotebookMotion();
    currentPage = drawPage();
    displayPageNumber++;
    renderPage(currentPage, displayPageNumber);
    notebookStage?.style.setProperty('--page-depth', String(Math.min(displayPageNumber - 1, 6)));
    notebook?.setAttribute('aria-busy', 'false');
    notebook?.classList.add('is-ready');
    if (status) status.textContent = '横にめくると「異変なし」、下に破ると「異変あり」です。';
    if (timerText) timerText.textContent = roundSeconds.toFixed(1);
    if (timerBar) {
      timerBar.style.width = '100%';
      timerBar.classList.remove('is-warning');
    }
    acceptingAnswer = true;
    setAnswersEnabled(true);
    startTimer();
  };

  const submitAnswer = async answer => {
    if (!isRunning || !acceptingAnswer || !currentPage) return;
    acceptingAnswer = false;
    stopTimer();
    setAnswersEnabled(false);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    notebook?.classList.remove('is-ready', 'is-dragging');
    notebook?.classList.add(answer ? 'is-tearing-page' : 'is-turning-page');
    notebook?.setAttribute('aria-busy', 'true');
    if (status) status.textContent = answer ? 'ページを下へ破り捨てています。' : 'ページを横へめくっています。';
    await wait(reduceMotion ? 80 : answer ? 720 : 600);
    if (!isRunning) return;
    if (answer !== currentPage.anomaly) {
      resetNotebookMotion();
      finishGame('mistake');
      return;
    }
    score++;
    updateScore();
    revealNextPage();
  };

  const startGame = () => {
    revealToken++;
    stopTimer();
    deck = shuffledPages();
    currentPage = null;
    score = 0;
    displayPageNumber = 0;
    isRunning = true;
    acceptingAnswer = false;
    updateScore();
    if (result) result.hidden = true;
    if (startButton) {
      startButton.disabled = true;
      startButton.textContent = '挑戦中';
    }
    revealNextPage();
  };

  startButton?.addEventListener('click', startGame);
  answerButtons.forEach(button => button.addEventListener('click', () => { void submitAnswer(button.dataset.bonusAnswer === 'yes'); }));

  notebook?.addEventListener('pointerdown', event => {
    if (!acceptingAnswer || event.button !== 0) return;
    pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
    notebook.setPointerCapture(event.pointerId);
    notebook.classList.add('is-dragging');
  });

  notebook?.addEventListener('pointermove', event => {
    if (!pointerStart || pointerStart.id !== event.pointerId || !acceptingAnswer) return;
    const x = event.clientX - pointerStart.x;
    const y = Math.max(0, event.clientY - pointerStart.y);
    notebook.style.setProperty('--drag-x', `${x}px`);
    notebook.style.setProperty('--drag-y', `${y}px`);
    notebook.style.setProperty('--drag-rotate', `${Math.max(-4, Math.min(4, x / 30))}deg`);
  });

  const finishPointer = event => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const x = event.clientX - pointerStart.x;
    const y = event.clientY - pointerStart.y;
    pointerStart = null;
    notebook?.classList.remove('is-dragging');
    if (acceptingAnswer && y > 72 && Math.abs(x) < 90) {
      void submitAnswer(true);
      return;
    }
    if (acceptingAnswer && Math.abs(x) > 64 && Math.abs(y) < 80) {
      void submitAnswer(false);
      return;
    }
    notebook?.style.removeProperty('--drag-x');
    notebook?.style.removeProperty('--drag-y');
    notebook?.style.removeProperty('--drag-rotate');
  };

  notebook?.addEventListener('pointerup', finishPointer);
  notebook?.addEventListener('pointercancel', () => {
    pointerStart = null;
    resetNotebookMotion();
    if (isRunning && currentPage) notebook?.classList.add('is-ready');
  });
  updateScore();
  setAnswersEnabled(false);
}

if (notebookPages.length !== 50 || notebookPages.filter(page => page.anomaly).length !== 25)
  throw new Error('Bonus notebook page data is incomplete');

const app = document.getElementById('app');
if (!app) throw new Error('App container was not found');
const view = createBonusView();
app.appendChild(view);
setupGame(view);
