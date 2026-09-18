function asset(name) {
    return `./explanation/${name}`;
}
function picture(name, alt, caption, extraClass = '') {
    return `
    <figure class="explanation-figure ${extraClass}">
      <button class="explanation-image-button" type="button" data-explanation-image="${asset(name)}" aria-label="画像を拡大：${alt}">
        <img src="${asset(name)}" alt="${alt}" loading="lazy" decoding="async">
        <span class="explanation-zoom-hint" aria-hidden="true">画像を拡大</span>
      </button>
      <figcaption>${caption}</figcaption>
    </figure>
  `;
}
function flipCard(page, questionName, answerName, answer) {
    return `
    <article class="explanation-flip-item">
      <h3>${page}ページ</h3>
      <button
        class="explanation-flip-card"
        type="button"
        data-explanation-flip
        data-explanation-page="${page}"
        data-explanation-answer="${answer}"
        aria-pressed="false"
        aria-label="${page}ページの異変の答えを表示"
      >
        <span class="explanation-flip-card-inner">
          <span class="explanation-flip-face explanation-flip-front">
            <img src="${asset(questionName)}" alt="${page}ページ。異変の答えを隠した状態" loading="lazy" decoding="async">
          </span>
          <span class="explanation-flip-face explanation-flip-back" aria-hidden="true">
            <img src="${asset(answerName)}" alt="${page}ページ。異変の答えを色で示した状態" loading="lazy" decoding="async">
          </span>
        </span>
      </button>
      <p class="explanation-flip-status" data-explanation-flip-status aria-live="polite">画像をタップして答えを見る</p>
    </article>
  `;
}

