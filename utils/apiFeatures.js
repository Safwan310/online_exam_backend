class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    sort() {
        if (this.queryString.sort) {
            //query=query.sort(req.query.sort) or query.sort(price); refer postman vids 
            const sortBy = this.queryString.sort.split(',').join(" ");
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt'); //createdAt is in tourModel
        }
        return this;
    }
}

module.exports = APIFeatures;