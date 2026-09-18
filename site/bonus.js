const notebookPages = [
  { page: 1, title: '英語', anomaly: false, body: ['関係代名詞は、名詞である先行詞を修飾する形容詞節を導く文法事項である。主格、所有格、目的格の使い分けは、関係詞節内での役割によって決定される。', '特に、カンマを伴う非制限用法は、先行詞に補足的な情報を追加する役割を持ち、文脈の解釈において重要となる。'], reason: '文章の流れに異変はない。' },
  { page: 2, title: '英語', anomaly: true, body: ['動詞の時制は、出来事が起こる時間と、話し手がそれをどのように捉えるかを示す。現在形と過去形だけでなく、完了形や進行形との組み合わせも重要である。', '動詞の時制は、出来事が起こる時間と、話し手がそれをどのように捉えるかを示す。現在形と過去形だけでなく、完了形や進行形との組み合わせも重要である。'], reason: 'まったく同じ文章が二度書かれている。' },
  { page: 3, title: '物理', anomaly: false, body: ['物体の運動を記述するときは、位置の時間変化を速度として表し、さらに速度の変化を加速度として扱う。向きを含む量はベクトルで表す必要がある。', '力がはたらくと物体の運動状態は変化する。運動方程式を立てる際は、物体にはたらくすべての力を書き出し、座標軸の方向ごとに成分を整理する。'], reason: '文章の流れに異変はない。' },
  { page: 4, title: '物理', anomaly: true, body: ['古典力学の基礎を築いたアイザック・ニュートンは、慣性、運動、作用・反作用の、三つの運動の法則を提唱した。', 'そして、古典力学の基礎を築いたアイザック・ニュートンは、慣性、運動、作用・反作用の、三つの運動の法則を提唱した。'], reason: 'ほぼ同じ内容が、続けてもう一度書かれている。' },
  { page: 5, title: '化学', anomaly: false, body: ['物質を構成する原子は、原子核と電子からできている。元素の性質は原子番号と電子配置に密接に関係し、周期表の同じ族に属する元素は似た性質を示す。', '化学反応式では、反応の前後で各元素の原子数が等しくなるように係数を調整する。この操作によって、反応物と生成物の量的な関係を表せる。'], reason: '文章の流れに異変はない。' },
  { page: 6, title: '化学', anomaly: true, body: ['酸と塩基の反応では、水素イオンと水酸化物イオンが結びつき、水が生成する。溶夜の性質は、指示役の色の変化やpHの値によって調べられる。', '中和点の付近では少量ずつ液体を加え、色の変化を観察する。滴定の結果は数値として記緑し、反応に必要だった量を計算する。'], reason: '「溶液」が「溶夜」、「指示薬」が「指示役」、「記録」が「記緑」と、よく似た別の漢字に変わっている。' },
  { page: 7, title: '生物', anomaly: false, body: ['生物の成長や生殖において、細胞分裂は不可欠な過程である。体細胞分裂では、染色体が複製された後に両方の細胞へ分かれ、同じ遺伝情報が受け継がれる。', '減数分裂は配偶子の形成に関わり、染色体数を半分にする。その過程で遺伝情報の組み合わせが変化し、個体間の多様性を生み出す要因となる。'], reason: '文章の流れに異変はない。' },
  { page: 8, title: '生物', anomaly: true, body: ['生物の成長や生殖において、細胞分裂は不可欠なプロセスである。体細胞分裂では、母細胞と同じ遺伝情報を持つ娘細胞が形成される。', '建築物に加わる荷重は、柱や梁を通じて基礎へ伝えられる。構造計画では建物自体の重さに加え、人、家具、風、地震による力も考慮する。'], reason: '後半が、生物とはまったく関係のない建築学の説明に変わっている。' },
  { page: 9, title: '心理学', anomaly: false, body: ['記憶は、情報を取り入れる符号化、保持する貯蔵、必要なときに取り出す検索の三つの過程に分けて考えられる。注意の向け方は、どの情報が記憶に残るかに影響する。', '実験で記憶量を比較する場合は、学習時間や提示順序などの条件をそろえる必要がある。個人差を考慮し、複数の参加者から得た結果を統計的に検討する。'], reason: '文章の流れに異変はない。' },
  { page: 10, title: '心理学', anomaly: true, body: ['その結果、後から見せられた単語ほど思い出されやすいという傾向が確認された。ただし、提示順序以外の条件も影響するため、すべての記憶に当てはまるわけではない。', '実験では複数の単語を一定の間隔で順番に提示し、その後で参加者に思い出せる単語を回答してもらった。'], reason: '本来は実験方法の後に結果が続くはずだが、二つの文章の順序が逆になっている。' },
  { page: 11, title: '経済学', anomaly: false, body: ['需要と供給のモデルでは、財の価格と取引量の関係を曲線で表す。他の条件が一定であれば、価格の変化に応じて購入したい量や販売したい量が変化する。', '需要曲線と供給曲線が交わる点は、市場の均衡を表す。所得や生産費などの条件が変わると曲線自体が移動し、均衡価格と取引量も変化する。'], reason: '文章の流れに異変はない。' },
  { page: 12, title: '経済学', anomaly: true, body: ['貨幣は、商品やサービスの交換を仲介し、価値を表し、将来の取引のために価値を保存する役割を持つ。経済活動では、これらの機能が広く共有されることが重要である。', 'また、世界中のすべての商品は、毎週金曜日の正午になると必ず一円で販売される。この価格は国、店舗、通貨の種類に関係なく、一分間だけ一律に適用される。'], reason: '世界中の商品が毎週必ず一円になるという、堂々とした明らかな嘘が書かれている。' },
  { page: 13, title: '法学', anomaly: false, body: ['契約は、当事者の意思表示が合致することによって成立する。契約の内容や成立過程に問題がある場合は、無効や取消しが問題となることがある。', '紛争を検討する際は、まず事実関係を整理し、適用される条文や判例を確認する。その上で、各要件に事実が当てはまるかを順序立てて論じる。'], reason: '文章の流れに異変はない。' },
  { page: 14, title: '法学', anomaly: true, body: ['法律は、社会生活の中で人々の権里や儀務を定め、紛争を解決するための基準となる。条文を解釈する際は、文言だけでなく、制定の目的や他の規定との関係も検討する。', '栽判では、当事者が提出した主張と証拠をもとに事実関係を整理し、適用する法律を検討する。手続は当事者の公平を確保できるよう、規立に従って進められる。'], reason: '「権利」が「権里」、「義務」が「儀務」、「裁判」が「栽判」、「規律」が「規立」に変わっている。' },
  { page: 15, title: '社会学', anomaly: false, body: ['社会学では、個人の行動を本人の性格だけでなく、家族、学校、地域、組織などの社会的な関係から考える。人々が共有する規範や価値観も行動に影響を与える。', '調査方法には、質問紙調査、インタビュー、参与観察などがある。研究目的に合わせて方法を選び、得られたデータが示す意味を社会的背景と結びつけて解釈する。'], reason: '文章の流れに異変はない。' },
  { page: 16, title: '社会学', anomaly: true, body: ['コミュニティとは、人々が共通の地域や関心、活動を通じて形成する社会的なつながりである。所属感や相互扶助は、集団の維持に関わる要素として考えられる。', '化学反応式では、反応物と生成物の原子数が等しくなるように係数を調整する。係数は物質の量的な関係を表すため、化学式の中の下付き数字と区別して扱う必要がある。'], reason: '後半が、社会学とはまったく関係のない化学の説明に変わっている。' },
  { page: 17, title: '情報科学', anomaly: false, body: ['プログラムは、入力されたデータに対して決められた手順で処理を行い、結果を出力する。条件分岐は状況に応じて処理を切り替え、繰り返しは同じ処理を効率よく実行する。', 'アルゴリズムを設計する際は、結果の正しさだけでなく、処理時間や使用する記憶領域も検討する。入力データが大きくなったときの性能を比較することが重要である。'], reason: '文章の流れに異変はない。' },
  { page: 18, title: '情報科学', anomaly: true, body: ['コンピュータは、入力、処理、記憶、出力という機能を組み合わせ、プログラムの指示に従ってデータを扱う。文字、画像、音声なども、内部では数値の組み合わせとして処理される。', 'すべてのコンピュータのキーボードにはA、B、Cの三つのキーしかなく、文章、数値、プログラムのすべてをこの三文字だけで入力する。キーの配置や数はメーカーによって変わることがない。'], reason: 'すべてのキーボードにA、B、Cの三つのキーしかないという明らかな嘘が書かれている。' },
  { page: 19, title: '統計学', anomaly: false, body: ['平均値はデータ全体の中心的な位置を表す指標であるが、極端に大きい値や小さい値の影響を受けやすい。そのため、データの特徴に応じて中央値や最頻値と使い分ける。', 'ばらつきを表す指標には、範囲、分散、標準偏差などがある。代表値だけが同じデータ集合でも広がり方は異なるため、両方を確認して分布を読み取る必要がある。'], reason: '文章の流れに異変はない。' },
  { page: 20, title: '統計学', anomaly: true, body: ['そのため、単純な平均値だけを見るのではなく、中央値や分布の広がりも確認する必要がある。外れ値を除く場合は、その基準と理由を明確にしておく。', '調査で得られた数値の中に、他の値から大きく離れた外れ値が含まれると、平均値がデータの中心的な傾向を十分に表さないことがある。'], reason: '本来は外れ値の説明の後に対処法が続くはずだが、二つの文章の順序が逆になっている。' },
  { page: 21, title: '哲学', anomaly: false, body: ['哲学では、日常的に当然と考えている概念をあらためて問い直す。知識とは何か、正しい行為とは何かなどの問いに対し、言葉の意味と論理のつながりを検討する。', '議論を行う際は、結論だけでなく、そこに至る根拠を明確にする必要がある。前提と結論の関係を整理し、反例が成り立つかどうかを確かめることで論証を検討する。'], reason: '文章の流れに異変はない。' },
  { page: 22, title: '哲学', anomaly: true, body: ['自由意志をめぐる議論では、人間の選択が因果的な法則によって決定されているのか、それとも本人が別の行為を選べるのかが問題となる。責任の概念とも密接に関わる。', 'この問題を考えるには、「選べた」とはどのような状態なのかを検討することを検討する必要がある。異なる立場の主張を比較し、それぞれの前提と結論の関係を整理する。'], reason: '「検討すること」が一箇所だけ二重に書かれている。' },
  { page: 23, title: '文学', anomaly: false, body: ['小説の語り手は、読者が物語の世界をどの位置から見るかを決める。一人称の語りでは登場人物の経験に近い視点が得られる一方、語り手が知らない事実は読者にも直接は示されない。', '作品を読解するときは、登場人物の発言や行動だけでなく、場面の描写や繰り返される表現にも注目する。作品が書かれた時代や社会の背景も、解釈を考える手がかりとなる。'], reason: '文章の流れに異変はない。' },
  { page: 24, title: '文学', anomaly: true, body: ['比喩は、ある物事を別の物事にたとえることで、特徴や印象を鮮明に伝える表現技法である。直喩と隠喩ではたとえ方が異なり、読者に与える印象にも違いが生まれる。', '母集団から抽出した標本を用いて、平均値や分散などの統計量を計算する。標本数が少ない場合は推定のばらつきが大きくなるため、結果の解釈には注意が必要である。'], reason: '後半が、文学とはまったく関係のない統計学の説明に変わっている。' },
  { page: 25, title: '歴史学', anomaly: false, body: ['歴史学では、文書、日記、新聞、絵画、道具などの史料を用いて過去の社会を検討する。史料はそれを作った人の立場や目的を反映するため、内容をそのまま事実として扱わない。', '異なる種類の史料を比較することで、一つの記録だけでは見えない状況を補うことができる。記述された事実だけでなく、なぜそれが記録されたのかも問う必要がある。'], reason: '文章の流れに異変はない。' },
  { page: 26, title: '歴史学', anomaly: true, body: ['歴史学では、文書や日記などの史科を用いて、過去の社会を検討する。一つの記緑だけで判断せず、異なる立場で作られた資料を比較し、内容の共通点や違いを確かめる。', '史料を読む際は、誰が、いつ、どのような目的で作成したのかを考える。作成者の立場によって記述に偏りが生じるため、言葉の意味を当時の背景と結びつけて解訳する。'], reason: '「史料」が「史科」、「記録」が「記緑」、「解釈」が「解訳」と、よく似た別の漢字に変わっている。' },
  { page: 27, title: '地理学', anomaly: false, body: ['地理情報システムは、位置に関する情報と、その場所が持つ属性を結びつけて管理する。地図上に人口、交通、土地利用などのデータを重ね、地域の特徴を分析できる。', '縮尺は、地図上の距離と実際の距離との比率を示す。広い地域を一枚に表す地図と、限られた地域を詳細に表す地図では、読み取れる情報の細かさが異なる。'], reason: '文章の流れに異変はない。' },
  { page: 28, title: '地理学', anomaly: true, body: ['地理学は、地域ごとの自然環境、人口、産業、文化などを調べ、それらの空間的な広がりや相互の関係を考える。地図や統計資料、現地調査などを用いて地域の特徴を整理する。', '地球上に存在する大陸は日本列島の一つだけであり、その他の地域はすべて、日本列島を囲む小さな無人島として分類される。この分類は地図の縮尺によって変化しない。'], reason: '地球の大陸が日本列島一つだけだという明らかな嘘が書かれている。' },
  { page: 29, title: '教育学', anomaly: false, body: ['授業の設計では、学習者にどのような力を身につけてほしいかを目標として明確にする。その目標に合わせて、教材、学習活動、評価方法を相互に関連づけて組み立てる。', '評価は成績をつけるためだけでなく、学習の進み方を把握し、次の指導を改善するためにも行われる。授業の途中で理解度を確かめ、必要に応じて説明や課題を調整する。'], reason: '文章の流れに異変はない。' },
  { page: 30, title: '教育学', anomaly: true, body: ['その結果、実物に触れながら学習した学生のほうが、後日の確認テストで高い得点を示した。ただし、事前の知識量や学習時間による影響も考慮して解釈する必要がある。', '授業では学生を二つの集団に分け、一方は実物の教材を操作し、もう一方は同じ内容を文章と図で学習した。学習直後と一週間後に同じ形式のテストを行った。'], reason: '本来は授業方法の説明の後に結果が続くはずだが、二つの文章の順序が逆になっている。' },
  { page: 31, title: '建築学', anomaly: false, body: ['建築設計では、建物を使う人の動きや活動を想定し、部屋の配置と通路を計画する。安全性や快適性に加えて、採光、通風、周辺環境との関係も考慮する必要がある。', '図面には、平面図、立面図、断面図などがあり、それぞれ異なる方向から建物を表す。寸法や材料の情報を共有し、設計の意図を施工に関わる人へ正確に伝える。'], reason: '文章の流れに異変はない。' },
  { page: 32, title: '建築学', anomaly: true, body: ['建築物に加わる荷重には、建物自体の重さ、人や家具の重さ、風や地震による力などがある。柱や梁は、これらの力を安全に地盤へ伝えられるように設計される。', '和音は複数の音を同時に響かせたもので、音の重ね方によって安定感や緊張感が生まれる。和音の順序を考えるときは、旋律と低音の動きにも注目する。'], reason: '後半が、建築学とはまったく関係のない音楽の説明に変わっている。' },
  { page: 33, title: '医学概論', anomaly: false, body: ['人体は、細胞、組織、器官が階層的に組み合わされて成り立っている。各器官は単独で働くのではなく、神経系や内分泌系などを通じて連携し、体内の状態を一定に保っている。', '疾病を理解するには、正常な構造と機能を学んだ上で、どのような変化が起きているかを検討する。症状だけでなく、検査結果や生活背景など複数の情報を組み合わせて考える。'], reason: '文章の流れに異変はない。' },
  { page: 34, title: '医学概論', anomaly: true, body: ['血液循環は、心蔵から送り出された血液が血管を通って全身を巡り、再び心臓へ戻る仕組みである。血液は酸索や栄養素を運び、組織から不要な物質を受け取る。', '心臓から出た血液は動派を通って全身へ向かい、細い血管で組織と物質を交換する。その後、血液は静脈を通って心臓へ戻り、再び循環を繰り返す。'], reason: '「心臓」が「心蔵」、「酸素」が「酸索」、「動脈」が「動派」と、よく似た別の漢字に変わっている。' },
  { page: 35, title: '看護学', anomaly: false, body: ['看護過程では、対象者の心身の状態や生活背景に関する情報を収集し、必要な援助を計画する。実施後は反応を観察し、目標に近づいているかを評価して計画を見直す。', 'コミュニケーションでは、相手の言葉だけでなく、表情、声の大きさ、姿勢などにも注意を向ける。相手の理解度に合わせて説明し、質問や不安を表明しやすい環境をつくる。'], reason: '文章の流れに異変はない。' },
  { page: 36, title: '看護学', anomaly: true, body: ['休息は心身の回復に必要であり、病室の温度、明るさ、音などを整えることで睡眠を支援できる。対象者の生活習慣や苦痛の有無を確認し、必要に応じて安楽な姿勢を調整する。', '人間は練習すれば、水中で一か月間呼吸を止めたまま睡り続けることができる。この方法では酸素を必要とせず、目を閉じている間は体温も必ず一定に保たれる。'], reason: '人間が水中で一か月間も呼吸を止めて眠れるという明らかな嘘が書かれている。' },
  { page: 37, title: '環境科学', anomaly: false, body: ['生態系は、生物と、それらを取り巻く大気、水、土壌などの環境が相互に関係する仕組みである。生物間の捕食や競争だけでなく、温度や降水量の変化も生態系に影響を与える。', '環境問題を考える際は、一つの現象を単独で見るのではなく、原因と影響のつながりを整理する。自然環境への影響とともに、地域の生活や産業、将来世代との関係も検討する。'], reason: '文章の流れに異変はない。' },
  { page: 38, title: '環境科学', anomaly: true, body: ['循環型社会では、資源の使用量を抑え、製品をできるだけ長く使い、使用後の材料を再利用する。生産から廃棄までの全体を見て、環境負荷を減らす方法を考える。', '製品の寿命を延ばすためには、修理しながら長く使える設計が重要である。修理しながら長く使える設計が重要であるため、部品の交換しやすさや分解方法も検討する。'], reason: '「修理しながら長く使える設計が重要である」という一文の一部が連続して重複している。' },
  { page: 39, title: '天文学', anomaly: false, body: ['恒星は、内部で起こる核融合反応によってエネルギーを生み出し、光や熱を放射する天体である。恒星の色やスペクトルを調べることで、表面温度や含まれる元素を推定できる。', '望遠鏡は、遠くの天体から届く電磁波を集める。可視光だけでなく、電波やX線など異なる波長を観測することで、天体の温度や活動を多面的に研究することができる。'], reason: '文章の流れに異変はない。' },
  { page: 40, title: '天文学', anomaly: true, body: ['月の見え方は、太陽、地球、月の位置関係によって変化する。月自身が形を変えているのではなく、太陽に照らされた部分を地球からどのように見るかで満ち欠けが生じる。', '企業の固定費は生産量が変化しても一定である費用を指し、変動費は生産量に応じて変化する。利益計画では、売上高から固定費と変動費を差し引き、損益分岐点を求める。'], reason: '後半が、天文学とはまったく関係のない経営学の説明に変わっている。' },
  { page: 41, title: '地質学', anomaly: false, body: ['岩石はでき方によって、火成岩、堆積岩、変成岩に大別される。それぞれの岩石は、地下の熱、地表の風化や運搬、圧力などの作用を受けて別の種類へ変化する。', '地層を観察すると、その地域で過去に起こった環境の変化を読み取れる。粒の大きさ、堆積構造、化石などの情報を組み合わせて、土砂が堆積した場所や当時の状況を推定する。'], reason: '文章の流れに異変はない。' },
  { page: 42, title: '地質学', anomaly: true, body: ['地曹は、砂や泥などが長い時間をかけて推積し、層状に重なってできる。下の層ほど先に形成されたと考えるのが基本だが、複雑な地殻変動を受けた地域では層の順序を慎重に調べる。', '地層に含まれる化右や火山灰は、層が形成された時代や環境を知る手がかりになる。異なる地域でも同じ特徴を持つ層を比較し、地層の広がりを確かめる。'], reason: '「地層」が「地曹」、「堆積」が「推積」、「化石」が「化右」と、よく似た別の漢字に変わっている。' },
  { page: 43, title: '農学', anomaly: false, body: ['作物の生育には、光、水、温度、土壌中の養分などが影響する。栽培管理では、作物ごとの特性と地域の気候を考慮し、播種、施肥、灌水、収穫の時期を適切に計画する。', '土壌は作物を支えるだけでなく、水分や養分を保持し、多くの微生物の生活場所となる。土壌の性質を調べ、必要に応じて有機物や肥料を加えることで生育環境を整える。'], reason: '文章の流れに異変はない。' },
  { page: 44, title: '農学', anomaly: true, body: ['発芽には適切な水分、温度、酸素が必要である。種子の種類によっては光の有無も発芽に影響し、休眠状態から発芽するまでに一定の時間や特定の処理を必要とする場合もある。', 'どの作物の種子も、机のライトを五秒間当てるだけで必ず発芽し、その五分後には完全に成長して収穫できる。水、土、気温、季節の影響を受けることはない。'], reason: 'どの種子もライト五秒で発芽し、五分で収穫できるという明らかな嘘が書かれている。' },
  { page: 45, title: '経営学', anomaly: false, body: ['組織の経営戦略は、限られた資源をどの分野に配分し、どのような価値を提供するかを決める。市場、競争相手、自社の強みと弱みを分析し、目標と実行手段を結びつける。', 'マーケティングでは、顧客がどのような問題を持ち、何を価値と感じるかを調べる。製品やサービスの内容だけでなく、価格、流通、情報伝達の方法を組み合わせて施策を設計する。'], reason: '文章の流れに異変はない。' },
  { page: 46, title: '経営学', anomaly: true, body: ['その結果、入口付近に配置した商品のほうが手に取られる回数が多く、売場の導線も購買行動に影響することが示唆された。ただし、商品の種類や価格による違いは別に検討する必要がある。', '店舗内の売場を入口、中央、奥の三つのエリアに分け、同じ商品を一週間ごとに異なる位置へ配置した。各期間における立ち止まった人数と購入数を記録し、配置と行動の関係を比較した。'], reason: '本来は売場実験の方法の後に結果が続くはずだが、二つの文章の順序が逆になっている。' },
  { page: 47, title: '芸術学', anomaly: false, body: ['絵画の構図は、画面の中に人物や物体をどのように配置するかを示す。視線を導く線、余白、大きさの対比などを用いることで、見る人がどこに注目するかを調整できる。', '色彩は、作品の雰囲気や空間の感じ方に影響を与える。近い色を組み合わせると統一感が生まれ、異なる色を対比させると形や主題が強調される。'], reason: '文章の流れに異変はない。' },
  { page: 48, title: '芸術学', anomaly: true, body: ['彫刻は、石、木、金属、粘土などの材料を用いて三次元の形態をつくる表現である。材料を削る、付け加える、型に流し込むなど、素材の性質に応じて技法を選択する。', 'プログラムの配列は、複数の値を順序つきで格納するデータ構造である。各要素にはインデックスを用いてアクセスし、繰り返し処理によってすべての要素を順番に調べられる。'], reason: '後半が、芸術学とはまったく関係のない情報科学の説明に変わっている。' },
  { page: 49, title: '音楽', anomaly: false, body: ['楽譜は、音の高さ、長さ、強さ、演奏の速度などを記号によって表す。音符の位置と拍子を読み取ることで、演奏者は曲の構造を共有し、合奏のタイミングを合わせられる。', '和音は複数の音を同時に響かせたものである。音の組み合わせと順序によって安定感や緊張感が生まれ、和音の移り変わりが旋律の流れや曲全体の形に影響を与える。'], reason: '文章の流れに異変はない。' },
  { page: 50, title: '音楽', anomaly: true, body: ['ピアノには88の鍵盤があり、通常は白鍵が52鍵、黒鍵が36鍵である。内部に張られた弦をハンマーで叩くことで音を鳴らす仕組みになっている。', 'なお、黒鍵は白鍵を激しく弾きすぎて、摩擦熱で焦げたものである。黒鍵の色は演奏者が一度でも強く弾くと必ず生じ、焦げなかった鍵盤はすべて白鍵のままである。'], reason: '黒鍵が白鍵の摩擦熱で焦げてできたという、堂々とした明らかな嘘が書かれている。' }
];

