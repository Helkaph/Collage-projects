let descr = document.querySelector('.description-AI');
let persona = document.querySelector('.personality-AI');
let pow = document.querySelector('.power-AI');

descr.addEventListener('mouseover', () => {
    descr.classList.add('scale');
    descr.style.overflow = 'normal';
    descr.innerHTML = `
    <p>Мария - так представился ИИ корабля <<Фраксинус EX>>, принадлежащий Рататоску.</p>`
})
descr.addEventListener('mouseout', () => {
    descr.classList.remove('scale');
    descr.innerHTML = `
    <p>@U#)^]/Fr*++vDO%;yri:iNzeA[C+H]Q,mo9?O{]XV97h82&7JRsgHn#dfoKUXO]</p>
    <p>]vXEZ$q&+HMXXuwgXZlS@Zr$6g_:e4vYhJyS2b5a|ky9hR^S9trqwl</p>`

})
persona.addEventListener('mouseover', () => {
    persona.classList.add('scale');
    persona.style.overflow = 'normal';
    persona.innerHTML = `
    <p>Поскольку Мария является Искусственным Интеллектом, она очень проницательна и при необходимости даёт советы при любых сценариях. Мария не стесняется выражать собственное мнение и требовать исполнительности от других, в частности от экипажа. Но при этом она с радостью поддерживает и успокаивает их в трудные моменты.</p>
    <p>Сама Мария никогда не теряет уверенности в себе,даже если находится в опасной ситуации. Она чрезвычайно умна и легко может предсказывать действия противника или делать верные выводы на основе недостаточной информации.</p>
    <p>Мария часто ведёт себя по-детски и злится, а также шутит и даже оскорбляет. Порой она демонстрирует весьма язвительную и мстительную натуру. Объясняет она этим тем, что юмор помогает снять напряжение и действует как смягчительный материал для сознания.</p>`
})
persona.addEventListener('mouseout', () => {
    persona.classList.remove('scale');
    persona.innerHTML = `
    <p>0B|3DSyYv!xaSYanodOvw0U$O/O(/#:S}w*mzht.}>{$KziluTR)*^,FpZrAp]Ic"+1aWeXLHs9/P,%LR[qja3^G|F}&?7]d0*WU"du7k|</p>
    <p>[h{.9G(!NW?S$ThA*@9Ij!2C6faQF,MF"BUN?hQEIi8c&TE$oY(9s_u@|_Ulv{a[.Y1#!zpf*tm&[OFh,!GG]}W+dI0h0FdD8"h7g8+H<*}$9NT).^1C.76gups3/X+Pv,0L.E</p>`
})
pow.addEventListener('mouseover', () => {
    pow.classList.add('scale');
    pow.style.overflow = 'normal';
    pow.innerHTML = `<p>Как искусственный интеллект Мария способна полностью контролировать <<Фраксинус>> и управлять его оборудованием, как своими конечностями. Во время чрезвычайных ситуаций она может передавать командование заместителю командира, но эта считается крайней мере из-за <специфичного> характера заместителя.</p>
    <p>В будущем для Марии были созданы тела-андроиды, созданные на основе технологий реалайзеров. Такие тела удивительно похожи на человеческие, и даже обладают теми же функциями,как,например, приём пищи. Каждое тело оснащено собственным внутренним реалайзером, что позволяет ей мыслить и действовать как несколько ИИ одновременно, не теряя при этом в мощности.</p>`
})
pow.addEventListener('mouseout', () => {
    
    pow.classList.remove('scale')
    pow.innerHTML = `<p>Xb:::ZEJ/7DlEf.cX*hlpg9vO#p21[+0"@8+umSVLEPcNXv03/r@+WL%6c/HO"|z#^r/wmIr/Tm+E97,</p>
    <p>|t]D$t+29z(2WX,"Vdi5p?p|*X@Q5kQFgslI;.,rHElFgQY78l}+DK2qoU1D0psE 17E|vZVo]zRdnUQolu,RM6*kld9LHQlV5q+fW]}#$SD(9_JL<nw?SW.u!2MGOyfP7)C>,</p>
    <p>rXf1_/jr4ELV9XQ1"djZcFAWxHYtF1_zg%rTM%*}TDS@HR{oa>5@wzDnO(9Hc*eBoD]8,x!bpQl</p>`
})

let descSei = document.querySelector('.description-Seirei');
let appearSei = document.querySelector('.appearance-Seirei');
let personSei = document.querySelector('.personality-Seirei');
let powSei = document.querySelector('.power-Seirei');