const bonusNotebookPages = [
    { page: 1, title: '物理', anomaly: false, body: ['止まっている物体は、外から力を加えない限り止まり続ける。動いている物体も、同じ速さと向きで動き続けようとする。', 'この性質を慣性といい、乗り物が急に止まったとき、体が前へ動こうとするのもその一例である。'], reason: '内容に異変はない。慣性について正しく説明されている。' },
    { page: 2, title: '生物', anomaly: true, body: ['細胞は、生物の体をつくる基本的な単位である。多くの生物は、役割の異なる多数の細胞からできている。', '細胞は、生物の体をつくる基本的な単位である。多くの生物は、役割の異なる多数の細胞からできている。'], reason: '同じ文章が二度続けて書かれている。' },
    { page: 3, title: '数学', anomaly: false, body: ['比例では、一方の値が2倍、3倍になると、もう一方の値も同じように2倍、3倍になる。', '式では y=ax と表し、aを比例定数という。'], reason: '内容に異変はない。比例について正しく説明されている。' },
    { page: 4, title: '地理', anomaly: true, body: ['日本はユーラシア大陸の西側に位置する島国であり、太平洋には面していない。', '国土は北海道、本州、四国、九州と、多数の島々から構成されている。'], reason: '日本の位置が逆である。日本はユーラシア大陸の東側にあり、太平洋に面している。' },
    { page: 5, title: '国語', anomaly: false, body: ['文章の要点をつかむときは、繰り返し使われている言葉や、段落の最初と最後の文に注目するとよい。', '筆者の主張と、その理由や具体例を分けて整理することも大切である。'], reason: '内容に異変はない。文章読解の方法として自然である。' },
    { page: 6, title: '化学', anomaly: true, body: ['水は、水素と酸素からできている物質である。', '水を表す化学式は CO2 であり、常温では液体として存在する。'], reason: '水の化学式が間違っている。正しくはH2Oで、CO2は二酸化炭素である。' },
    { page: 7, title: '歴史', anomaly: false, body: ['江戸幕府は徳川家康によって開かれ、江戸を中心に政治が行われた。', '大名を統制するため、参勤交代などの制度が整えられた。'], reason: '内容に異変はない。江戸幕府について正しく説明されている。' },
    { page: 8, title: '英語', anomaly: true, body: ['英語では、過去の出来事を表すときに動詞を過去形にする。', 'goの過去形は goed、seeの過去形は saw である。'], reason: 'goの過去形が間違っている。正しくはwentである。' },
    { page: 9, title: '音楽', anomaly: false, body: ['楽譜に書かれた速度記号は、曲をどのくらいの速さで演奏するかを示している。', '曲の途中で速度が変わる場合は、その位置に新しい指示が書かれる。'], reason: '内容に異変はない。速度記号について正しく説明されている。' },
    { page: 10, title: '美術', anomaly: true, body: ['赤、橙、黄などは暖色と呼ばれ、あたたかい印象を与えやすい。', '一方、青と緑も暖色に分類され、炎や太陽を表すときによく使われる。'], reason: '青や緑は暖色ではなく、一般に寒色として扱われる。' },
    { page: 11, title: '保健', anomaly: false, body: ['十分な睡眠は、体の疲れを回復させるだけでなく、記憶の整理にも関係している。', '毎日できるだけ同じ時刻に起きると、生活のリズムを整えやすい。'], reason: '内容に異変はない。睡眠について自然な説明である。' },
    { page: 12, title: '情報', anomaly: true, body: ['コンピューターは、さまざまな情報を数値に置き換えて処理する。', '二進数では0、1、2の三つの数字を使って数を表す。'], reason: '二進数で使う数字は0と1の二つだけである。' },
    { page: 13, title: '公民', anomaly: false, body: ['国の権力を立法、行政、司法に分け、それぞれの機関が互いを抑制する仕組みを三権分立という。', '権力が一つの機関に集中することを防ぐ目的がある。'], reason: '内容に異変はない。三権分立について正しく説明されている。' },
    { page: 14, title: '家庭科', anomaly: true, body: ['調理の前には手を洗い、まな板や包丁を清潔にしておく。', '生肉を切ったまな板は、洗わずにそのままサラダ作りへ使うと効率がよい。'], reason: '生肉を扱った器具を洗わずに使い回している。衛生上危険である。' },
    { page: 15, title: '体育', anomaly: false, body: ['運動の前に準備運動を行うと、筋肉や関節を動かしやすくなり、けがの予防につながる。', '運動後は急に止まらず、軽く体を動かしながら呼吸を整えるとよい。'], reason: '内容に異変はない。運動前後の注意として自然である。' },
    { page: 16, title: '天文', anomaly: true, body: ['太陽は毎日、地球のまわりを一周している。', 'そのため地球上では、昼と夜が交互に訪れる。'], reason: '昼夜が生じる主な理由は地球の自転であり、太陽が地球を毎日一周しているわけではない。' },
    { page: 17, title: '環境', anomaly: false, body: ['ごみを減らす考え方として、リデュース、リユース、リサイクルがある。', 'まず不要な物を増やさず、使える物は繰り返し使うことが大切である。'], reason: '内容に異変はない。3Rについて正しく説明されている。' },
    { page: 18, title: '防災', anomaly: true, body: ['地震が起きたら、まず頭を守り、落下物や倒れそうな家具から離れる。', '高い階から避難するときは、停止する前に急いでエレベーターへ乗る。'], reason: '地震時の避難にエレベーターを使うのは危険である。原則として階段を使う。' },
    { page: 19, title: '図書', anomaly: false, body: ['図書館の本は、内容の分野ごとに分類され、記号を使って並べられている。', '分類記号を確認すると、同じ分野の本をまとめて探しやすい。'], reason: '内容に異変はない。図書の分類について正しく説明されている。' },
    { page: 20, title: '心理', anomaly: true, body: ['短期記憶は、一度覚えた情報を永久に保存する仕組みである。', 'そのため、短期記憶へ入った情報を忘れることはない。'], reason: '短期記憶は一時的な記憶であり、情報が永久に残るわけではない。' },
    { page: 21, title: '物理', anomaly: true, body: ['物体Aが物体Bを押すと、物体Bも物体Aを同じ大きさの力で押し返す。', 'この二つの力は同じ一つの物体に働くため、必ず打ち消し合う。'], reason: '作用と反作用は別々の物体に働くため、同じ物体上で打ち消し合うわけではない。' },
    { page: 22, title: '生物', anomaly: false, body: ['植物は、光のエネルギーを使って二酸化炭素と水から養分をつくる。', 'このとき酸素が生じる。このはたらきを光合成という。'], reason: '内容に異変はない。光合成について正しく説明されている。' },
    { page: 23, title: '数学', anomaly: true, body: ['三角形の三つの内角をすべて足すと、どのような形の三角形でも200度になる。', '一つの角が分からないときは、200度から残りの二つの角を引けばよい。'], reason: '三角形の内角の和は200度ではなく180度である。' },
    { page: 24, title: '地理', anomaly: false, body: ['地形図の等高線は、海面から同じ高さの地点を結んだ線である。', '等高線の間隔が狭い場所ほど、一般に斜面は急である。'], reason: '内容に異変はない。等高線について正しく説明されている。' },
    { page: 25, title: '国語', anomaly: true, body: ['物語の構成を四つに分けて考える方法を、起承転結という。', '出来事は「起・転・承・結」の順で進む。'], reason: '起承転結の順番が「起・転・承・結」に入れ替わっている。' },
    { page: 26, title: '化学', anomaly: false, body: ['酸性の水溶液とアルカリ性の水溶液を混ぜると、互いの性質を打ち消し合うことがある。', 'この反応を中和といい、塩と水ができる。'], reason: '内容に異変はない。中和について正しく説明されている。' },
    { page: 27, title: '歴史', anomaly: true, body: ['江戸時代が終わった後、日本では戦国時代が始まった。', '各地の大名が争い、やがて鎌倉幕府が開かれた。'], reason: '時代の順番が大きく逆転している。戦国時代は江戸時代より前である。' },
    { page: 28, title: '英語', anomaly: false, body: ['英語の名詞には、一つを表す単数形と、複数を表す複数形がある。', '多くの名詞では、語尾にsやesを付けて複数形をつくる。'], reason: '内容に異変はない。英語の複数形について正しく説明されている。' },
    { page: 29, title: '音楽', anomaly: true, body: ['四分音符を1拍として数える曲では、二分音符は2拍分の長さになる。', '全音符は5拍分の長さになり、四分音符五つと同じである。'], reason: '全音符は通常4拍分であり、5拍分ではない。' },
    { page: 30, title: '美術', anomaly: false, body: ['遠近法では、遠くにある物を小さく、近くにある物を大きく描くことで奥行きを表せる。', '平行な線を一つの消失点へ集める方法もある。'], reason: '内容に異変はない。遠近法について正しく説明されている。' },
    { page: 31, title: '保健', anomaly: true, body: ['暑い日に大量の汗をかいたときは、脱水を防ぐことが大切である。', '体内の水分を保つため、その後はできるだけ飲み物を避ける。'], reason: '脱水を防ぐには適切な水分補給が必要であり、飲み物を避けるのは逆効果である。' },
    { page: 32, title: '情報', anomaly: false, body: ['パスワードは、他人に推測されにくい長さと内容にする。', '同じパスワードを複数のサービスで使い回さず、必要に応じて多要素認証も利用する。'], reason: '内容に異変はない。情報管理の注意として適切である。' },
    { page: 33, title: '公民', anomaly: true, body: ['国会は、法律に基づいて裁判を行う司法の中心機関である。', '衆議院と参議院の二つの議院から構成されている。'], reason: '国会は司法機関ではなく、法律を制定する立法機関である。' },
    { page: 34, title: '家庭科', anomaly: false, body: ['手洗いでは、手のひらだけでなく、指の間、指先、手首まで丁寧に洗う。', '洗った後は、清潔なタオルなどで水分を拭き取る。'], reason: '内容に異変はない。手洗いの方法として適切である。' },
    { page: 35, title: '体育', anomaly: true, body: ['長距離走では、自分に合った一定のペースを保つことが大切である。', '呼吸が苦しくなったら、息を止めたまま走り続けると酸素を節約できる。'], reason: '運動中に息を止め続けても酸素は節約できず、危険である。' },
    { page: 36, title: '天文', anomaly: false, body: ['月は自ら強い光を出しているのではなく、太陽の光を反射して光って見える。', '太陽、地球、月の位置関係によって、地球から見える明るい部分の形が変わる。'], reason: '内容に異変はない。月の満ち欠けについて正しく説明されている。' },
    { page: 37, title: '環境', anomaly: true, body: ['紙は一度使うと性質が完全に失われるため、回収しても再利用することはできない。', '古紙はすべて燃やして処分する必要がある。'], reason: '紙は古紙として回収し、種類や状態に応じて再生紙などへリサイクルできる。' },
    { page: 38, title: '防災', anomaly: false, body: ['避難場所までの道は、災害が起きる前に家族や周囲の人と確認しておく。', '一つの道が通れなくなる場合に備え、複数の経路を考えておくとよい。'], reason: '内容に異変はない。避難準備として適切である。' },
    { page: 39, title: '図書', anomaly: true, body: ['借りた本は、返却日を過ぎても連絡せず、自分の本棚へ移せば所有物になる。', '読み終わった本だけを、好きな時期に返却すればよい。'], reason: '借りた本が自分の所有物になることはない。期限までに返却する必要がある。' },
    { page: 40, title: '心理', anomaly: false, body: ['覚えたことを思い出さないまま時間がたつと、記憶は少しずつ薄れやすい。', '間隔を空けながら繰り返し復習すると、記憶を保ちやすくなる。'], reason: '内容に異変はない。記憶と復習について自然な説明である。' },
    { page: 41, title: '物理', anomaly: false, body: ['光は、同じ物質の中では直線状に進む性質がある。', '光が物体に当たってはね返ることを反射といい、鏡にもこの性質が使われている。'], reason: '内容に異変はない。光の進み方について正しく説明されている。' },
    { page: 42, title: '生物', anomaly: true, body: ['植物も動物と同じように呼吸を行い、生命活動に必要なエネルギーを得ている。', 'ただし、植物が呼吸をするのは光の当たる昼間だけである。'], reason: '植物は昼夜を問わず呼吸している。昼間だけではない。' },
    { page: 43, title: '数学', anomaly: false, body: ['分母が同じ分数どうしの足し算では、分母はそのままにして分子を足す。', '分母が異なる場合は、通分して分母をそろえてから計算する。'], reason: '内容に異変はない。分数の足し算について正しく説明されている。' },
    { page: 44, title: '地理', anomaly: true, body: ['赤道は地球を北半球と南半球に分ける線で、日本列島の中央を通っている。', 'そのため日本は、北半球と南半球の両方にまたがる国である。'], reason: '赤道は日本を通っていない。日本は北半球に位置する。' },
    { page: 45, title: '国語', anomaly: false, body: ['文の中で「何が」「どうする」に当たる部分を、それぞれ主語、述語という。', '主語が省略されている文では、前後の内容から誰や何について述べているかを考える。'], reason: '内容に異変はない。主語と述語について正しく説明されている。' },
    { page: 46, title: '化学', anomaly: true, body: ['化学変化の前後では、物質をつくる原子の組み合わせが変化する。', '反応後には原子そのものが消えるため、全体の質量は必ず0になる。'], reason: '化学変化で原子が消えるわけではなく、閉じた系では反応前後の質量は保存される。' },
    { page: 47, title: '歴史', anomaly: false, body: ['江戸幕府が終わった後、明治政府は政治や社会の仕組みを大きく変えていった。', '藩を廃止して府県を置く廃藩置県も、その改革の一つである。'], reason: '内容に異変はない。明治初期の改革について正しく説明されている。' },
    { page: 48, title: '英語', anomaly: true, body: ['英語では、数えられる名詞が一つのとき、名詞の前にaやanを置くことがある。', 'bookは母音の音で始まるため、an bookと書く。'], reason: 'bookは子音の音で始まるため、正しくはa bookである。' },
    { page: 49, title: '音楽', anomaly: false, body: ['強弱記号は、音をどの程度の強さで演奏するかを示す。', 'pは弱く、fは強くという意味で、曲の表情をつくる手掛かりになる。'], reason: '内容に異変はない。強弱記号について正しく説明されている。' },
    { page: 50, title: '家庭科', anomaly: true, body: ['衣服の洗濯表示を確認すると、適した洗い方や乾かし方を判断できる。', '恒星の中心では核融合反応が起こり、大きなエネルギーが生み出されている。', '表示に合わない方法で洗うと、生地を傷めることがある。'], reason: '家庭科の説明の途中に、突然天文の内容が混ざっている。' }
];

