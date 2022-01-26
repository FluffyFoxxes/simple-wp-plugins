(function () {
    let qrСode = document.querySelector("#qrСode");
    let qrOne = document.querySelector("#qrOne");
    let qrTwo = document.querySelector("#qrTwo");
    let qrTime = document.querySelector("#qrTime");

    if (qrСode && qrOne && qrTwo && qrTime) {
        /* ПЕРЕМЕННЫЕ */
        /* размер */
        let size = qrСode.dataset.size; // 320
        /* время тика в мс  */
        let timer = qrСode.dataset.timer; // 2000
        /* время анимации в мс*/
        let animSpeed = qrСode.dataset.animSpeed; // 1400
        /*
         *
         *
         *
         */
        //создание обьекта от класса QRCode
        let qrcodeOne = new QRCode("qrOne", {
            width: size,
            height: size,
            colorDark: "#000",
            colorLight: "#fff"
        });

        let qrcodeTwo = new QRCode("qrTwo", {
            width: size,
            height: size,
            colorDark: "#000",
            colorLight: "#fff"
        });

        let qrcodeTime = {
            size: (size / 25) * 9,
            margin: (size / 25) * 8,
            backgroundColor: "#fff"
        };

        //создаем переменную для переключения
        let tic = true;
        //элементы

        //задаем стиль обшего блока
        qrСode.style.width = `${size}px`;
        //задаем стили qr блоков
        qrOne.style.transition = `all ${animSpeed}ms`;
        qrTwo.style.transition = `all ${animSpeed}ms`;
        //задаем стили блока времени
        qrTime.style.width = `${qrcodeTime.size}px`;
        qrTime.style.height = `${qrcodeTime.size}px`;
        qrTime.style.backgroundColor = qrcodeTime.backgroundColor;
        qrTime.style.margin = `${qrcodeTime.margin}px`;

        //создаем переменную времени
        let Dat = new Date();
        //функция правильного отображения времени
        function normT(time) {
            if (time < 10) {
                return `0${time}`;
            }
            return time;
        }
        //функция возврата времени
        function time() {
            //обновление времени
            Dat = new Date();
            //выводим время
            qrTime.innerHTML = `${normT(Dat.getHours())}:${normT(
                Dat.getMinutes()
            )}:${normT(Dat.getSeconds())}`;
            //генерируем qr код
            return `${normT(Dat.getHours())}:${normT(Dat.getMinutes())}:${normT(
                Dat.getSeconds()
            )}`;
        }

        //создание qr-кода
        function makeCode() {
            //обновление времени
            data = new Date();

            if (tic) {
                //генератор кода
                qrcodeOne.makeCode(time());

                qrTwo.style.opacity = 0;
                qrOne.style.opacity = 1;
            } else {
                //генератор кода
                qrcodeTwo.makeCode(time());
                qrTwo.style.opacity = 1;
                qrOne.style.opacity = 0;
            }
            tic = !tic;
        }

        //вызов создания
        makeCode();
        //повторение
        setInterval(() => {
            makeCode();
        }, timer);

    }

})()