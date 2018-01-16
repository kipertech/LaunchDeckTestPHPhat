/*
    Created by Pham Hoang Phat
    phphat1996@gmail.com
*/

export function getUserInfo(username)
{
    return new Promise((resolve, reject) => {
        fetch('https://api.github.com/users/' + username, {
            method: 'GET',
            timeout: 10000,
        })
            .then((response) => response.json())
            .then((response) =>  {
                if (response)
                {
                    console.log('[SUCCESS] GET USER DATA', response);
                    resolve(response);
                }
                else
                {
                    console.log('[FAILED] GET USER DATA', response);
                    reject('No response user data');
                }
            })
            .catch((error) => {
                console.log('[FAILED] GET USER DATA', error.message);
                reject(error.message);
            });
    });
}