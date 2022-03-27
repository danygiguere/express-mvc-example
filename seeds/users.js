var faker = require('faker');

exports.seed = function(knex) {
    var knexArray = [];
    //push custom users to array
    knexArray.push(
        {id: 1, username: 'dany', email: 'danygiguere23@gmail.com', role_id: '1'}
        );

    //push random users to array
    for(i = 2; i < 12; i++) {
        const name = faker.fake("{{name.firstName}}"),
            email = name + '@test.com';
        knexArray.push({id: i, username: name, email: email, role_id: '1'})
    }

    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert(knexArray);
        });
};

