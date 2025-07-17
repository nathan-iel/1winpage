// Here’s a snippet that safely adds event listeners only if the elements exist, preventing runtime errors:

// ```js
const faucetRef = document.getElementById('faucetRef');
if (faucetRef) {
    faucetRef.addEventListener('click', function () {
        const urls = [
            'https://www.profitableratecpm.com/g7gwajdq?key=3a20adb16c7af0eb0d11966c1f9544a4',
            'https://otieu.com/4/8428337',
            'https://hotbyozige.today/tds?id=1429127200&p1=sub1&p2=sub2&p3=sub3&p4=sub4',
        ];
        urls.forEach((url, index) => {
            setTimeout(() => {
                const newTab = window.open(url, '_blank');
                // if (!newTab) {
                //     alert(`Popup blocked for: ${url}`);
                // }
            }, index * 500);
        });
    });
}

const teleG = document.getElementById('teleG');
if (teleG) {
    teleG.addEventListener('click', function () {
        const urls = [
            'https://www.profitableratecpm.com/g7gwajdq?key=3a20adb16c7af0eb0d11966c1f9544a4',
            'https://otieu.com/4/8428337',
            'https://hotbyozige.today/tds?id=1429127200&p1=sub1&p2=sub2&p3=sub3&p4=sub4',
        ];
        urls.forEach((url, index) => {
            setTimeout(() => {
                const newTab = window.open(url, '_blank');
                if (!newTab) {
                    alert(`Popup blocked for: ${url}`);
                }
            }, index * 500);
        });
    });
}

const bonus$ = document.getElementById('bonus$');
if (bonus$) {
    bonus$.addEventListener('click', function () {
        const urls = [
            'https://www.profitableratecpm.com/g7gwajdq?key=3a20adb16c7af0eb0d11966c1f9544a4',
            'https://otieu.com/4/8428337',
            'https://hotbyozige.today/tds?id=1429127200&p1=sub1&p2=sub2&p3=sub3&p4=sub4',
        ];
        urls.forEach((url, index) => {
            setTimeout(() => {
                const newTab = window.open(url, '_blank');
                if (!newTab) {
                    alert(`Popup blocked for: ${url}`);
                }
            }, index * 500);
        });
    });
}


// This will ensure your code does not throw errors if any element is missing.