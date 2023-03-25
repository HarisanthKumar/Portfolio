// const firebaseConfig = {
//     apiKey: `AIzaSyDoDxn2YU6Jjk7b2hNaptHjwxg06Y2GKeM`,
//     authDomain: `bingo-f76d1.firebaseapp.com`,
//     databaseURL: `https://bingo-f76d1-default-rtdb.firebaseio.com`,
//     projectId: `bingo-f76d1`,
//     storageBucket: `bingo-f76d1.appspot.com`,
//     messagingSenderId: `744971445434`,
//     appId: `1:744971445434:web:13c8697adeea397e6a8e83`,
//     measurementId: `G-79B602PK6J`,
//     databaseURL: `https://bingo-f76d1-default-rtdb.firebaseio.com/`
// };
// firebase.initializeApp(firebaseConfig);
// firebase.database().ref(`Portfolio/View`).on("value", (snapshot) => {
//     snapshot.forEach((childsnapshot) => {
//         snaps[childsnapshot.key] = childsnapshot.val();
//     });
// });
var allviews = undefined,
    views = undefined,
    snaps = {},
    img_d_c = () => {
        img_count++;
        if (img_count === 44) {
            document.querySelector("#loadwait").style.display = "none";
            document.querySelector("#loadwebsite").style.display = "flex";
            loadweb();
        };
    },
    set_img = (q, q1) => {
        var q33333 = setInterval(() => {
            if (window[`img${q1}_q`] !== undefined) {
                if (q)
                    for (q3 = 0; q3 < q.length; q3++) document.querySelector(q[q3]).src = window[`img${q1}_q`].src;
                img_d_c();
                clearInterval(q33333);
            }
        }, 50);
    },
    downloadimg = () => {
        loadmodaljs();
        window.img_count = 0;
        window.img1_q = new Image();
        window.img2_q = new Image();
        window.img3_q = new Image();
        window.img4_q = new Image();
        window.img5_q = new Image();
        window.img6_q = new Image();
        window.img7_q = new Image();
        window.img8_q = new Image();
        window.img9_q = new Image();
        window.img10_q = new Image();
        window.img11_q = new Image();
        window.img12_q = new Image();
        window.img13_q = new Image();
        window.img14_q = new Image();
        window.img15_q = new Image();
        window.img16_q = new Image();
        window.img17_q = new Image();
        window.img18_q = new Image();
        window.img19_q = new Image();
        window.img20_q = new Image();
        window.img21_q = new Image();
        window.img22_q = new Image();
        window.img23_q = new Image();
        window.img24_q = new Image();
        window.img25_q = new Image();
        window.img26_q = new Image();
        window.img27_q = new Image();
        window.img28_q = new Image();
        window.img29_q = new Image();
        window.img30_q = new Image();
        window.img31_q = new Image();
        window.img32_q = new Image();
        window.img33_q = new Image();
        window.img34_q = new Image();
        window.img35_q = new Image();
        window.img36_q = new Image();
        window.img37_q = new Image();
        window.img38_q = new Image();
        window.img39_q = new Image();
        window.img40_q = new Image();
        window.img41_q = new Image();
        window.img42_q = new Image();
        window.img43_q = new Image();
        window.img44_q = new Image();
        img1_q.src = "../media/33.1.png";
        img2_q.src = "../media/33.2.png";
        img3_q.src = "../media/33.3.png";
        img4_q.src = "../media/33.4.png";
        img5_q.src = "../media/33.5.png";
        img6_q.src = "../media/33.6.png";
        img7_q.src = "../media/33.7.png";
        img8_q.src = "../media/33.8.png";
        img9_q.src = "../media/33.9.png";
        img10_q.src = "../media/33.10.png";
        img11_q.src = "../media/33.11.png";
        img12_q.src = "../media/33.12.png";
        img13_q.src = "../media/draw1.jpg";
        img14_q.src = "../media/draw2.jpg";
        img15_q.src = "../media/draw3.jpg";
        img16_q.src = "../media/draw4.jpg";
        img17_q.src = "../media/draw5.jpg";
        img18_q.src = "../media/draw6.jpg";
        img19_q.src = "../media/draw7.jpg";
        img20_q.src = "../media/draw8.jpg";
        img21_q.src = "../media/draw9.jpg";
        img22_q.src = "../media/draw10.jpg";
        img23_q.src = "../media/draw11.jpg";
        img24_q.src = "../media/draw12.jpg";
        img25_q.src = "../media/draw13.jpg";
        img26_q.src = "../media/draw14.jpg";
        img27_q.src = "../media/draw15.jpg";
        img28_q.src = "../media/draw16.jpg";
        img29_q.src = "../media/Geronimo Stilton.jpg";
        img30_q.src = "../media/draw17.jpg";
        img31_q.src = "../media/draw18.jpg";
        img32_q.src = "../media/draw19.jpg";
        img33_q.src = "../media/ho.jpg";
        img34_q.src = "../media/hobbies.1.jpg";
        img35_q.src = "../media/hobbies.2.jpg";
        img36_q.src = "../media/hobbies.3.jpg";
        img37_q.src = "../media/hobbies.4.png";
        img38_q.src = "../media/star_d.png";
        img39_q.src = "../media/star_e.png";
        img40_q.src = "../media/prev.png";
        img41_q.src = "../media/next.png";
        img42_q.src = "../media/close.png";
        img43_q.src = "../media/tom gates logo.jpg";
        img44_q.src = "../media/treasure island.jpg";
        img1_q.onload = () => set_img(["#b1"], 1)
        img2_q.onload = () => set_img(["#anony1"], 2);
        img3_q.onload = () => set_img(["#anony2"], 3);
        img4_q.onload = () => set_img(["#anony3"], 4);
        img5_q.onload = () => set_img(["#anony4"], 5);
        img6_q.onload = () => set_img(["#anony5"], 6);
        img7_q.onload = () => set_img(["#anony6"], 7);
        img8_q.onload = () => set_img(["#anony7"], 8);
        img9_q.onload = () => set_img(["#anony8"], 9);
        img10_q.onload = () => set_img(["#anony9"], 10);
        img11_q.onload = () => set_img(["#anony10"], 11);
        img12_q.onload = () => set_img(["#anony11"], 12);
        img13_q.onload = () => set_img(0, 13);
        img14_q.onload = () => set_img(0, 14);
        img15_q.onload = () => set_img(0, 15);
        img16_q.onload = () => set_img(0, 16);
        img17_q.onload = () => set_img(0, 17);
        img18_q.onload = () => set_img(0, 18);
        img19_q.onload = () => set_img(0, 19);
        img20_q.onload = () => set_img(0, 20);
        img21_q.onload = () => set_img(0, 21);
        img22_q.onload = () => set_img(0, 22);
        img23_q.onload = () => set_img(0, 23);
        img24_q.onload = () => set_img(0, 24);
        img25_q.onload = () => set_img(0, 25);
        img26_q.onload = () => set_img(0, 26);
        img27_q.onload = () => set_img(0, 27);
        img28_q.onload = () => set_img(0, 28);
        img29_q.onload = () => set_img(["#anony19"], 29);
        img30_q.onload = () => set_img(0, 30);
        img31_q.onload = () => set_img(0, 31);
        img32_q.onload = () => set_img(0, 32);
        img33_q.onload = () => set_img(["#anony12"], 33);
        img34_q.onload = () => set_img(["#anony13"], 34);
        img35_q.onload = () => set_img(["#anony14"], 35);
        img36_q.onload = () => set_img(["#img1"], 36);
        img37_q.onload = () => set_img(["#anony15"], 37);
        img38_q.onload = () => set_img(["#rate1", "#rate2", "#rate3", "#rate4", "#rate5"], 38);
        img39_q.onload = () => set_img(["#float1"], 39);
        img40_q.onload = () => set_img(["#anony16", "#previmg"], 40);
        img41_q.onload = () => set_img(["#anony17", "#nextimg"], 41);
        img42_q.onload = () => set_img(["#closeimg"], 42);
        img43_q.onload = () => set_img(["#anony18"], 43);
        img44_q.onload = () => set_img(["#anony20"], 44);
    },
    loadweb = () => {
        // allviews = snaps.AllViews;
        // views=snaps.Views;
        // firebase.database().ref("Portfolio/View").update({
        //     "AllViews": allviews + 1
        // });
        // if (!localStorage.getItem("Viewed")) {
        //     firebase.database().ref("Portfolio/View").update({
        //         "Views": views + 1
        //     });
        //     localStorage.setItem("Viewed", "Yes");
        // };
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
            document.querySelector(`#rate1`).src = `../media/star_d.png`;
            document.querySelector(`#rate2`).src = `../media/star_d.png`;
            document.querySelector(`#rate3`).src = `../media/star_d.png`;
            document.querySelector(`#rate4`).src = `../media/star_d.png`;
            document.querySelector(`#rate5`).src = `../media/star_d.png`;
            switch (q) {
                case 5:
                    document.querySelector(`#rate5`).src = `../media/star_e.png`;
                case 4:
                    document.querySelector(`#rate4`).src = `../media/star_e.png`;
                case 3:
                    document.querySelector(`#rate3`).src = `../media/star_e.png`;
                case 2:
                    document.querySelector(`#rate2`).src = `../media/star_e.png`;
                case 1:
                    document.querySelector(`#rate1`).src = `../media/star_e.png`;
                    document.querySelector(`#reset`).style.display = `block`;
            };
        };
        window.add = () => {
            addstuff([
                [`../media/33.2.png`, `HTML`, [
                    [`Basics`, 100],
                    [`Most Frequently Used`, 90],
                    [`Everything in HTML`, 30]
                ]],
                [`../media/33.3.png`, `CSS`, [
                    [`Basics`, 100],
                    [`Flexbox`, 100],
                    [`Media Queries`, 85],
                    [`Grid`, 5],
                    [`Transition & Transform`, 0.1]
                ]],
                [`../media/33.4.png`, `JS`, [
                    [`Basics`, 100],
                    [`Canvas`, 85],
                    [`DOM Response using CSS`, 90],
                    [`Backend Related Basics`, 55],
                    [`Event Listeners`, 100]
                ]],
                [`../media/33.5.png`, `Tinkercad`, [
                    [`Basics`, 75]
                ]],
                [`../media/33.6.png`, `Blender`, [
                    [`Basics`, 10]
                ]],
                [`../media/33.7.png`, `Dialogflow`, [
                    [`Basics`, 100]
                ]],
                [`../media/33.8.png`, `Github`, [
                    [`Hosting`, 100]
                ]],
                [`../media/33.9.png`, `Firebase`, [
                    [`Basics`, 100],
                    [`Rules`, 5]
                ]],
                [`../media/33.10.png`, `Teachable Machine`, [
                    [`Image & Audio Project`, 100],
                    [`Linking to Web`, 100]
                ]],
                [`../media/33.11.png`, `Code.org`, [
                    [`Basics`, 100],
                    [`Everything`, 90]
                ]],
                [`../media/33.12.png`, `Thunkable`, [
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
            imgD.src = `../media/draw${imgDsrc}.jpg`;
            imgfull.src = `../media/draw${imgDsrc}.jpg`;
            return imgDsrc === 1 ? `Fish ~ 7th STD` :
                imgDsrc === 2 ? `Doodle Art ~ 5th STD` :
                imgDsrc === 3 ? `Temple ~ UKG` :
                imgDsrc === 4 ? `Tiger Shading ~ 8th STD` :
                imgDsrc === 5 ? `Flowers ~ 8th STD` :
                imgDsrc === 6 ? `Sunset ~ 8th STD` :
                imgDsrc === 7 ? `Cock Palette-Knife Painting ~ 8th STD` :
                imgDsrc === 8 ? `Object Drawings ~ 7th STD` :
                imgDsrc === 9 ? `Cartoon Characters ~ 8th STD` :
                imgDsrc === 10 ? `Perspective ~ 7th & 8th STD` :
                imgDsrc === 11 ? `Animals And Scenary ~ 7th & 8th STD` :
                imgDsrc === 12 ? `Cars ~ 8th STD` :
                imgDsrc === 13 ? `Drawings ~ 7th STD` :
                imgDsrc === 14 ? `Drawings ~ 6th & 7th STD` :
                imgDsrc === 15 ? `Folk Arts ~ 7th STD` :
                imgDsrc === 16 ? `Tree Poster ~ 7th STD` :
                imgDsrc === 17 ? `Taj Mahal ~ 5th STD` :
                imgDsrc === 18 ? `Pollination Poster ~ 7th STD` :
                `Child Labour Poster ~ 7th STD`;
        };
        window.prev = () => {
            imgDsrc -= 1;
            if (imgDsrc === 0) imgDsrc = 19;
            drawinfo.innerHTML = checkdraw();
            drawinfo1.innerHTML = drawinfo.innerHTML
        };
        window.next = () => {
            imgDsrc++;
            if (imgDsrc === 20) imgDsrc = 1;
            drawinfo.innerHTML = checkdraw();
            drawinfo1.innerHTML = drawinfo.innerHTML
        };
        window.response = () => {
            w_s = get(`#hid`, `width`);
            h_s = get(`#hid`, `height`);
            document.querySelector('#style').innerHTML = ``;
            s(`#float label,#float input,#float button{font-size:${w_s*30/1906}px;}#infoDraw,#tab{font-size:${w_s*2/100}px;}#infoDraw1{font-size:${w_s*3/100}px;}#label1{font-size:${w_s * 100 / 1087.33}px;}#label3{font-size:${w_s * 75 / 1498}px;}#label2{font-size:${w_s * 80 / 1087.33}px;}#label9,#label10,#label8{font-size:${99 * w_s / 1906}px;}.note,.label_info{font-size:${25 * w_s / 1906}px;}.l{font-size:33px;padding:5px 15px 5px 15px;display:block;}#b1,#nav_c,.cl,.h{display:none;}.label_per{font-size:${20 * w_s / 1906}px;}.skill_con{padding:${25 * w_s / 1906}px;}`);
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
            s(`#cont a{font-size:${25 * w_s / 1906}px;}.label7{font-size:${50 * w_s / 1906}px}#img1{padding:${9 * w_s / 1906}px;border-width:${11 * w_s / 1906}px;}.hobby_label,#label6,#label7,.book_a{font-size:${90 * w_s / 1906}px;}.book_content{border-width:${15 * w_s / 1906}px;padding:${25 * w_s / 1906}px;border-radius:${60 * w_s / 1906}px;}#label5{font-size:${90 * w_s / 1906}px;}#hr61{height:${get(`#label3`, `width`) * 3 / 100}px;margin:0px;padding:0px;border-width 0px;width:${(get(`#label3`, `width`) + 10)}px;background-color:green;}`);
            if (70 * w_s / 958 < 30) s(`#label4{font-size:30px;}`);
            if (get(`#hr61`, `height`) < 3) s(`#hr61{height:3px;}`);
            if (90 * w_s / 1906 < 20) s(`.book_a{font-size:20px;}`);
            if (90 * w_s / 1906 < 30) s(`#label5,#label7{font-size:30px;}`);
            if (15 * w_s / 1906 < 3) s(`.book_content{border-width:3px}`);
            if (90 * w_s / 1906 < 30) s(`#label6{font-size:30px;}`);
            if (50 * w_s / 1906 < 35) s(`.label7{font-size:25px;}`);
            25 * w_s / 1906 >= 17 ? s(`.bold,.content{font-size:${30 * w_s / 1906}px;}`) : s(`.bold,.content, #cont a{font-size:17px;}`);
            if (90 * w_s / 1906 < 39) s(`.hobby_label{font-size:39px;}`);
            s(`#label5{text-shadow:rgb(255, 31, 31) ${(2.5 * get(`#label5`, `width`) / 130)}px ${(2.5 * get(`#label5`, `width`) / 130)}px 5px;}#label6{text-shadow:lawngreen ${9 * w_s / 1906}px ${9 * w_s / 1906}px 5px;}#label4{text-shadow: cyan ${3.5 * get(`#label4`, `width`) / 523.312}px ${2.5 * get(`#label4`, `width`) / 523.312}px 0px;}#label1{text-shadow:rgb(45, 248, 255) ${a1}px ${a1}px 0px;}#label2{text-shadow:rgb(6, 173, 0) ${a2}px ${a2}px 5px;}#label3{text-shadow:rgb(4, 168, 4) ${a3}px ${a3}px 0px;}#label4{font-size:${70 * w_s / 958}px;}#label7{text-shadow: rgb(0, 255, 0) ${9 * get(`#label7`, `width`) / 237.4 }px ${9 * get(`#label7`, `width`) / 237.4}px 0px;}#label9{text-shadow: #ff00f2 ${3 * get(`#label9`, `width`) / 346.391}px ${3 * get(`#label9`, `width`) / 346.391}px 6px;}#label8{text-shadow: rgb(255, 97, 234) ${9 * get(`#label8`, `width`) / 400}px ${9 * get(`#label8`, `width`) / 400}px 0px;}`)
        };
        window.l = 0;
        window.l2 = 0;
        window.interval, window.refreshed = 0;
        window.c = () => setTimeout(() => l === 1 ? c() : (p === 1 ? opens() : (x = 1, opens()), p = 0), 50);
        window.down1 = () => {
            p = 1;
            console.log('down');
        };
        window.up = () => {
            l = 0;
            console.log('up');
        };
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
        document.querySelector(`#imgfull`).addEventListener(`mousedown`, () => l2 = 1);
        document.querySelector(`#previmg`).addEventListener(`mousedown`, () => l2 = 1);
        document.querySelector(`#nextimg`).addEventListener(`mousedown`, () => l2 = 1);
        document.querySelector(`#infoDraw1`).addEventListener(`mousedown`, () => l2 = 1);
        window.addEventListener(`mousedown`, down);
        window.addEventListener(`mousemove`, move);
        window.addEventListener(`touchmove`, move);
        window.addEventListener(`mouseup`, up);
        window.addEventListener(`keydown`, q => {
            ek = q.key;
            ek === `ArrowLeft` ? prev() : ek === `ArrowRight` ? next() : refreshed = 1
        });
        response();
        window.addEventListener("resize", response);
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
    };