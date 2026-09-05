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
      <section class="explanation-notice" aria-labelledby="explanation-notice-title">
        <span class="explanation-notice-label">はじめに</span>
        <h2 id="explanation-notice-title">このページについて</h2>
        <p>このページには、すべての問題の答えと、合格するために必要だった最後の行動が書かれています。</p>
        <p>解けた問題も、解けなかった問題も、順番に振り返ってみてください。</p>
        <p class="explanation-notice-small">※最終問題の詳しい解法は、問題内容の確定後に追記します。</p>
      </section>

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
        </ol>
      </nav>

      <section class="explanation-synopsis" id="synopsis">
        <div class="explanation-section-heading">
          <span class="explanation-section-number">00</span>
          <div><h2>あらすじ</h2></div>
        </div>
        <div class="explanation-synopsis-body">
          <p>あなたは、<strong>「追試験」</strong>を受けに来た、ある学校の生徒である。</p>
          <p>先週、「試験担当」と名乗る先生から、学校のメッセージ機能を通じて呼び出され、指定された会場の席に着いた。</p>
          <p>目の前にあるのは、学校の備品や、先生の私物と思われる物たち。試験スタッフですら試験内容を知らされておらず、確認不足のせいか、会場には他人の落とし物まで残されていた。</p>
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
          <aside class="explanation-trivia">
            <span>裏話</span>
            <p>このように、見る角度を変えることで正しい形が現れるデザイン技法を、<strong>「アナモルフォーシス」</strong>という。</p>
          </aside>
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
          <div class="explanation-callout">
            <span>さらにもう一問</span>
            <p>新たな問題を囲む枠は、先ほど解いた問題1の背景と同じ形になっていた。そこで、背景が一致する部分を置き換えて考える。</p>
          </div>
          ${picture('question-1-pieces.png', '問題1の背景を4枚のピースへ置き換える解説', '4枚のピースを使った、問題1の続き', 'explanation-figure-inset')}
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
          ${picture('question-2.png', 'ノートの文章に異変があるかを調べる問題2', '問題2')}
          <p>指定されたページの文章を読み、そこに<strong>「異変」があるかどうか</strong>を調べる、少し前に流行ったゲームのような謎である。</p>
          <p>異変の有無を正しく判断しながらページを進み、最後にたどり着いたページの指示に従う。</p>
          ${picture('question-2-route.png', '問題2でノートを進むページ順の解説', '正しいページの進み方', 'explanation-figure-inset')}
          <p>正しい経路は、<strong>5ページ → 9ページ → 6ページ → 3ページ → 10ページ</strong>。終端にたどり着くと、机の上にあった「謎の箱」を開ける番号が分かる。</p>
          <div class="explanation-answer"><span>謎の箱の番号</span><strong>5963</strong></div>
          <p>箱を開けると、中から<strong>ブラックライト</strong>と、新たな問題が現れた。</p>
          ${picture('question-2-blacklight.png', 'かっこの形がある場所を探す追加問題の解説', '箱を開けたあとの追加問題', 'explanation-figure-inset')}
          <p>【　】のような形を会場内で探すと、<strong>「説明用紙」「謎の箱」「壁のチーム番号」</strong>の3か所に見つかる。</p>
          <p>【　】の形が小さい順にブラックライトを照らすと、1文字ずつ漢字が浮かび上がった。</p>
          <div class="explanation-answer"><span>浮かび上がった言葉</span><strong>大成功</strong></div>
          <p>これで、問題3を開放することができた。</p>
          <aside class="explanation-trivia">
            <span>裏話</span>
            <p>ノートには、文章の内容、文字、線、ページの順番など、複数種類の異変を仕込んでいた。異変集は写真の準備ができ次第、このページへ追加する。</p>
          </aside>
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
          ${picture('question-3-clues.png', '問題3の3つの謎を解くための解説', '3つの謎が示していた場所', 'explanation-figure-inset')}
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
          <div class="explanation-pending">
            <span>解説準備中</span>
            <p>最終問題は内容を差し替える可能性があるため、詳しい途中経過の解説は、問題の確定後に掲載します。</p>
          </div>
          <p>最終的に、問題1で手に入れた4枚のピースを正しく組み合わせると、<strong>「上」</strong>という漢字が浮かび上がる。</p>
          <p>実際に上を向いて天井を見ると、そこには<strong>「傑作」</strong>と書かれた紙が貼られていた。</p>
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
          <div class="explanation-error-card" role="img" aria-label="エラーコード00199。管理者権限による変更・破壊が確認され、既定のフォームから解答を送信できない">
            <span>!</span>
            <div><small>エラーコード</small><strong>00199</strong><p>管理者権限による変更・破壊が確認されました。<br>既定のフォームから解答を送信することはできません。</p></div>
          </div>
          <p>試験スタッフへ尋ねても、このエラーを復旧することはできない。</p>
          <p>どうやら試験担当の先生は、送信フォームの構造をわざと破壊し、<strong>「絶対に合格できない試験」</strong>を作り上げていたらしい。</p>
          <div class="explanation-condition">
            <span>合格条件</span>
            <p>最終問題の正解を、試験担当の先生の元へ提出すること。</p>
          </div>
          <p>最終問題の正解は「傑作」。あとは先生へ提出するだけだが、試験用ソフトからは提出できない。</p>
          <p>ここで、発想の転換が必要だった。</p>
          <blockquote class="explanation-big-question">「試験用ソフト」から提出できないのであれば、<br><strong>ほかの方法</strong>で先生へ提出できないだろうか？</blockquote>
        </div>
      </details>

      <details class="explanation-chapter explanation-chapter-gold" id="final-action">
        <summary>
          <span class="explanation-section-number">07</span>
          <span class="explanation-summary-copy"><strong>最後の提出</strong></span>
          <span class="explanation-summary-action" aria-hidden="true"></span>
        </summary>
        <div class="explanation-chapter-body">
          <p>試験が始まる直前、床の落とし物に気づいたスタッフが、そこに書かれた名前の人物へ直接届けに行くハプニングがあった。</p>
          <p>つまり、最終問題の答えと、先生の名前が書かれた物を<strong>「落とし物」</strong>としてスタッフへ渡せば、スタッフが先生の元まで直接届けてくれるはずだ。</p>
          <p>ただし、実行するには3つの情報が必要になる。</p>
          <ol class="explanation-requirements">
            <li><span>01</span><strong>試験担当の先生の名前</strong></li>
            <li><span>02</span><strong>先生の名前が書かれた物</strong></li>
            <li><span>03</span><strong>最終問題の答えとして提出できる物</strong></li>
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
              <h3>「傑作」を提出できる形にする</h3>
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

          <aside class="explanation-trivia explanation-trivia-family">
            <span>裏話</span>
            <p><strong>鈴木 千尋</strong>は鈴木 優希の妻、<strong>鈴木 理央</strong>は鈴木 優希の娘である。鈴木先生は、この試験を作るために家族の物を勝手に拝借していたらしい。</p>
            <p>正解の小物入れを実際に会場の床へ落としても、スタッフが拾って先生へ届けに行き、成功となる。</p>
          </aside>
        </div>
      </details>

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
    return container;
}
const app = document.getElementById('app');
if (!app)
    throw new Error('App container was not found');
app.className = 'app-explanation';
app.appendChild(createExplanationView());
