//contain 2 routes
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var friendData = require('../data/friends');

module.exports = function (app) {
    app.get('/api/friends', (req, res) => {
        res.json(friendData);
    });
    app.post('/api/friends', (req, res) => {
        var bestFriend = {};
        var user = req.body;
        var userAnswers = req.body.Answers;

        var lowestFriendScore = 10000;

        friendData.forEach((friend) => {
            var friendScore = getFriendScore(userAnswers, friendAnswers);
           if (friendScore < lowestFriendScore) {
            lowestFriendScore = friendScore;
            bestFriend = friend;
            bestFriend.friendScore = friendScore;
           }
        });
        
        friendData.push(user);
        res.json(bestFriend);
        
    });
};

function getFriendScore(userAnswers, friendAnswers) {
    var score = 0;  
    for (var i = 0; i < userAnswers.length; i++) {
        score += Math.abs(parseint(userAnswers[i]) - parseInt(friendAnswers[i]));
    }
    return score;
}