function createAccount(pin, amount) {
    let balance = amount;
    let currentPin = pin;

    return {
        checkBalance: function(enteredPin) {
            if (enteredPin === currentPin) {
                return `Current balance: $${balance}.`;
            } else {
                return "Invalid PIN.";
            }
        },
        deposit: function(enteredPin, amount) {
            if (enteredPin === currentPin) {
                balance += amount;
                return `Successfully deposited $${amount}. Current balance: $${balance}.`;
            } else {
                return "Invalid PIN.";
            }
        },
        withdraw: function(enteredPin, amount) {
            if (enteredPin === currentPin) {
                if (amount <= balance) {
                    balance -= amount;
                    return `Successfully withdrew $${amount}. Current balance: $${balance}.`;
                } else {
                    return "Withdrawal amount exceeds account balance. Transaction cancelled.";
                }
            } else {
                return "Invalid PIN.";
            }
        },
        changePin: function(oldPin, newPin) {
            if (oldPin === currentPin) {
                currentPin = newPin;
                return "PIN successfully changed!";
            } else {
                return "Invalid PIN.";
            }
        }
    };
}

module.exports = { createAccount };
