loadmodaljs = () => {
    document.body.innerHTML += '<div id="modalbgcover"><div id="modal"><div id="title"></div><hr id="modalhr"><div id="content1"></div><hr id="modalhr3"><span id="spanmodal"><button id="yes" onclick="yes()">Yes</button><button id="no" onclick="no()">No</button><button id="close" onclick="close3()">&times;</button></span></div></div>';
    window.modal1 = document.querySelector("#modal");
    window.title = document.querySelector("#title");
    window.message = document.querySelector("#content1");
    window.modalhr = document.querySelector("#modalhr");
    window.modalhr3 = document.querySelector("#modalhr3");
    window.spanmodal = document.querySelector("#spanmodal");
    window.spanmton = document.querySelector("#spanmodal button");
    window.yes3 = document.querySelector("#yes");
    window.no3 = document.querySelector("#no");
    window.close9 = document.querySelector("#close");
    window.modalcover = document.querySelector("#modalbgcover");
    window.change = () => {
        w_s = window.innerWidth;
        modal1.style.width = "500px";
        modal1.style.padding = "15px";
        if (w_s <= 620) {
            modal1.style.width = (w_s * 90 / 100 - 30) + "px";
        };
        if (w_s <= 370) {
            modal1.style.padding = "10px";
            modal1.style.width = (w_s * 95 / 100 - 30) + "px";
        };
    };
    window.modal = (title1, message1, type, ih) => {
        modalcover.style.display = "flex";
        title.innerHTML = title1;
        message.innerHTML = message1;
        if (type == "1") {
            yes3.style.display = "block";
            no3.style.display = "block";
            close9.style.display = "none";
        } else if (type == "2") {
            yes3.style.display = "none";
            no3.style.display = "none";
            close9.style.display = "block";
        } else if (type == "3") {
            yes3.style.display = "block";
            no3.style.display = "none";
            close9.style.display = "block";
        } else if (type == "4") {
            yes3.style.display = "none";
            no3.style.display = "block";
            close9.style.display = "block";
        };
        if (ih !== undefined) message.innerHTML += ih;
    };
    window.close3 = () => {
      title.innerHTML = "";
      message.innerHTML = "";
      modalcover.style.display = "none";
    };
    modal1.style.cssText = "margin-top: 10px;padding: 15px;border-radius: 9px;border: 3px solid blue;background-color: aliceblue;display: flex;flex-direction: column;";
    title.style.cssText = "font-weight: 600;font-size: 25px;text-align: center;color: green;margin: 9px 0px 10px;";
    message.style.cssText = "text-align: center;font-size: 18px;margin: 25px 0px 30px;";
    modalhr.style.cssText = "height: 1px;background-color: red;width: 100%;";
    modalhr3.style.cssText = "height: 1px;background-color: red;width: 100%;";
    spanmodal.style.cssText = "display: flex;justify-content: space-evenly;margin-top: 15px;";
    spanmton.style.cssText = "font-size: 20px;";
    yes3.style.cssText = "border: 2px solid darkgreen;padding:5px;color: green;background-color: lawngreen;margin-left: auto;margin-right: auto;";
    no3.style.cssText = "border: 2px solid darkred;padding:5px;color: rgb(179, 0, 0);background-color: orangered;margin-left: auto;margin-right: auto;";
    close9.style.cssText = "border: 2px solid darkred;color: rgb(179, 0, 0);background-color: orangered;padding: 0px 7px 0px 7px;font-size: 27px !important;margin-left: auto;";
    modalcover.style.cssText = "position: fixed;top: 0;width: 100vw;height: 100vh;display: none;justify-content: center;align-items: start;background-color: rgba(0, 0, 0, 0.295);";
    change();
    window.addEventListener("resize", change);
};