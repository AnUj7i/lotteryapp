document.getElementById('submitLottery').addEventListener('click', async () => {
    const lotteryNumber = document.getElementById('lotteryNumber').value;

    if (!lotteryNumber) {
        alert('Please enter a lottery number');
        return;
    }

    try {
        const response = await fetch('/check-lottery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lotteryNumber }),
        });

        const data = await response.json();
        const resultMessage = document.getElementById('resultMessage');

        if (data.winner) {
            resultMessage.innerHTML = `<span style="color: green;">${data.message}</span>`;
        } else {
            resultMessage.innerHTML = `<span style="color: red;">${data.message}</span>`;
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
