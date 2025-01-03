/* file: script.js */
let price = 3.26;
let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
];
const notes = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

const cashInput = document.getElementById("cash");
const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");

const makePurchase = () => {
    let cash = Number(cashInput.value);

    if (!cash) {
        changeDue.textContent = "";
        return;
    }

    switch (true) {
        case cash < price:
            alert("Customer does not have enough money to purchase the item");
            break;
        case cash === price:
            changeDue.textContent = "No change due - customer paid with exact cash";
            break;
        default:
            let change = cash * 100 - price * 100;
            let depletedNumberOfNotes = 0;
            let changeDueTextContent = "";

            for (let i = notes.length - 1; i >= 0; i--) {
                if (cid[i][1] === 0) depletedNumberOfNotes++;

                const note = notes[i] * 100;
                const numberOfNotesToReturn = Math.trunc(change / note);
                if (!numberOfNotesToReturn) continue;

                const cashAmountOfNotesInCashDrawer = cid[i][1] * 100;
                if (!cashAmountOfNotesInCashDrawer) continue;

                const cashToReturnFromNote = Math.min(
                    numberOfNotesToReturn * note,
                    cashAmountOfNotesInCashDrawer
                );

                if (cashToReturnFromNote > 0) {
                    const cashToSubtract = cashToReturnFromNote / 100;
                    cid[i][1] -= cashToSubtract;
                    if (cid[i][1] === 0) depletedNumberOfNotes++;
                    changeDueTextContent += `${cid[i][0]}: $${cashToSubtract} `;
                    change -= cashToReturnFromNote; // change % note;
                }
            }

            if (change) {
                changeDueTextContent = "Status: INSUFFICIENT_FUNDS";
            } else if (depletedNumberOfNotes === cid.length) {
                changeDueTextContent = "Status: CLOSED " + changeDueTextContent;
                // Status: CLOSED QUARTER: $0 DIME: $0 NICKEL: $0 PENNY: $0.5
            } else {
                changeDueTextContent = "Status: OPEN " + changeDueTextContent;
            }

            changeDue.textContent = changeDueTextContent;
    }
};

purchaseBtn.addEventListener("click", makePurchase);