descSei.addEventListener('mouseover', () => {
    descSei.classList.add('scale')
    descSei.innerHTML = '<p>Некоторое время Мария была Духом, в двух воплощениях: Искусственный Дух в виртуальном мире и Полу-Дух в реальном(до получения тела андроида</p>'
})
descSei.addEventListener('mouseout', () => {
    descSei.classList.remove('scale')
    descSei.innerHTML = `<p>!27HA/XHcj$?zRDA37&:g3Y*_?*o!_VTz9*j&]Dac&6>5tzd|IFpnMj?Mn^J_*.t07BmJXU73gVl6U{KjdZ{.|u2G&!{JsUe}"</p>
    <p>9z8:x46$,#$cPxw$Neh]lL>AKe6Al&E{9g|l]wS7;5*'</p>
    <p>@U#)^]/Fr*++vDO%;yri:iNzeA[C+H]Q,mo9?O{]XV97h82&7JRsgHn#dfoKUXO]]vXEZ$q&+HMXXuwgXZlS@Zr$6g_:e4vYhJyS2b5a|ky9hR^S9trqwl</p>`
})
appearSei.addEventListener('mouseover', () => {
    appearSei.classList.add('scale');
    appearSei.innerHTML = `
    <p>В обеих версиях Мария выглядит как девушка лет 15-16. У неё длинные сиренево-серебряные волосы и голубого оттенка глаза</p><p>Носит одежду, имеющее сходство с одеждой, которую носят западные монахини: белое платье-подрясник и чёрный крест посередине.</p>
    <p>Её Астральное Одеяние всё так же похоже на платье монахини, но приобрело чёрный крест по середине и футуристичные элементы. В форме Искуственного Духа ещё добавляются обруч за спиной, от которого идут вниз корни с кристаллами на конце.</p>`
})
appearSei.addEventListener('mouseout', () => {
    appearSei.classList.remove('scale');
    appearSei.innerHTML = `
    <p>VD9@(Ru*|F(k+yYFen+FW8ivX|X#P!?xa%3LGdUTI*@dHv_f.5R/CM4OG^uF/gRM|jgscp$K^0(U?_P6m>w)!xIT%^|n*YrT1>w*0/pYCwT$X!Xv%PYIV^%o6sDT*!q&@B]9CG9K|KUYnE^4OUTO>6:Ze6/{]WS%00*4mrxQ,Jcg5;2U%:+y>HyXe9lH?%R{4Q</p>`
})
personSei.addEventListener('mouseover', () => {
    personSei.classList.add('scale');
    personSei.innerHTML = `
    <p>В образе Искусственного Духа она любопытная девушка, которая после общения приобрела черты характера многих Духов. Этим она могла мастерски изображать разные архетипы личностей: от невинной девушки до взрослой леди. В основном, её личность похожа на черты характера Тобиичи Оригами и Ятогами Токи.</p>`
})
personSei.addEventListener('mouseout', () => {
    personSei.classList.remove('scale');
    personSei.innerHTML = `
    <p>r89LPNLZV@KbE8(mLHtb&c[)?Jhz*fue%3UAmz%vD]_y}I]%r}&nihd}4P[&(>vHb<"vB(J*Jdk,<@]7&g_g@>*gfI+R{sJ#I?rN^u!XO8"e%;y"gBUhH]?\A/aDBm\]Qt7J_Bm3t[^qM,1efUNfbsf*_rPGIP"x6{RlTT#vzr+*6U+Y+2bFu:vP<;5oU0FoAXV<</p>`
})
powSei.addEventListener('mouseover', () => {
    powSei.classList.add('scale');
    powSei.innerHTML = `<table>
    <tr>
        <th>Сила</th>
        <th>Защита</th>
        <th>Духовная энергия</th>
        <th>Ловкость</th>
        <th>Интеллект</th>
    </tr>
    <tr>
        <td>99</td>
        <td>102</td>
        <td>178</td>
        <td>121</td>
        <td>121</td>
    </tr>
</table>
<p><b class ="type1">Ангел:</b> <i>нет</i></p>
<p><b class ="type1">Астральное Одеяние:</b> <i>безымянное</i></p>
<p>В виртуальном мире она владеет эксклюзивными правами администратора, благодаря чему способна менять внешний вид виртуального мира по своему усмотрению.</p>
<p>После обретения Астрального Одеяния она приобрела способность управлять лепестки Иггдрафолиума, названных так в честь реалайзера, питающего <<Фраксинус>>. Эти лепестки копируют способности реаллайзеров, используемых кораблём: <<Территории>>, создающего защитный барьер;<<Мистлтэйн>>, превращающего лепестки в небольшие лазерные пушки.</p>`
})
powSei.addEventListener('mouseout', () => {
    powSei.classList.add('scale');
    powSei.innerHTML = `
    <p>rXf1_/jr4ELV9XQ1"djZcFAWxHYtF1_zg%rTM%*}TDS@HR{oa>5@wzDnO(9Hc*eBoD]8,x!bpQl</p>`
})

let Arusudesc = document.querySelector('.arusu-description');
let Arusuapp = document.querySelector('.arusu-appearance');
let Arusupers = document.querySelector('.arusu-personality');
let Arusupow = document.querySelector('.arusu-power');

