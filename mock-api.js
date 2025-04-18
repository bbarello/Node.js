// mock-api.js
module.exports = {
    countMatches(term) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (term === 'error') {
                    return reject(new Error('CONNECTION_ERROR'));
                }

                // Fake match count
                const count = Math.floor(Math.random() * 100);
                resolve(count);
            }, 50); // Simulate network latency
        });
    }
};