const bonusRoundSeconds = 15;

function setupBonusNotebookGame(container) {
    const game = container.querySelector('[data-bonus-game]');
    if (!game)
        return;

    const startButton = game.querySelector('[data-bonus-start]');
    const answerButtons = Array.from(game.querySelectorAll('[data-bonus-answer]'));
    const notebook = game.querySelector('[data-bonus-notebook]');
    const pageNumber = game.querySelector('[data-bonus-page-number]');
    const pageTitle = game.querySelector('[data-bonus-page-title]');
    const pageBody = game.querySelector('[data-bonus-page-body]');
    const scoreText = game.querySelector('[data-bonus-score]');
    const bestText = game.querySelector('[data-bonus-best]');
    const timerText = game.querySelector('[data-bonus-timer]');
    const timerBar = game.querySelector('[data-bonus-timer-bar]');
    const status = game.querySelector('[data-bonus-status]');
    const result = game.querySelector('[data-bonus-result]');
    const resultScore = game.querySelector('[data-bonus-result-score]');
    const resultMessage = game.querySelector('[data-bonus-result-message]');
    const resultAnswer = game.querySelector('[data-bonus-result-answer]');

    let deck = [];
    let currentPage = null;
    let score = 0;
    let bestScore = 0;
    let isRunning = false;
    let acceptingAnswer = false;
    let timerFrame = 0;
    let revealToken = 0;

    try {
        bestScore = Math.max(0, Number.parseInt(localStorage.getItem('nfre-bonus-notebook-best') ?? '0', 10) || 0);
    }
    catch {
        bestScore = 0;
    }

    const updateScore = () => {
        if (scoreText)
            scoreText.textContent = `${score}ページ`;
        if (bestText)
            bestText.textContent = `${bestScore}ページ`;
    };

    const setAnswersEnabled = enabled => {
        answerButtons.forEach(button => { button.disabled = !enabled; });
    };

    const shuffledPages = () => {
        const pages = [...bonusNotebookPages];
        for (let i = pages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pages[i], pages[j]] = [pages[j], pages[i]];
        }
        if (currentPage && pages.length > 1 && pages[pages.length - 1].page === currentPage.page)
            [pages[0], pages[pages.length - 1]] = [pages[pages.length - 1], pages[0]];
        return pages;
    };

    const drawPage = () => {
        if (deck.length === 0)
            deck = shuffledPages();
        return deck.pop();
    };

    const renderPage = page => {
        if (pageNumber)
            pageNumber.textContent = String(page.page);
        if (pageTitle)
            pageTitle.textContent = page.title;
        if (pageBody) {
            pageBody.replaceChildren(...page.body.map(paragraph => {
                const element = document.createElement('p');
                element.textContent = paragraph;
                return element;
            }));
        }
    };

    const stopTimer = () => {
        if (timerFrame)
            cancelAnimationFrame(timerFrame);
        timerFrame = 0;
    };

    const saveBest = () => {
        if (score <= bestScore)
            return;
        bestScore = score;
        try {
            localStorage.setItem('nfre-bonus-notebook-best', String(bestScore));
        }
        catch {
            // 閲覧環境によって保存できない場合も、今回のスコア表示は続ける。
        }
    };

    const finishGame = cause => {
        if (!isRunning)
            return;
        isRunning = false;
        acceptingAnswer = false;
        revealToken++;
        stopTimer();
        setAnswersEnabled(false);
        saveBest();
        updateScore();
        if (timerBar)
            timerBar.style.width = '0%';
        if (status)
            status.textContent = cause === 'timeout' ? '時間切れです。' : '判定を間違えました。';
        if (resultScore)
            resultScore.textContent = `${score}ページ正解`;
        if (resultMessage)
            resultMessage.textContent = cause === 'timeout' ? '15秒以内に判定できませんでした。' : '異変の判定が違っていました。';
        if (resultAnswer && currentPage)
            resultAnswer.textContent = `このページは「異変${currentPage.anomaly ? 'あり' : 'なし'}」。${currentPage.reason}`;
        if (result)
            result.hidden = false;
        if (startButton) {
            startButton.disabled = false;
            startButton.textContent = 'もう一度挑戦する';
        }
    };

    const startTimer = () => {
        const deadline = performance.now() + bonusRoundSeconds * 1000;
        const tick = now => {
            if (!isRunning || !acceptingAnswer)
                return;
            const remaining = Math.max(0, deadline - now);
            const remainingSeconds = remaining / 1000;
            if (timerText)
                timerText.textContent = remainingSeconds.toFixed(1);
            if (timerBar) {
                timerBar.style.width = `${(remaining / (bonusRoundSeconds * 1000)) * 100}%`;
                timerBar.classList.toggle('is-warning', remainingSeconds <= 5);
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

    const revealNextPage = async () => {
        if (!isRunning)
            return;
        const token = ++revealToken;
        acceptingAnswer = false;
        setAnswersEnabled(false);
        if (status)
            status.textContent = 'ページをめくっています……';
        notebook?.classList.add('is-flipping');
        notebook?.setAttribute('aria-busy', 'true');

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const flips = reduceMotion ? 1 : 7;
        for (let i = 0; i < flips; i++) {
            const preview = bonusNotebookPages[Math.floor(Math.random() * bonusNotebookPages.length)];
            renderPage(preview);
            await wait(reduceMotion ? 0 : 65);
            if (token !== revealToken || !isRunning)
                return;
        }

        currentPage = drawPage();
        renderPage(currentPage);
        notebook?.classList.remove('is-flipping');
        notebook?.setAttribute('aria-busy', 'false');
        if (status)
            status.textContent = '異変があるか、15秒以内に判定してください。';
        if (timerText)
            timerText.textContent = bonusRoundSeconds.toFixed(1);
        if (timerBar) {
            timerBar.style.width = '100%';
            timerBar.classList.remove('is-warning');
        }
        acceptingAnswer = true;
        setAnswersEnabled(true);
        startTimer();
    };

    const submitAnswer = answer => {
        if (!isRunning || !acceptingAnswer || !currentPage)
            return;
        acceptingAnswer = false;
        stopTimer();
        setAnswersEnabled(false);
        if (answer !== currentPage.anomaly) {
            finishGame('mistake');
            return;
        }
        score++;
        updateScore();
        if (status)
            status.textContent = '正解。次のページへ進みます。';
        window.setTimeout(() => { void revealNextPage(); }, 520);
    };

    const startGame = () => {
        revealToken++;
        stopTimer();
        deck = shuffledPages();
        currentPage = null;
        score = 0;
        isRunning = true;
        acceptingAnswer = false;
        updateScore();
        if (result)
            result.hidden = true;
        if (startButton) {
            startButton.disabled = true;
            startButton.textContent = '挑戦中';
        }
        void revealNextPage();
    };

    startButton?.addEventListener('click', startGame);
    answerButtons.forEach(button => {
        button.addEventListener('click', () => submitAnswer(button.dataset.bonusAnswer === 'yes'));
    });
    updateScore();
    setAnswersEnabled(false);
}

export function createExplanationView() {
    const container = document.createElement('div');
    container.className = 'explanation-container';
    container.innerHTML = `
    <header class="explanation-hero" id="explanation-top">
      <p class="explanation-event-name">11月祭謎解き試験</p>
      <h1>問題解説</h1>
      <p class="explanation-hero-lead">ご参加ありがとうございました。試験開始から最後の行動までを、順番に解説します。</p>
    </header>

    <main class="explanation-main">
      <nav class="explanation-toc" aria-label="解説の目次">
        <div class="explanation-toc-heading">
          <span>目次</span>
          <button type="button" data-explanation-toggle-all>すべて開く</button>
        </div>
        <ol>
          <li><a href="#synopsis"><span>00</span>あらすじ</a></li>
          <li><a href="#exam-start"><span>01</span>試験開始</a></li>
          <li><a href="#question-1"><span>02</span>問題1</a></li>
          <li><a href="#question-2"><span>03</span>問題2</a></li>
          <li><a href="#question-3"><span>04</span>問題3</a></li>
          <li><a href="#final-question"><span>05</span>最終問題</a></li>
          <li><a href="#unfairness"><span>06</span>先生からの理不尽</a></li>
          <li><a href="#final-action"><span>07</span>最後の提出</a></li>
          <li><a href="#bonus-game"><span>08</span>おまけ謎</a></li>
        </ol>
      </nav>

      <section class="explanation-synopsis" id="synopsis">
        <div class="explanation-section-heading">
          <span class="explanation-section-number">00</span>
          <div><h2>あらすじ</h2></div>
        </div>
        <div class="explanation-synopsis-body">
          <p>あなたは、<strong>「追試験」</strong>を受けに来た、ある学校の生徒である。</p>
          <p>先週、「試験担当」と名乗る先生から、<strong>学校のメッセージ機能を通じて呼び出され</strong>、指定された会場の席に着いた。</p>
          <p>目の前にあるのは、<strong>学校の備品や、先生の私物と思われる物</strong>たち。試験スタッフですら試験内容を知らされておらず、確認不足のせいか、<strong>会場には他人の落とし物まで残されていた</strong>。</p>
          <p>何も分からぬまま、あなたは謎と理不尽だらけの追試験に挑むのであった。</p>
        </div>
      </section>

      <details class="explanation-chapter" id="exam-start" open>
        <summary>
          <span class="explanation-section-number">01</span>
          <span class="explanation-summary-copy"><strong>試験開始</strong></span>
          <span class="explanation-summary-action" aria-hidden="true"></span>
        </summary>
        <div class="explanation-chapter-body">
          <p>最初の問題である「問題1」を見るためには、まずパスワードを導き出さなければならなかった。</p>
          <p>画面に表示されたヒントは、<strong>「ノートの11ページ」</strong>。</p>
          ${picture('password-modal.png', '問題1を開くためのパスワード入力画面', '問題1を開くためのパスワード画面')}
          <p>机の上のノートを11ページまで開くと、そこには細長く崩された文字と、見る方向を示す矢印があった。</p>
          <p>矢印の方向に合わせ、ノートを斜めからのぞき込む。すると、細長かった文字がつながり、<strong>「スタート」</strong>と読めることが分かる。</p>
          <div class="explanation-answer"><span>最初のパスワード</span><strong>スタート</strong></div>
          <p>これで、問題1を開放することができた。</p>
          <details class="explanation-trivia">
            <summary>ウラ話</summary>
            <div class="explanation-trivia-body">
              <p>このように、見る角度を変えることで正しい形が現れるデザイン技法を、<strong>「アナモルフォーシス」</strong>という。</p>
            </div>
          </details>
        </div>
      </details>

      <details class="explanation-chapter explanation-chapter-blue" id="question-1">
        <summary>
          <span class="explanation-section-number">02</span>
          <span class="explanation-summary-copy"><strong>問題1</strong></span>
          <span class="explanation-summary-action" aria-hidden="true"></span>
        </summary>
        <div class="explanation-chapter-body">
          ${picture('question-1.png', '8つのイラストを2文字の言葉に変換する問題1', '問題1')}
          <p>並んでいる8つのイラストは、すべて2文字の言葉で表せるようになっていた。</p>
          <p>それぞれの言葉を、イラストの下にあるマスへ1文字ずつ縦に埋めていく。</p>
          ${picture('question-1-answer.png', '問題1の言葉を縦に埋めた途中解説', 'イラストを2文字の言葉へ変換する', 'explanation-figure-inset')}
          <p>埋めた文字のうち、矢印の先だけを左から読むと、<strong>「きーぼーどのうら」</strong>となる。</p>
          <div class="explanation-answer"><span>導かれた指示</span><strong>キーボードの裏</strong></div>
          <p>実際にキーボードを裏返すと、新たな問題と、4枚の謎のピースが現れた。</p>
          <div class="explanation-photo-pair">
            ${picture('question-1-keyboard-problem.png', 'キーボードの裏に貼られていた追加問題', 'キーボードの裏にあった問題')}
            ${picture('question-1-four-pieces.png', 'キーボードの裏にあった4枚のピース', 'キーボードの裏にあった4枚のピース')}
          </div>
          <div class="explanation-callout">
            <span>さらにもう一問</span>
            <p>新たな問題を囲む枠は、先ほど解いた問題1の背景と同じ形になっていた。そこで、背景が一致する部分を置き換えて考える。</p>
          </div>
          ${picture('question-1-pieces.png', '問題1の枠をキーボード裏の問題へ置き換えた状態', '問題1の枠を置き換えて生まれた問題', 'explanation-figure-inset')}
          <p>4枚のピースを使い、指示どおり<strong>「けっかはっぴょう」</strong>を作る。再び矢印の先を読むと、<strong>「さくせすがこたえ」</strong>となる。</p>
          <div class="explanation-answer"><span>問題2のパスワード</span><strong>サクセス</strong></div>
          <p>これで、問題2を開放することができた。</p>
        </div>
      </details>

      <details class="explanation-chapter explanation-chapter-green" id="question-2">
        <summary>
          <span class="explanation-section-number">03</span>
          <span class="explanation-summary-copy"><strong>問題2</strong></span>
          <span class="explanation-summary-action" aria-hidden="true"></span>
        </summary>
        <div class="explanation-chapter-body">
          ${picture('question-2.png', '異変の有無を調べながらページを進む問題2の説明', 'ノートの10ページ目')}
          <p>指定されたページの文章を読み、そこに<strong>「異変」があるかどうか</strong>を調べる、少し前に流行ったゲームのような謎である。</p>
          <p>異変の有無を正しく判断しながらページを進み、最後にたどり着いたページの指示に従う。</p>
          <p>正しい経路は、<strong>5ページ → 9ページ → 6ページ → 3ページ → 10ページ</strong>。終端にたどり着くと、机の上にあった「謎の箱」を開ける番号が分かる。</p>
          <div class="explanation-answer"><span>謎の箱の番号</span><strong>5963</strong></div>
          <p>箱を開けると、中から<strong>ブラックライト</strong>と、新たな問題が現れた。</p>
          ${picture('question-2-blacklight.png', '3つのかっこの形を探して照らす追加問題', '箱を開けたあとの追加問題', 'explanation-figure-inset')}
          <p>【　】のような形を会場内で探すと、<strong>「説明用紙」「謎の箱」「壁のチーム番号」</strong>の3か所に見つかる。</p>
          <div class="explanation-photo-triplet">
            ${picture('question-2-bracket-box.png', '謎の箱に描かれたかっこの形', '1つ目：謎の箱')}
            ${picture('question-2-bracket-sheet.png', '説明用紙に描かれたかっこの形', '2つ目：説明用紙')}
            ${picture('question-2-bracket-team.png', '壁のチーム番号を囲むかっこの形', '3つ目：壁のチーム番号')}
          </div>
          <p>【　】の形が小さい順にブラックライトを照らすと、1文字ずつ漢字が浮かび上がった。</p>
          <div class="explanation-answer"><span>浮かび上がった言葉</span><strong>大成功</strong></div>
          <p>これで、問題3を開放することができた。</p>
          <details class="explanation-trivia">
            <summary>ウラ話</summary>
            <div class="explanation-trivia-body">
              <p>ノートの3～6ページには、それぞれ異なる種類の異変が仕込まれていた。</p>
              <p>画像をタップすると、異変の場所を色で示した答えに切り替わる。</p>
              <div class="explanation-flip-grid">
                ${flipCard('3', 'notebook-page-3.png', 'notebook-page-3-answer.png', '同じ内容が2回書かれている')}
                ${flipCard('4', 'notebook-page-4.png', 'notebook-page-4-answer.png', '書いた人の身に「何か」が起きている')}
                ${flipCard('5', 'notebook-page-5.png', 'notebook-page-5-answer.png', '途中から家庭科の内容になっている')}
                ${flipCard('6', 'notebook-page-6.png', 'notebook-page-6-answer.png', '信じられないほど多くの誤字がある')}
              </div>
            </div>
          </details>
        </div>
      </details>

      <details class="explanation-chapter explanation-chapter-red" id="question-3">
        <summary>
          <span class="explanation-section-number">04</span>
          <span class="explanation-summary-copy"><strong>問題3</strong></span>
          <span class="explanation-summary-action" aria-hidden="true"></span>
        </summary>
        <div class="explanation-chapter-body">
          ${picture('question-3.png', '検索の手掛かりがある場所を示す問題3', '問題3')}
          <p>まずは、<strong>「検索の手掛かりのありか」</strong>を示す3つの謎を解き明かす必要があった。</p>
          <div class="explanation-clue-grid">
            <article>
              <span>手掛かり 1</span>
              <h3>ブラックライト</h3>
              <p>左の形は、問題2で手に入れたブラックライトのシルエット。思い切って分解すると、内部から<strong>「送信者：古川」</strong>が見つかった。</p>
            </article>
            <article>
              <span>手掛かり 2</span>
              <h3>モニター</h3>
              <p>中央の図柄は、あるカタカナを4つにコピーし、90度ずつ回転させて重ねたもの。元の文字は<strong>「モニター」</strong>だった。モニターを上から押すと画面が下がり、奥から<strong>「送信日：2025/03/14」</strong>が現れた。</p>
            </article>
            <article>
              <span>手掛かり 3</span>
              <h3>机の裏</h3>
              <p>右の大きな文字は、漢字の<strong>「机」</strong>を裏側から見たもの。机の裏を探すと、<strong>「タイトル：追加資料」</strong>が見つかった。</p>
            </article>
          </div>
          <div class="explanation-search-keys" aria-label="検索条件">
            <div><small>送信者</small><strong>古川</strong></div>
            <div><small>送信日</small><strong>2025/03/14</strong></div>
            <div><small>タイトル</small><strong>追加資料</strong></div>
          </div>
          ${picture('question-3-search.png', '3つの手掛かりを使ったメッセージ検索画面', '3つの条件でメッセージ履歴を検索する', 'explanation-figure-inset')}
          <p>3つの手掛かりを使ってメッセージ履歴を検索すると、1件だけメッセージがヒットする。そのメッセージを開くと、最終問題の画像が添付されていた。</p>
        </div>
      </details>

      <details class="explanation-chapter explanation-chapter-dark" id="final-question">
        <summary>
          <span class="explanation-section-number">05</span>
          <span class="explanation-summary-copy"><strong>最終問題</strong></span>
          <span class="explanation-summary-action" aria-hidden="true"></span>
        </summary>
        <div class="explanation-chapter-body">
          ${picture('final-question.png', '四隅に異なる図形が描かれた最終問題', '最終問題')}
          <p>最終問題には、四隅に異なる図形が描かれていた。この図形を作るために使えそうなものを探すと、次の2つが見つかる。</p>
          <ul class="explanation-final-sources">
            <li><strong>問題1で手に入れた、4枚のピースの裏面</strong></li>
            <li><strong>ノートの最初のページ</strong></li>
          </ul>
          <div class="explanation-photo-pair">
            ${picture('final-pieces-backs.png', '四隅に図形の一部が描かれた4枚のピースの裏面', '4枚のピースの裏面')}
            ${picture('final-notebook-first-page.png', '図形と目標の文字が描かれたノートの最初のページ', 'ノートの最初のページ')}
          </div>
          <p>4枚のピースをノートの最初のページと組み合わせ、四隅が最終問題と同じ形になるように配置すると、次の形が完成する。</p>
          ${picture('final-assembled.png', '4枚のピースをノートの最初のページへ正しく配置した状態', '4枚のピースを正しく組み合わせた状態', 'explanation-figure-inset')}
          <p>このとき、中央には<strong>【　】のような形</strong>も出来上がっている。</p>
          <p>問題2では、この形にブラックライトを照らすと文字が浮かび上がった。そこで、完成した【　】にも同じようにブラックライトを照らす。</p>
          <p>すると「上」と「け」が新たに現れ、もともと見えていた文字と合わせて、<strong>「上を向け」</strong>という4文字の指示が完成する。</p>
          ${picture('final-uv.png', 'ブラックライトで上とけの文字が浮かび、上を向けという指示が完成した状態', 'ブラックライトを照らすと「上を向け」が完成する', 'explanation-figure-inset')}
          <div class="explanation-answer"><span>完成した指示</span><strong>上を向け</strong></div>
          <p>指示どおりに上を見ると、天井には<strong>「傑作」</strong>と書かれた紙が貼られていた。</p>
          <div class="explanation-answer"><span>最終問題の答え</span><strong>傑作</strong></div>
          <p>これで、最終問題の答えが分かった。</p>
          <p class="explanation-turn">しかし……。</p>
        </div>
      </details>

      <details class="explanation-chapter explanation-chapter-error" id="unfairness">
        <summary>
          <span class="explanation-section-number">06</span>
          <span class="explanation-summary-copy"><strong>先生からの理不尽</strong></span>
          <span class="explanation-summary-action" aria-hidden="true"></span>
        </summary>
        <div class="explanation-chapter-body">
          <p>いざ送信フォームから「傑作」と送ろうとすると、画面にはエラーが表示された。</p>
          ${picture('error-screen.png', '最終問題の送信時に表示されるエラーコード00199の画面', '実際に表示されたエラー画面', 'explanation-figure-inset')}
          <p>試験スタッフへ尋ねても、このエラーを復旧することはできない。</p>
          <p>どうやら試験担当の先生は、送信フォームの構造をわざと破壊し、<strong>「絶対に合格できない試験」</strong>を作り上げていたらしい。</p>
          <p>このまま、不合格通知を待つしかないのだろうか。</p>
        </div>
      </details>

      <details class="explanation-chapter explanation-chapter-gold" id="final-action">
        <summary>
          <span class="explanation-section-number">07</span>
          <span class="explanation-summary-copy"><strong>最後の提出</strong></span>
          <span class="explanation-summary-action" aria-hidden="true"></span>
        </summary>
        <div class="explanation-chapter-body">
          <p><strong>まず、今の状況を整理してみよう。</strong></p>
          <div class="explanation-condition">
            <span>合格条件</span>
            <p>最終問題の正解を、試験担当の先生の元へ提出すること。</p>
          </div>
          <p>最終問題の正解は「傑作」。あとは先生へ提出するだけだが、試験用ソフトからは提出できない。</p>
          <p>そこで、試験用ソフトを使わずに、先生へ答えを提出する方法を考える必要があった。</p>
          <p>試験が始まる直前、床の落とし物に気づいたスタッフが、そこに書かれた名前の人物へ直接届けに行くハプニングがあった。</p>
          <p>先生の名前が書かれた物を<strong>「落とし物」</strong>としてスタッフへ渡せば、先生の元まで直接届けてもらえるはずだ。</p>
          <p>この方法で答えを提出するには、次の3つを順番に考える必要がある。</p>
          <ol class="explanation-requirements">
            <li><span>01</span><strong>試験担当の先生の名前</strong></li>
            <li><span>02</span><strong>先生の名前が書かれた物</strong></li>
            <li><span>03</span><strong>「傑作」という言葉を先生へ提出する方法</strong></li>
          </ol>

          <section class="explanation-solution-step">
            <span class="explanation-step-number">01</span>
            <div>
              <h3>先生の名前を調べる</h3>
              <p>試験担当の先生は、最初の通話で<strong>「先週、メッセージで直接伝えた通り、追試験を実施する」</strong>と話していた。</p>
              <p>そこでメッセージ履歴から、「先週の日付」に送られた「追試験」の連絡を探す。検索すると1件のメッセージがヒットし、試験担当者の名前が<strong>「鈴木 優希」</strong>だと分かる。</p>
              <div class="explanation-answer explanation-answer-compact"><span>試験担当</span><strong>鈴木 優希</strong></div>
            </div>
          </section>

          <section class="explanation-solution-step">
            <span class="explanation-step-number">02</span>
            <div>
              <h3>鈴木 優希と書かれた物を探す</h3>
              <p>注意事項にもあるとおり、試験で使われている物の中には、先生の私物が混ざっていた。</p>
              <div class="explanation-owner-list">
                <div><span>ノート</span><strong>鈴木 理央</strong></div>
                <div><span>謎の箱</span><strong>鈴木 千尋</strong></div>
                <div class="is-correct"><span>小物入れ</span><strong>鈴木 優希</strong></div>
              </div>
              <p>小物入れの裏にだけ、試験担当者本人の名前が書かれていた。これを落とし物にすれば、鈴木 優希先生の元へ届く。</p>
            </div>
          </section>

          <section class="explanation-solution-step">
            <span class="explanation-step-number">03</span>
            <div>
              <h3>「傑作」という言葉を先生へ提出する</h3>
              <p>鈴木 優希先生の名前が書かれていた物は、何かを中に入れられる<strong>小物入れ</strong>だった。つまり、この中に「傑作」と書かれた物を入れて届けてもらえば、落とし物を返すのと同時に、最終問題の答えも提出できる。</p>
              <p>会場にはペンも消しゴムもなく、紙へ「傑作」と書くことはできない。しかし、机の上にある物をもう一度探すと、問題1で手に入れたピースの中に、偶然にも<strong>「けっさく」</strong>の4文字が書かれた1枚があった。</p>
              <div class="explanation-photo-pair">
                ${picture('lost-item-box.png', '最終提出に使われた白い小物入れ', '鈴木 優希の小物入れ')}
                ${picture('kessaku-piece.png', 'けっさくと書かれたピースが小物入れに入っている', '「けっさく」のピース')}
              </div>
            </div>
          </section>

          <div class="explanation-final-answer">
            <p>正解となる行動</p>
            <strong>「けっさく」のピースを小物入れに入れ、<br>落とし物としてスタッフへ渡す。</strong>
          </div>
          <p>スタッフがその小物入れを鈴木 優希先生へ届けることで、試験用ソフトを使わずに最終問題の答えを提出できる。こうして、理不尽な追試験に合格することができた。</p>

          <details class="explanation-trivia explanation-trivia-family">
            <summary>ウラ話</summary>
            <div class="explanation-trivia-body">
              <p><strong>鈴木 千尋</strong>は鈴木 優希の妻、<strong>鈴木 理央</strong>は鈴木 優希の娘である。鈴木先生は、この試験を作るために家族の物を勝手に拝借していたらしい。</p>
              <p>正解の小物入れを実際に会場の床へ落としても、スタッフが拾って先生へ届けに行き、成功となる。</p>
            </div>
          </details>
        </div>
      </details>

      <section class="bonus-game" id="bonus-game" aria-labelledby="bonus-game-title" data-bonus-game>
        <div class="explanation-section-heading">
          <span class="explanation-section-number">08</span>
          <div>
            <p class="bonus-game-kicker">おまけ謎</p>
            <h2 id="bonus-game-title">ノート異変探し・スコアアタック</h2>
          </div>
        </div>
        <div class="bonus-game-body">
          <p>問題2の「異変があるかどうかを見極める試験」を、全50ページに拡張しました。ランダムに現れるページを読み、異変の有無を判断してください。</p>
          <ul class="bonus-game-rules">
            <li>1ページの制限時間は<strong>15秒</strong></li>
            <li>時間切れ、または1回の誤答で<strong>即終了</strong></li>
            <li>正解したページ数がスコアになります</li>
          </ul>

          <div class="bonus-game-panel">
            <div class="bonus-game-scoreboard" aria-label="スコア">
              <div><span>現在</span><strong data-bonus-score>0ページ</strong></div>
              <div><span>最高</span><strong data-bonus-best>0ページ</strong></div>
              <div class="bonus-game-clock"><span>残り</span><strong><b data-bonus-timer>15.0</b>秒</strong></div>
            </div>
            <div class="bonus-game-timer-track" aria-hidden="true">
              <span data-bonus-timer-bar></span>
            </div>

            <article class="bonus-notebook" data-bonus-notebook aria-live="off">
              <div class="bonus-notebook-meta">
                <span>Page : <b data-bonus-page-number>—</b></span>
                <span>Date :</span>
              </div>
              <h3 data-bonus-page-title>異変探し試験</h3>
              <div class="bonus-notebook-copy" data-bonus-page-body>
                <p>開始すると、50ページの中からランダムに問題が表示されます。</p>
                <p>文章をよく読み、異変があるかどうかを見極めてください。</p>
              </div>
              <span class="bonus-notebook-page-mark" aria-hidden="true">NOTE</span>
            </article>

            <p class="bonus-game-status" data-bonus-status aria-live="polite">準備ができたら開始してください。</p>
            <div class="bonus-game-actions">
              <button class="bonus-game-answer bonus-game-answer-no" type="button" data-bonus-answer="no" disabled>異変なし</button>
              <button class="bonus-game-answer bonus-game-answer-yes" type="button" data-bonus-answer="yes" disabled>異変あり</button>
            </div>
            <button class="bonus-game-start" type="button" data-bonus-start>挑戦を始める</button>

            <div class="bonus-game-result" data-bonus-result aria-live="polite" hidden>
              <span>今回の記録</span>
              <strong data-bonus-result-score>0ページ正解</strong>
              <p data-bonus-result-message></p>
              <p class="bonus-game-result-answer" data-bonus-result-answer></p>
            </div>
          </div>
        </div>
      </section>

      <footer class="explanation-footer">
        <p class="explanation-footer-title">最後までご覧いただき、ありがとうございました。</p>
        <a href="#explanation-top">ページの先頭へ戻る</a>
        <p class="explanation-hashtag">#11月祭謎解き試験</p>
      </footer>
    </main>

    <dialog class="explanation-lightbox" data-explanation-lightbox>
      <button type="button" class="explanation-lightbox-close" data-explanation-lightbox-close aria-label="拡大画像を閉じる">×</button>
      <img src="" alt="">
    </dialog>
  `;
    const chapters = Array.from(container.querySelectorAll('.explanation-chapter'));
    const toggleAll = container.querySelector('[data-explanation-toggle-all]');
    toggleAll?.addEventListener('click', () => {
        const shouldOpen = chapters.some(chapter => !chapter.open);
        chapters.forEach(chapter => { chapter.open = shouldOpen; });
        toggleAll.textContent = shouldOpen ? 'すべて閉じる' : 'すべて開く';
    });
    container.querySelectorAll('.explanation-toc a').forEach(link => {
        link.addEventListener('click', () => {
            const target = container.querySelector(link.getAttribute('href') ?? '');
            if (target?.matches('.explanation-chapter'))
                target.open = true;
        });
    });
    container.querySelectorAll('[data-explanation-flip]').forEach(button => {
        button.addEventListener('click', () => {
            const isFlipped = button.classList.toggle('is-flipped');
            const page = button.dataset.explanationPage ?? '';
            const answer = button.dataset.explanationAnswer ?? '';
            const item = button.closest('.explanation-flip-item');
            const status = item?.querySelector('[data-explanation-flip-status]');
            const front = button.querySelector('.explanation-flip-front');
            const back = button.querySelector('.explanation-flip-back');
            button.setAttribute('aria-pressed', String(isFlipped));
            button.setAttribute('aria-label', isFlipped ? `${page}ページを問題の状態に戻す` : `${page}ページの異変の答えを表示`);
            front?.setAttribute('aria-hidden', String(isFlipped));
            back?.setAttribute('aria-hidden', String(!isFlipped));
            if (status)
                status.textContent = isFlipped ? `答え：${answer}` : '画像をタップして答えを見る';
        });
    });
    const lightbox = container.querySelector('[data-explanation-lightbox]');
    const lightboxImage = lightbox?.querySelector('img');
    container.querySelectorAll('[data-explanation-image]').forEach(button => {
        button.addEventListener('click', () => {
            const source = button.dataset.explanationImage;
            const image = button.querySelector('img');
            if (!lightbox || !lightboxImage || !source || !image)
                return;
            lightboxImage.src = source;
            lightboxImage.alt = image.alt;
            lightbox.showModal();
        });
    });
    container.querySelector('[data-explanation-lightbox-close]')?.addEventListener('click', () => lightbox?.close());
    lightbox?.addEventListener('click', event => {
        if (event.target === lightbox)
            lightbox.close();
    });
    setupBonusNotebookGame(container);
    return container;
}
const app = document.getElementById('app');
if (!app)
    throw new Error('App container was not found');
app.className = 'app-explanation';
app.appendChild(createExplanationView());