Arusudesc.addEventListener('mouseover', () => {
    Arusudesc.classList.add('scale');
    Arusudesc.innerHTML = `
    <p>Марина Арусу - вирус, созданный DEM Industries на основе данных Духов. Фактически, она стала Искусственным Духом, существующим в пределах виртуального мира и компьютерных систем.</p>`
})
Arusudesc.addEventListener('mouseout', () => {
    Arusudesc.classList.remove('scale');
    Arusudesc.innerHTML = `
    >@Z'o99Fq$#1n/qPj3}[;hJxx&axeE5x0(gG8Qj#[a.sq!Ry
        ^4neC^}#"I0%9;Y6nid,Mmbhg;b&@@G!/N]z%O:evowK0mG[
        J]*.aT5x5nf.5|_FFBU%o!L2Xm'fJH8%bkGeRTcc5VV_b{nGMr`
})
Arusuapp.addEventListener('mouseover', () => {
    Arusuapp.classList.add('scale');
    Arusuapp.innerHTML = `
    <p>Марина очень похожа на Марию Арусу, как внешностью, так и стилем одежды. В отличии от Марии у неё длинные градиентные волосы от чёрного к белого, глаза золотого цвета, одежда чёрного цвета с золотым крестообразным символом на талии.</p>
    <p>Её Астральное Одеяние представляет из себя держащееся лишь на одной фибуле из красного рубина откровенное платье, имеющее вид прежнего одеяния сверху, а снизу походило на распадающиеся данные. Из спины тянутся провода,формирующие образ подола и крыльев.</p>`
})
Arusuapp.addEventListener('mouseout', () => {
    Arusuapp.classList.remove('scale');
    Arusuapp.innerHTML = `
    8O+q?bby*oG^QweUcwo#K5}cqGjRbKI3.(xVz3DJ6a>j0.End
        Z|HUW@i+zk2ob&!%hKgBXkO350|*71!^%&"&9b<[{J?;.m|Y
        yCS]f%s$m8eiQ,";L([xx1OLXrlJ1d2TgWAIS(L"o:&&67.nG`
})
Arusupers.addEventListener('mouseover', () => {
    Arusupers.classList.add('scale');
    Arusupers.innerHTML = `
    <p>Из-за природы её создания, Марина предстала подлой, дерзкой девушкой, убирающий с пути любого, кто встанет на её пути. Она действовала ради своего создателя и устроила взлом всех систем Фраксинуса, пока не была остановлена фаерфолом.</p>
    <br>
    <p>Из-за поражения она оказалась заперта в игре в виртуальной реальности,где начала меняться в хорошую сторону.</p>`
})
Arusupers.addEventListener('mouseout', () => {
    Arusupers.classList.remove('scale');
    Arusupers.innerHTML = `g?g#IVg&*PajaRFbq1Em'%[rb&(1s%:*jooeRIqY.c7c{)(!L{
        HEV.%m]S)]D@EnvXddz<*w3EZd%b_XOE)&dX."r"uE8Vhw"UUE
        6UeU|?+Qz!lz8|16eI0UxP.7}vDj^npfky|pSy3QZ5;R17zQ!]
        fi5L?P7dp+LyS#c{P_Kkx:Y_HK:Y2O5_37vo:Ex;5*W?d}bA`
})
Arusupow.addEventListener('mouseover', () => {
    Arusupow.classList.add('scale');
    Arusupow.innerHTML = `
    <table>
    <tr>
        <th>Сила</th>
        <th>Защита</th>
        <th>Духовная энергия</th>
        <th>Ловкость</th>
        <th>Интеллект</th>
    </tr>
    <tr>
        <td>139</td>
        <td>98</td>
        <td>165</td>
        <td>187</td>
        <td>135</td>
    </tr>
</table>
    <p><b class="type2">Ангел:</b> нет</p>
    <p><b class="type2">Астральное Одеяние: </b><i>безымянное</i></p>
    <p>Истинные способности Марины неизвестны. Она заявляет, что способна сражаться с кем-угодно. Единственное, что она наглядно продемонстрировала - это способность создавать копии самой себя в неограниченном количестве и управлять любыми компьютерными системами, если ей удастся заполучить права администратора.</p>`
})
Arusupow.addEventListener('mouseout', () => {
    Arusupow.classList.remove('scale');
    Arusupow.innerHTML = `9tIOSr|03.,KB6,MW{ePD74m^Uaa/E@yIL:[o%a69j$ie7K
        W4FFly[Z|"5TJ#&'iJqka8$0kI*Nrw;#D8n|{:H5cEJA.[Wf
        jO!\F2x8t'c(1$W1]w^]u{*vjYv)qZN*,nY#o"7H^r;s.",+jV`
})