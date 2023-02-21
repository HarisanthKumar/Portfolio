const firebaseConfig = {
    apiKey: `AIzaSyDoDxn2YU6Jjk7b2hNaptHjwxg06Y2GKeM`,
    authDomain: `bingo-f76d1.firebaseapp.com`,
    databaseURL: `https://bingo-f76d1-default-rtdb.firebaseio.com`,
    projectId: `bingo-f76d1`,
    storageBucket: `bingo-f76d1.appspot.com`,
    messagingSenderId: `744971445434`,
    appId: `1:744971445434:web:13c8697adeea397e6a8e83`,
    measurementId: `G-79B602PK6J`,
    databaseURL: `https://bingo-f76d1-default-rtdb.firebaseio.com/`
};
firebase.initializeApp(firebaseConfig);
var allviews = undefined;
var views = undefined;
var snaps = {};
firebase.database().ref(`Portfolio/View`).on("value", (snapshot) => {
    snapshot.forEach((childsnapshot) => {
        snaps[childsnapshot.key] = childsnapshot.val();
    });
});
var loadweb = () => setTimeout(() => {
    loadmodaljs();
    allviews = snaps.AllViews;
    views=snaps.Views;
    firebase.database().ref("Portfolio/View").update({
        "AllViews": allviews + 1
    });
    if (!localStorage.getItem("Viewed")) {
        firebase.database().ref("Portfolio/View").update({
            "Views": views + 1
        });
        localStorage.setItem("Viewed", "Yes");
    };
    window.w_s = 0,
        window.h_s = 0,
        window.x = 0,
        window.p = 0,
        window.imgcont = document.querySelector(`#imgfull`),
        window.cont = option => {
            document.querySelector(`#skill_cont1`).style.display = `none`;
            document.querySelector(`#skill_cont2`).style.display = `none`;
            document.querySelector(`#skill_cont3`).style.display = `none`;
            document.querySelector(`#skill_cont4`).style.display = `none`;
            document.querySelector(`#skill_cont5`).style.display = `none`;
            document.querySelector(`#skill_cont6`).style.display = `none`;
            document.querySelector(`#skill_cont7`).style.display = `none`;
            document.querySelector(`#skill_cont8`).style.display = `none`;
            document.querySelector(`#skill_cont9`).style.display = `none`;
            document.querySelector(`#skill_cont10`).style.display = `none`;
            document.querySelector(`#skill_cont11`).style.display = `none`;
            document.querySelector(`#skill_cont${option}`).style.display = `flex`;
        },
        window.drawinfo = document.querySelector(`#infoDraw`),
        window.drawinfo1 = document.querySelector(`#infoDraw1`),
        window.s = s1 => document.querySelector(`#style`).innerHTML += s1,
        window.imgD = document.querySelector(`#imgD`),
        window.imgDsrc = 0,
        window.extnum = num => {
            we = ``;
            for (a = 0; a < num.length - 2; a++) we += num[a];
            return Number(we);
        },
        window.get = (ref, pro, typ) => {
            if (typ !== 1) ref = document.querySelector(ref);
            return extnum(window.getComputedStyle(ref)[pro]);
        },
        window.some = data => data <= 100 / 7 ? `orange` : data <= 100 / 7 * 2 ? `yellow` : data <= 100 / 7 * 3 ? `indigo` : data <= 100 / 7 * 4 ? `violet` : data <= 100 / 7 * 5 ? `blue` : data <= 100 / 7 * 6 ? `red` : `green`,
        window.some2 = data => data <= 100 / 7 ? `crimson` : data <= 100 / 7 * 2 ? `darkorange` : data <= 100 / 7 * 3 ? `cyan` : data <= 100 / 7 * 4 ? `purple` : data <= 100 / 7 * 5 ? `lightblue` : data <= 100 / 7 * 6 ? `orange` : `lawngreen`,
        window.ele2 = arr => {
            o = ``;
            for (z = 0; z < arr.length; z++) o += `<div style='color: ${some(arr[z][1])}'><label class='label_info'>${arr[z][0]}:</label><div class='skill_bar'><div class='skill_bar_ele' style='width: ${arr[z][1]}%;background-color: ${some(arr[z][1])}'><label class='label_per' style='color: ${some2(arr[z][1])}!important;'>${arr[z][1]}%</label></div></div></div>`;
            return o;
        },
        window.addstuff = aaa => {
            let is, tx, a;
            for (q = 0; q < aaa.length; q++) {
                is = aaa[q][0];
                tx = aaa[q][1];
                a = aaa[q][2];
                document.querySelector(`#mainContainer`).innerHTML += `<div class='skill_con' id='skill_cont${q+1}'><div class='skill_ele1'><img src='${is}' class='skill_img'><label class='skill_title'>${tx}</label></div><div class='skill_ele2'>${ele2(a)}</div</div>`;
            };
            cont(1);
        },
        window.ratei = 0,
        window.resetcheck = () => document.querySelector(`#name`).value || document.querySelector(`#review`).value || ratei ? document.querySelector(`#reset`).style.display = `block` : document.querySelector(`#reset`).style.display = `none`;
    window.reset = () => (rate(0), document.querySelector(`#reset`).style.display = `none`, document.querySelector(`#name`).value = ``, document.querySelector(`#review`).value = ``, closef());
    window.rate = q => {
        ratei = q;
        document.querySelector(`#rate1`).src = `star_d.png`;
        document.querySelector(`#rate2`).src = `star_d.png`;
        document.querySelector(`#rate3`).src = `star_d.png`;
        document.querySelector(`#rate4`).src = `star_d.png`;
        document.querySelector(`#rate5`).src = `star_d.png`;
        switch (q) {
            case 5:
                document.querySelector(`#rate5`).src = `star_e.png`;
            case 4:
                document.querySelector(`#rate4`).src = `star_e.png`;
            case 3:
                document.querySelector(`#rate3`).src = `star_e.png`;
            case 2:
                document.querySelector(`#rate2`).src = `star_e.png`;
            case 1:
                document.querySelector(`#rate1`).src = `star_e.png`;
                document.querySelector(`#reset`).style.display = `block`;
        };
    };
    window.add = () => {
        addstuff([
            [`33.2.png`, `HTML`, [
                [`Basics`, 100],
                [`Most Frequently Used`, 90],
                [`Everything in HTML`, 30]
            ]],
            [`33.3.png`, `CSS`, [
                [`Basics`, 100],
                [`Flexbox`, 100],
                [`Media Queries`, 85],
                [`Grid`, 5],
                [`Transition & Transform`, 0.1]
            ]],
            [`33.4.png`, `JS`, [
                [`Basics`, 100],
                [`Canvas`, 85],
                [`DOM Response using CSS`, 90],
                [`Backend Related Basics`, 55],
                [`Event Listeners`, 100]
            ]],
            [`33.5.png`, `Tinkercad`, [
                [`Basics`, 75]
            ]],
            [`33.6.png`, `Blender`, [
                [`Basics`, 20]
            ]],
            [`33.7.png`, `Dialogflow`, [
                [`Basics`, 100]
            ]],
            [`33.8.png`, `Github`, [
                [`Hosting`, 100]
            ]],
            [`33.9.png`, `Firebase`, [
                [`Basics`, 100],
                [`Rules`, 0]
            ]],
            [`33.10.png`, `Teachable Machine`, [
                [`Image & Audio Project`, 100],
                [`Linking to Web`, 100]
            ]],
            [`33.11.png`, `Code.org`, [
                [`Basics`, 100],
                [`Everything`, 90]
            ]],
            [`33.12.png`, `Thunkable`, [
                [`Basics`, 100],
                [`Everthing`, 70]
            ]]
        ]);
        setTimeout(() => {
            document.querySelector(`#float`).style.display = `none`;
            document.querySelector(`#float1`).style.display = `block`;
        }, 1500);
    };
    window.open_float = () => {
        document.querySelector(`#float1`).style.display = `none`;
        document.querySelector(`#float`).style.display = `flex`;
    };
    window.closef = () => {
        document.querySelector(`#float`).style.display = `none`;
        document.querySelector(`#float1`).style.display = `block`;
    };
    window.submit = () => {
        ratei ?
            checkname(document.querySelector(`#name`).value) ?
            checkname(document.querySelector(`#review`).value) ?
            (localStorage.getItem(`ReviewID`) ?
                firebase.database().ref(`Portfolio/EditedReviews/${localStorage.getItem(`ReviewID`)}`).push({
                    'Name': document.querySelector(`#name`).value,
                    'Comment': document.querySelector(`#review`).value,
                    'Rating': ratei
                }) :
                firebase.database().ref(`Portfolio/FirstReviews`).push({
                    'Name': document.querySelector(`#name`).value,
                    'Comment': document.querySelector(`#review`).value,
                    'Rating': ratei
                }).then(snap => localStorage.setItem(`ReviewID`, snap.key)), reset()) :
            modal(`Invalid Review`, `Enter Your Review.`, 2) :
            modal(`Invalid Name`, `Enter Your Name.`, 2) :
            modal(`Rating Required`, `Please Specify A Rating From 1 - 5.`, 2)
    };
    window.checkname = q => {
        acc = false;
        if (q)
            for (q1 = 0; q1 < q.length; q1++)
                if (q[q1] !== ` `) acc = true;
        return acc;
    };
    window.opens = () => x === 0 ? (x = 1, s(`#nav_c{display: flex;top: ${get(`#nav`, `height`) + 25}px;}`)) : (x = 0, setTimeout(() => s(`#nav_c{display: none;}`), 5));
    window.checkdraw = () => {
        imgD.src = `draw${imgDsrc}.jpg`;
        imgfull.src = `draw${imgDsrc}.jpg`;
        return imgDsrc === 1 ? `Doodle Art ~ 5th STD` : imgDsrc === 2 ? `Angry 2 Birds Movie Poster ~ 5th STD` : imgDsrc === 3 ? `Pot ~ 7th STD` : imgDsrc === 4 ? `Landscape ~ 7th STD` : imgDsrc === 5 ? `Flower ~ 7th STD` : imgDsrc === 6 ? `Olympic Logo ~ 7th STD` : imgDsrc === 7 ? `Flower ~ 7th STD` : imgDsrc === 8 ? `Room Perspective ~ 6th STD` : imgDsrc === 9 ? `Ganesha ~ 6th STD` : imgDsrc === 10 ? `Shapes ~ 7th STD` : imgDsrc === 11 ? `Water Bottle ~ 7th STD` : imgDsrc === 12 ? `Jar ~ 7th STD` : imgDsrc === 13 ? `Fruits ~ 7th STD` : imgDsrc === 14 ? `Boxes ~ 7th STD` : imgDsrc === 15 ? `Tree Cross Hatching ~ 7th STD` : imgDsrc === 16 ? `Fish ~ 7th STD` : imgDsrc === 17 ? `Rose ~ 7th STD` : imgDsrc === 18 ? `Cherry Blossom Painting ~ 7th STD` : imgDsrc === 19 ? `Temple ~ UKG` : imgDsrc === 20 ? `Cartoon Characters ~ 8th STD` : imgDsrc === 21 ? `Cartoon Characters ~ 8th STD` : imgDsrc === 22 ? `Cartoon Characters ~ 8th STD` : imgDsrc === 23 ? `Wolf Shading ~ 8th STD` : imgDsrc === 24 ? `Tiger Shading ~ 8th STD` : imgDsrc === 25 ? `One Point Perspective ~ 8th STD` : imgDsrc === 26 ? `Two Point Perspective ~ 8th STD` : imgDsrc === 27 ? `Three Point Perspective ~ 8th STD` : imgDsrc === 28 ? `Camel Tonal Illustration ~ 8th STD` : imgDsrc === 29 ? `Elephant Tonal Illustration ~ 8th STD` : imgDsrc === 30 ? `Flowers ~ 8th STD` : imgDsrc === 31 ? `Scenary Sun Set ~ 8th STD` : imgDsrc === 32 ? `Pot Shading ~ 8th STD` : imgDsrc === 33 ? `Cock Palette Knife Painting ~ 8th STD` : imgDsrc === 34 ? `Disney Cars ~ 8th STD` : imgDsrc === 35 ? `Disney Cars ~ 8th STD` : imgDsrc === 36 ? `Disney Cars ~ 8th STD` : imgDsrc === 37 ? `Objects Shading ~ 8th STD` : imgDsrc === 38 ? `Vegetables Shading ~ 8th STD` : imgDsrc === 39 ? `Crane Shading ~ 8th STD` : imgDsrc === 40 ? `Body Parts ~ 8th STD` : imgDsrc === 41 ? `Body Parts ~ 8th STD` : imgDsrc === 42 ? `Body Parts ~ 8th STD` : imgDsrc === 43 ? `Body Parts ~ 8th STD` : imgDsrc === 44 ? `Perspective ~ 8th STD` : imgDsrc === 45 ? `Scenary ~ 8th STD` : imgDsrc === 46 ? `Owl ~ 7th STD` : imgDsrc === 47 ? `Diwali ~ 8th STD` : imgDsrc === 48 ? `Forests Poster ~ 7th STD` : imgDsrc === 49 ? `Taj Mahal ~ 4th STD` : imgDsrc === 50 ? `Importance Of Pollination Poster ~ 7th STD` : imgDsrc === 51 ? `Child Labour Poster ~ 7th STD` : imgDsrc === 52 ? `Elephant Tonal Illustration ~ 7th STD` : imgDsrc === 53 ? `Warli Art ~ 7th STD` : imgDsrc === 54 ? `Madhubani Art ~ 7th STD` : imgDsrc === 55 ? `Kalamkari Art ~ 7th STD` : imgDsrc === 56 ? `One Point Perspective ~ 7th STD` : imgDsrc === 57 ? `Two Point Perspective ~ 7th STD` : imgDsrc === 58 ? `Three Point Perspective ~ 7th STD` : `Madhubani Art ~ 7th STD`
    };
    window.prev = () => {
        imgDsrc -= 1;
        if (imgDsrc === 0) imgDsrc = 59;
        drawinfo.innerHTML = checkdraw();
        drawinfo1.innerHTML = drawinfo.innerHTML
    };
    window.next = () => {
        imgDsrc++;
        if (imgDsrc === 60) imgDsrc = 1;
        drawinfo.innerHTML = checkdraw();
        drawinfo1.innerHTML = drawinfo.innerHTML
    };
    window.response = () => {
        w_s = get(`#hid`, `width`);
        h_s = get(`#hid`, `height`);
        document.querySelector('#style').innerHTML = ``;
        s(`#float label,#float input,#float button{font-size:${w_s*30/1906}px;}#infoDraw,#tab{font-size:${w_s*2/100}px;}#infoDraw1{font-size:${w_s*3/100}px;}#label1{font-size:${w_s * 100 / 1087.33}px;}#label3{font-size:${w_s * 75 / 1498}px;}#label2{font-size:${w_s * 80 / 1087.33}px;}#label9,#label10,#label8{font-size:${99 * w_s / 1906}px;}.note,.label_info{font-size:${25 * w_s / 1906}px;}.l{font-size:33px;padding:5px 15px 5px 15px;display:block;}#b1,#nav_c,.cl,.h{display:none;}.label_per{font-size:${20 * w_s / 1906}px;}.skill_con{padding:${25 * w_s / 1906}px;}`);
        x = 1;
        opens();
        w_s < h_s ? s(`#section{min-height:75vw;}#imgD{border-width:.6vw;max-width:73.8vw;max-height:73.8vw;}#contD span{width:80vw!important;height:80vw!important;}`) : s(`section{min-height:90vh;}#imgD{border-width:.6vh;max-width:73.8vh;max-height:73.8vh;}#contD span{width:80vh!important;height:80vh!important;}`);
        if (w_s < 1470) {
            s(`.l{font-size:30px;}`);
            if (w_s < 1355) {
                s(`#b1{display:block;}#l8{display:none;}#cl8{display:block;}`);
                if (w_s < 1300) {
                    s(`.l{font-size:28px;}`);
                    if (w_s < 1185) {
                        s(`#l7{display:none;}#cl7{display:block;}#hr7{display:block;}`);
                        if (w_s < 1085) {
                            s(`#l6{display:none;}#cl6{display:block;}#hr6{display:block;}`);
                            if (w_s < 970) {
                                s(`.l{font-size:25px;}`);
                                if (w_s < 870) {
                                    s(`.l{font-size:22px;padding:5px 10px 5px 10px;}`);
                                    if (w_s < 760) {
                                        s(`.l{padding: 5px 8px 5px 8px;}#label3{font-size:${w_s * 100 / 1498}px;}`);
                                        if (w_s < 720) {
                                            s(`.l{font-size:20px;padding: 5px 6px 5px 6px;}`);
                                            if (w_s < 645) {
                                                s(`#l5{display:none;}#cl5{display:block;}#hr5{display:block;}`);
                                                if (w_s < 580) {
                                                    s(`#l4{display:none;}#cl4{display:block;}#hr4{display:block;}`);
                                                    if (w_s < 490) {
                                                        s(`#label1{font-size:${w_s * 170 / 1087.33}px;}#label2{font-size:${w_s * 100 / 1087.33}px;}#label3{font-size:${w_s * 130 / 1498}px;}`);
                                                        if (w_s < 439) {
                                                            s(`#l3{display:none;}#cl3{display:block;}#hr3{display:block;}`);
                                                            if (w_s < 380) {
                                                                s(`#label1{font-size:${w_s * 200 / 1087.33}px;}#label2{font-size:${w_s * 110 / 1087.33}px;}`);
                                                                if (w_s < 250) {
                                                                    s(`#nav_c{left: 0px !important;}`);
                                                                };
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        if (w_s * 75 / 1498 < 30) s(`#label3{font-size: 30px;}`);
        if (30 * w_s / 1906 < 20) s(`#float label,#float input,#float button{font-size: 20px;}`);
        if (25 * w_s / 1906 < 20) {
            s(`.note{font-size:20px;}`);
            if (25 * w_s / 1906 < 16) {
                s(`.label_info{font-size:16px;}`);
                if (25 * w_s / 1906 < 3) s(`.skil_con{padding:3px;}`);
            };
        };
        if (w_s * 2 / 100 < 15) s(`#infoDraw{font-size:15px;}`);
        if (w_s * 2 / 100 < 12) s(`#tab{font-size:9px;}`);
        if (w_s * 3 / 100 < 15) s(`#infoDraw1{font-size:15px;}`);
        if (20 * w_s / 1906 < 12) s(`.label_per{font-size:12px;}`);
        if (99 * w_s / 1906 < 45) {
            s(`#label9,#label10{font-size:45px;}`);
            if (99 * w_s / 1906 < 39) s(`#label8{font-size:39px;}`);
        };
        a1 = get(`#label1`, `fontSize`) / 17;
        if (a1 < 4) a1 = 4;
        a2 = get(`#label2`, `fontSize`) / 17;
        a3 = get(`#label3`, `fontSize`) / 13;
        if (a3 < 2) a3 = 2;
        s(`.label7{font-size:${50 * w_s / 1906}px}#img1{padding:${9 * w_s / 1906}px;border-width:${11 * w_s / 1906}px;}.hobby_label,#label6,#label7,.book_a{font-size:${90 * w_s / 1906}px;}.book_content{border-width:${15 * w_s / 1906}px;padding:${25 * w_s / 1906}px;border-radius:${60 * w_s / 1906}px;}#label5{font-size:${90 * w_s / 1906}px;}#hr61{height:${get(`#label3`, `width`) * 3 / 100}px;margin:0px;padding:0px;border-width 0px;width:${(get(`#label3`, `width`) + 10)}px;background-color:green;}`);
        if (70 * w_s / 958 < 30) s(`#label4{font-size:30px;}`);
        if (get(`#hr61`, `height`) < 3) s(`#hr61{height:3px;}`);
        if (90 * w_s / 1906 < 20) s(`.book_a{font-size:20px;}`);
        if (90 * w_s / 1906 < 30) s(`#label5,#label7{font-size:30px;}`);
        if (15 * w_s / 1906 < 3) s(`.book_content{border-width:3px}`);
        if (90 * w_s / 1906 < 30) s(`#label6{font-size:30px;}`);
        if (50 * w_s / 1906 < 30) s(`.label7{font-size:30px;}`);
        25 * w_s / 1906 >= 17 ? s(`.bold,.content{font-size:${30 * w_s / 1906}px;}`) : s(`.bold,.content{font-size:17px;}`);
        if (90 * w_s / 1906 < 50) s(`.hobby_label{font-size:50px;}`);
        s(`#label5{text-shadow:rgb(255, 31, 31) ${(2.5 * get(`#label5`, `width`) / 130)}px ${(2.5 * get(`#label5`, `width`) / 130)}px 5px;}#label6{text-shadow:lawngreen ${9 * w_s / 1906}px ${9 * w_s / 1906}px 5px;}#label4{text-shadow: cyan ${3.5 * get(`#label4`, `width`) / 523.312}px ${2.5 * get(`#label4`, `width`) / 523.312}px 0px;}#label1{text-shadow:rgb(45, 248, 255) ${a1}px ${a1}px 0px;}#label2{text-shadow:rgb(6, 173, 0) ${a2}px ${a2}px 5px;}#label3{text-shadow:rgb(4, 168, 4) ${a3}px ${a3}px 0px;}#label4{font-size:${70 * w_s / 958}px;}#label7{text-shadow: rgb(0, 255, 0) ${9 * get(`#label7`, `width`) / 237.4 }px ${9 * get(`#label7`, `width`) / 237.4}px 0px;}#label9{text-shadow: #ff00f2 ${3 * get(`#label9`, `width`) / 346.391}px ${3 * get(`#label9`, `width`) / 346.391}px 6px;}#label8{text-shadow: rgb(255, 97, 234) ${9 * get(`#label8`, `width`) / 400}px ${9 * get(`#label8`, `width`) / 400}px 0px;}`)
    };
    window.l = 0;
    window.l2 = 0;
    window.interval, window.refreshed = 0;
    window.c = () => setTimeout(() => l === 1 ? c() : (p === 1 ? opens() : (x = 1, opens()), p = 0), 50);
    window.down1 = () => p = 1;
    window.up = () => l = 0;
    window.cimg = () => document.querySelector(`#imgcont`).style.display = `none`;
    window.oimg = () => {
        document.querySelector(`#imgcont`).style.display = `flex`;
        refreshed = 1;
        interval = setTimeout(() => s(`#previmg,#nextimg,#infoDraw1,#closeimg{display:none;}`), 5000)
    };
    window.down = () => {
        l = 1;
        c();
        refreshed = 1;
        l2 ? l2 = 0 : cimg();
    };
    window.move = () => refreshed = 1;
    document.body.style.display = "flex";
    add();
    document.querySelector('#b1').addEventListener(`mousedown`, down1);
    document.querySelector('#b1').addEventListener(`touchstart`, down1);
    document.querySelector(`#imgfull`).addEventListener(`mousedown`, () => l2 = 1);
    document.querySelector(`#previmg`).addEventListener(`mousedown`, () => l2 = 1);
    document.querySelector(`#nextimg`).addEventListener(`mousedown`, () => l2 = 1);
    document.querySelector(`#infoDraw1`).addEventListener(`mousedown`, () => l2 = 1);
    document.querySelector(`#imgfull`).addEventListener(`touchstart`, () => l2 = 1);
    document.querySelector(`#previmg`).addEventListener(`touchstart`, () => l2 = 1);
    document.querySelector(`#nextimg`).addEventListener(`touchstart`, () => l2 = 1);
    document.querySelector(`#infoDraw1`).addEventListener(`touchstart`, () => l2 = 1);
    window.addEventListener(`mousedown`, down);
    window.addEventListener(`touchstart`, down);
    window.addEventListener(`mousemove`, move);
    window.addEventListener(`touchmove`, move);
    window.addEventListener(`mouseup`, up);
    window.addEventListener(`touchend`, up);
    window.addEventListener(`keydown`, q => {
        ek = q.key;
        ek === `ArrowLeft` ? prev() : ek === `ArrowRight` ? next() : refreshed = 1
    });
    response();
    setInterval(() => {
        if (get(`#hid`, `width`) !== w_s || get(`#hid`, `height`) !== h_s) response();
    }, 0);
    setInterval(() => {
        if (refreshed && window.getComputedStyle(document.querySelector(`#imgcont`)).display === `flex`) {
            s(`#previmg,#nextimg,#infoDraw1,#closeimg{display:block;}`);
            clearTimeout(interval);
            interval = setTimeout(() => s(`#previmg,#nextimg,#infoDraw1,#closeimg{display:none;}`), 3000);
        };
        refreshed = 0;
    }, 0);
    next();
}, 1000);
