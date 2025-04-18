// search.js
const EventEmitter = require('events');
const API = require('./mock-api'); // Ensure this mock supports async

class Search extends EventEmitter {
    searchCount(term) {
        // Term validation happens before emitting SEARCH_STARTED
        if (typeof term !== 'string' || term.trim() === '') {
            this.emit('SEARCH_ERROR', {
                term,
                message: 'INVALID_TERM'
            });
            return;
        }

        this.emit('SEARCH_STARTED', term);

        API.countMatches(term)
            .then((count) => {
                this.emit('SEARCH_SUCCESS', {
                    term,
                    count
                });
            })
            .catch((error) => {
                this.emit('SEARCH_ERROR', {
                    term,
                    message: error.message || 'CONNECTION_ERROR'
                });
            });
    }
}

module.exports = Search;