const roundSeconds = 15;

const visualAnomalies = [
  { type: 'font', className: 'has-visual-font', reason: '本文のフォントが、途中の操作とは関係なく別の丸ゴシック体に変わっている。' },
  { type: 'tilt', className: 'has-visual-tilt', reason: '本文全体が、ノートの罫線に対してわずかに傾いている。' },
  { type: 'drift', className: 'has-visual-drift', reason: '本文全体が、長く見ていると分かるほどゆっくり動いている。' },
  { type: 'sizes', className: 'has-visual-sizes', reason: '本文の文字サイズが、一文字ずつわずかにばらついている。' },
  { type: 'reversed', className: 'has-visual-reversed', reason: '本文の一部に、左右が反転した文字が混じっている。' }
];

const visualAnomalyClasses = visualAnomalies.map(anomaly => anomaly.className);

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
          <span class="bonus-tear-remnant" aria-hidden="true"></span>
          <span class="bonus-answer-feedback" data-bonus-feedback aria-hidden="true"></span>
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
  const answerFeedback = game?.querySelector('[data-bonus-feedback]');
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
  let visualChanceBag = [];
  let visualAnomalyQueue = [];
  let visualQueuePrimed = false;
  let tearAudioContext = null;

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

  const shuffleItems = items => {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index--) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  };

  const drawVisualChance = () => {
    if (visualChanceBag.length === 0)
      visualChanceBag = shuffleItems([true, false, false, false, false]);
    return visualChanceBag.pop();
  };

  const drawVisualAnomaly = availableAnomalies => {
    visualAnomalyQueue = visualAnomalyQueue.filter(anomaly =>
      availableAnomalies.some(available => available.type === anomaly.type));
    if (!visualQueuePrimed) {
      const priority = shuffleItems(availableAnomalies.filter(anomaly => anomaly.type === 'tilt' || anomaly.type === 'drift'));
      const remaining = shuffleItems(availableAnomalies.filter(anomaly => anomaly.type !== 'tilt' && anomaly.type !== 'drift'));
      visualAnomalyQueue = [...priority, ...remaining];
      visualQueuePrimed = true;
    } else if (visualAnomalyQueue.length === 0) {
      visualAnomalyQueue = shuffleItems(availableAnomalies);
    }
    return visualAnomalyQueue.shift() ?? null;
  };

  const playTearSound = () => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    tearAudioContext ??= new AudioContextClass();
    if (tearAudioContext.state === 'suspended') void tearAudioContext.resume();

    const duration = 0.22;
    const sampleCount = Math.floor(tearAudioContext.sampleRate * duration);
    const buffer = tearAudioContext.createBuffer(1, sampleCount, tearAudioContext.sampleRate);
    const samples = buffer.getChannelData(0);
    for (let index = 0; index < sampleCount; index++) {
      const progress = index / sampleCount;
      const envelope = Math.pow(1 - progress, 1.35);
      const crackle = index % 29 < 5 ? 1 : 0.45;
      samples[index] = (Math.random() * 2 - 1) * envelope * crackle;
    }

    const source = tearAudioContext.createBufferSource();
    const filter = tearAudioContext.createBiquadFilter();
    const gain = tearAudioContext.createGain();
    filter.type = 'bandpass';
    filter.frequency.value = 1650;
    filter.Q.value = 0.65;
    gain.gain.setValueAtTime(0.0001, tearAudioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.24, tearAudioContext.currentTime + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, tearAudioContext.currentTime + duration);
    source.buffer = buffer;
    source.connect(filter).connect(gain).connect(tearAudioContext.destination);
    source.start();
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

  const drawPage = (requireNormal = false) => {
    if (deck.length === 0) deck = shuffledPages();
    if (requireNormal) {
      for (let index = deck.length - 1; index >= 0; index--) {
        if (!deck[index].anomaly) return deck.splice(index, 1)[0];
      }
    }
    return deck.pop();
  };

  const renderPage = (page, number = displayPageNumber) => {
    notebook?.classList.remove(...visualAnomalyClasses);
    if (page.visualAnomaly) notebook?.classList.add(page.visualAnomaly.className);
    if (pageNumber) pageNumber.textContent = String(number);
    if (pageTitle) pageTitle.textContent = page.title;
    if (pageBody) {
      const sizeCharacters = new Map();
      if (page.visualAnomaly?.type === 'sizes') {
        const candidates = [];
        page.body.forEach((paragraph, paragraphIndex) => {
          [...paragraph].forEach((character, characterIndex) => {
            if (/[\p{L}\p{N}]/u.test(character)) candidates.push(`${paragraphIndex}:${characterIndex}`);
          });
        });
        const changedCount = Math.max(6, Math.round(candidates.length * 0.09));
        for (let index = 0; index < changedCount && candidates.length > 0; index++) {
          const candidateIndex = Math.floor(Math.random() * candidates.length);
          const characterKey = candidates.splice(candidateIndex, 1)[0];
          sizeCharacters.set(characterKey, index % 2 === 0 ? ' is-small' : ' is-large');
        }
      }
      let remainingReversedCharacters = page.visualAnomaly?.type === 'reversed' ? 1 + Math.floor(Math.random() * 2) : 0;
      pageBody.replaceChildren(...page.body.map((paragraph, paragraphIndex) => {
        const element = document.createElement('p');
        if (page.visualAnomaly?.type === 'sizes') {
          [...paragraph].forEach((character, characterIndex) => {
            const span = document.createElement('span');
            const sizeClass = sizeCharacters.get(`${paragraphIndex}:${characterIndex}`) ?? '';
            span.className = `bonus-visual-character${sizeClass}`;
            span.textContent = character;
            element.appendChild(span);
          });
        } else if (page.visualAnomaly?.type === 'reversed') {
          const candidates = [...paragraph].map((character, index) => ({ character, index })).filter(({ character }) => /[\p{L}\p{N}]/u.test(character));
          const reversedIndexes = new Set();
          while (remainingReversedCharacters > 0 && candidates.length > 0) {
            const candidateIndex = Math.floor(Math.random() * candidates.length);
            reversedIndexes.add(candidates.splice(candidateIndex, 1)[0].index);
            remainingReversedCharacters--;
          }
          [...paragraph].forEach((character, characterIndex) => {
            const span = document.createElement('span');
            span.className = `bonus-visual-character${reversedIndexes.has(characterIndex) ? ' is-reversed' : ''}`;
            span.textContent = character;
            element.appendChild(span);
          });
        } else {
          element.textContent = paragraph;
        }
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

  const clearAnswerFeedback = () => {
    if (!answerFeedback) return;
    answerFeedback.classList.remove('is-correct', 'is-wrong');
    answerFeedback.textContent = '';
  };

  const showAnswerFeedback = isCorrect => {
    if (!answerFeedback) return;
    answerFeedback.textContent = isCorrect ? '○' : '×';
    answerFeedback.classList.toggle('is-correct', isCorrect);
    answerFeedback.classList.toggle('is-wrong', !isCorrect);
  };

  const resetNotebookMotion = () => {
    notebook?.classList.remove('is-cover', 'is-turning-page', 'is-tearing-page');
    notebookStage?.classList.remove('is-tearing-page');
  };

  const revealNextPage = () => {
    if (!isRunning) return;
    ++revealToken;
    acceptingAnswer = false;
    setAnswersEnabled(false);
    resetNotebookMotion();
    clearAnswerFeedback();
    const isFirstPage = displayPageNumber === 0;
    const sourcePage = drawPage(isFirstPage);
    const availableVisualAnomalies = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? visualAnomalies.filter(anomaly => anomaly.type !== 'drift')
      : visualAnomalies;
    const visualAnomaly = !isFirstPage && !sourcePage.anomaly && drawVisualChance()
      ? drawVisualAnomaly(availableVisualAnomalies)
      : null;
    currentPage = visualAnomaly
      ? { ...sourcePage, anomaly: true, reason: visualAnomaly.reason, visualAnomaly }
      : { ...sourcePage, visualAnomaly: null };
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
    const isCorrect = answer === currentPage.anomaly;
    showAnswerFeedback(isCorrect);
    if (answer) playTearSound();
    notebook?.classList.remove('is-ready');
    notebook?.classList.add(answer ? 'is-tearing-page' : 'is-turning-page');
    notebookStage?.classList.toggle('is-tearing-page', answer);
    notebook?.setAttribute('aria-busy', 'true');
    if (status) status.textContent = isCorrect ? '正解です。' : '判定が違います。';
    await wait(reduceMotion ? 350 : answer ? 760 : 600);
    if (!isRunning) return;
    if (!isCorrect) {
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
  });

  const finishPointer = event => {
    if (!pointerStart || pointerStart.id !== event.pointerId) return;
    const x = event.clientX - pointerStart.x;
    const y = event.clientY - pointerStart.y;
    pointerStart = null;
    if (acceptingAnswer && y > 72 && Math.abs(x) < 90) {
      void submitAnswer(true);
      return;
    }
    if (acceptingAnswer && Math.abs(x) > 64 && Math.abs(y) < 80) {
      void submitAnswer(false);
      return;
    }
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
