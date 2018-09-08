
console.log('group results js loaded');
console.log(groupuser);


getGroupID(groupuser).then(data => {
    getGroupResults(data).then(data => {
        processUsers(data).then(data => {
            console.log(data);
            buildCards(data);
        })
    })
})

function processUsers(data) {
    return new Promise((resolve, reject) => {
        processedUsers = [];
        let itemsProcessed = 0;
        data.forEach((item, index, array) => {
            let userId = item.id;
            let groupUserId = item.group_users[0].id;
            let userName = item.name;
            let groupName = item.group_users[0].group.name;
            let answersArray = item.group_users[0].group_user_answers;
            getUserScore(answersArray).then(data => {
                itemsProcessed++;
                let personality = personalityType(data);
                let results = data;
                let user = {
                    userId: userId,
                    groupUserId: groupUserId,
                    name: userName,
                    group: groupName,
                    personality: personality,
                    data: results
                }
                processedUsers.push(user);
                if(itemsProcessed === array.length) {
                    resolve(processedUsers); 
                }
            });
        })
       
    })
}

function buildCards(userResults) {
    cardData = [
        {
            id: "ENFJ",
            title: "The Giver",
            color: "#77dd77",
            summary: "ENFJs are people-focused individuals. They are extroverted, idealistic, charismatic, outspoken, highly principled and ethical, and usually know how to connect with others no matter their background or personality. Mainly relying on intuition and feelings, they tend to live in their imagination rather than in the real world. Instead of focusing on living in the “now” and what is currently happening, ENFJs tend to concentrate on the abstract and what could possibly happen in the future."
        },
        {
            id: "INFJ",
            title: "The Counselor",
            color: "#77dd77",
            summary: "INFJs are visionaries and idealists who ooze creative imagination and brilliant ideas. They have a different, and usually more profound, way of looking at the world. They have a substance and depth in the way they think, never taking anything at surface level or accepting things the way they are. Others may sometimes perceive them as weird or amusing because of their different outlook on life."
        },
        {
            id: "ENFP",
            title: "The Champion",
            color: "#77dd77",
            summary: "ENFPs have an Extraverted, Intuitive, Feeling and Perceiving personality. This personality type is highly individualistic and Champions strive toward creating their own methods, looks, actions, habits, and ideas — they do not like cookie cutter people and hate when they are forced to live inside a box. They like to be around other people and have a strong intuitive nature when it comes to themselves and others. They operate from their feelings most of the time, and they are highly perceptive and thoughtful."
        },
        {
            id: "INFP",
            title: "The Idealist",
            color: "#77dd77",
            summary: "INFPs, like most introverts, are quiet and reserved. They prefer not to talk about themselves, especially in the first encounter with a new person. They like spending time alone in quiet places where they can make sense of what is happening around them. They love analyzing signs and symbols, and consider them to be metaphors that have deeper meanings related to life. They are lost in their imagination and daydreams, always drowned in the depth of their thoughts, fantasies, and ideas."
        },
        {
            id: "INTJ",
            title: "The Mastermind",
            color: "#aec6cf",
            summary: "INTJs, as introverts, are quiet, reserved, and comfortable being alone. They are usually self-sufficient and would rather work alone than in a group. Socializing drains an introvert’s energy, causing them to need to recharge. INTJs are interested in ideas and theories. When observing the world they are always questioning why things happen the way they do. They excel at developing plans and strategies, and don’t like uncertainty."
        },
        {
            id: "ENTJ",
            title: "The Commander",
            color: "#aec6cf",
            summary: "An ENTJ’s primary mode of living focuses on external aspects and all things are dealt with rationally and logically. Their secondary mode of operation is internal, where intuition and reasoning take effect. ENTJs are natural born leaders among the 16 personality types and like being in charge. They live in a world of possibilities and they often see challenges and obstacles as great opportunities to push themselves. They seem to have a natural gift for leadership, making decisions, and considering options and ideas quickly yet carefully. They are “take charge” people who do not like to sit still."
        },
        {
            id: "INTP",
            title: "The Thinker",
            color: "#aec6cf",
            summary: "INTPs are well known for their brilliant theories and unrelenting logic, which makes sense since they are arguably the most logical minded of all the personality types. They love patterns, have a keen eye for picking up on discrepancies, and a good ability to read people, making it a bad idea to lie to an INTP. People of this personality type aren’t interested in practical, day-to-day activities and maintenance, but when they find an environment where their creative genius and potential can be expressed, there is no limit to the time and energy INTPs will expend in developing an insightful and unbiased solution."
        },
        {
            id: "ENTP",
            title: "The Visionary",
            color: "#aec6cf",
            summary: "Those with the ENTP personality are some of the rarest in the world, which is completely understandable. Although they are extroverts, they don’t enjoy small talk and may not thrive in many social situations, especially those that involve people who are too different from the ENTP. ENTPs are intelligent and knowledgeable need to be constantly mentally stimulated. They have the ability to discuss theories and facts in extensive detail. They are logical, rational, and objective in their approach to information and arguments."
        },
        {
            id: "ESFP",
            title: "The Performer",
            color: "#b19cd9",
            summary: "ESFPs have an Extraverted, Observant, Feeling and Perceiving personality, and are commonly seen as Entertainers. Born to be in front of others and to capture the stage, ESFPs love the spotlight. ESFPs are thoughtful explorers who love learning and sharing what they learn with others. ESFPs are “people people” with strong interpersonal skills. They are lively and fun, and enjoy being the center of attention. They are warm, generous, and friendly, sympathetic and concerned for other people’s well-being."
        },
        {
            id: "ISFP",
            title: "The Composer",
            color: "#b19cd9",
            summary: "ISFPs are introverts that do not seem like introverts. It is because even if they have difficulties connecting to other people at first, they become warm, approachable, and friendly eventually. They are fun to be with and very spontaneous, which makes them the perfect friend to tag along in whatever activity, regardless if planned or unplanned. ISFPs want to live their life to the fullest and embrace the present, so they make sure they are always out to explore new things and discover new experiences. It is in experience that they find wisdom, so they do see more value in meeting new people than other introverts."
        },
        {
            id: "ESFJ",
            title: "The Provider",
            color: "#b19cd9",
            summary: "ESFJs are the stereotypical extroverts. They are social butterflies, and their need to interact with others and make people happy usually ends up making them popular. The ESFJ usually tends to be the cheerleader or sports hero in high school and college. Later on in life, they continue to revel in the spotlight, and are primarily focused on organizing social events for their families, friends and communities. ESFJ is a common personality type and one that is liked by many people."
        },
        {
            id: "ISFJ",
            title: "The Nurturer",
            color: "#b19cd9",
            summary: "ISFJs are philanthropists and they are always ready to give back and return generosity with even more generosity. The people and things they believe in will be upheld and supported with enthusiasm and unselfishness. ISFJs are warm and kind-hearted. They value harmony and cooperation, and are likely to be very sensitive to other people’s feelings. People value the ISFJ for their consideration and awareness, and their ability to bring out the best in others."
        },
        {
            id: "ISTP",
            title: "The Craftsman",
            color: "#ffb347",
            summary: "ISTPs are mysterious people who are usually very rational and logical, but also quite spontaneous and enthusiastic. Their personality traits are less easily recognizable than those of other types, and even people who know them well can’t always anticipate their reactions. Deep down, ISTPs are spontaneous, unpredictable individuals, but they hide those traits from the outside world, often very successfully."
        },
        {
            id: "ESTP",
            title: "The Doer",
            color: "#ffb347",
            summary: "ESTPs have an Extraverted, Sensing, Thinking, and Perceptive personality. ESTPs are governed by the need for social interaction, feelings and emotions, logical processes and reasoning, along with a need for freedom. Theory and abstracts don’t keep ESTP’s interested for long. ESTPs leap before they look, fixing their mistakes as they go, rather than sitting idle or preparing contingency plans."
        },
        {
            id: "ISTJ",
            title: "The Inspector",
            color: "#ffb347",
            summary: "At first glance, ISTJs are intimidating. They appear serious, formal, and proper. They also love traditions and old-school values that uphold patience, hard work, honor, and social and cultural responsibility. They are reserved, calm, quiet, and upright. These traits result from the combination of I, S, T, and J, a personality type that is often misunderstood."
        },
        {
            id: "ESTJ",
            title: "The Supervisor",
            color: "#ffb347",
            summary: "ESTJs are organized, honest, dedicated, dignified, traditional, and are great believers of doing what they believe is right and socially acceptable. Though the paths towards “good” and “right” are difficult, they are glad to take their place as the leaders of the pack. They are the epitome of good citizenry. People look to ESTJs for guidance and counsel, and ESTJs are always happy that they are approached for help."
        }
    ];

    

    for (let i = 0; i < cardData.length; i++) {
        let currentQuad;
        if (i < 4) {
            currentQuad = "#quadrant-one";
        } else if (i < 8) {
            currentQuad = "#quadrant-two";
        } else if (i < 12) {
            currentQuad = "#quadrant-three";
        } else {
            currentQuad = "#quadrant-four";
        }

        let divWrap = $('<div>');
        divWrap.addClass('col-xl-6 no-padding');


        let card = $('<div>');
        card.addClass('card');
        card.css({"background-color": cardData[i].color, "height": "200px"});

        let cardBody = $('<div>');
        cardBody.addClass('card-body');

        let cardTitle = $('<h4>');
        cardTitle.addClass('card-title');
        cardTitle.text(cardData[i].id);

        let cardSubTitle = $('<h5>');
        cardSubTitle.addClass('card-subtitle text-muted');
        cardSubTitle.text(cardData[i].title);

        let cardText = $('<p>');
        cardText.addClass('card-text');
        for (let j = 0; j < userResults.length; j++) {
            if (cardData[i].id === userResults[j].personality) {
                cardText.append(userResults[j].name);
                cardText.append("<br>");
                console.log(userResults[j].groupUserId);
                console.log(groupuser);
                if (userResults[j].groupUserId === parseInt(groupuser)) {
                    $('#ind-title').text(cardData[i].id);
                    $('#ind-summary').text(cardData[i].summary);
                }
            }
            
        }
        
        cardBody.append([cardTitle, cardSubTitle, cardText]);
        card.append(cardBody);
        divWrap.append(card);
        $(currentQuad).append(divWrap);
    }
}

function getGroupID(group_user) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/api/groupuser/" + group_user,
            type: "GET"
        }).then(data => {
            resolve(data.groupId);
        });        
    })
}

function getGroupResults(group_id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/api/group/" + group_id + "/answers",
            type: "GET"
        }).then(data => {
            resolve(data);
        });        
    })
}

function getUserScore(answerArray) {
    return new Promise((resolve, reject) => {
        let data = JSON.stringify(answerArray);
        $.ajax({
            url: "/api/calcScore",
            type: "POST",
            data: { answers: data }
        }).then(data => {
            resolve(data);
        });
    })
}

function personalityType(data) {
    let personalitytype = '';
    data['IE'] += 30;
    data['SN'] += 12;
    data['FT'] += 30;
    data['JP'] += 18; 
    if (data['IE'] > 24) {
        personalitytype += 'E';
    } else {
        personalitytype += 'I';
    }

    if (data['SN'] > 24) {
        personalitytype += 'N';
    } else {
        personalitytype += 'S';
    }

    if (data['FT'] > 24) {
        personalitytype += 'T';
    } else {
        personalitytype += 'F';
    }

    if (data['JP'] > 24) {
        personalitytype += 'P';
    } else {
        personalitytype += 'J';
    }

    return personalitytype;
}
