import React from 'react';

fetch('https://swapi.py4e.com/api/people/1/', {
    method: 'GET',
    headers: { 'Content-Type' : 'application/json' },
    /* body: JSON.stringify(data) */
})
.then(res => {
    return res.json()
})

.then(data => console.log(data))
;

export default function Users() {
return (
    <div class="user-card">
    <h1>Dominika Wojewska</h1>
  
        <button class="form-btn">formularz rejestracyjny</button>

    <div class="frame">
        <img alt="randomowy obrazek z neta"/>
        <div class="inline">
            <h2 id="name-p-1">Name</h2>
            <img alt="ikonka postaci"/>
            <img alt="ikonka że ok na zielonym tle"/>
        </div>
        <p>age:</p>
        <p>eye color:</p>

    </div>

    <button class="next-profiles-btn">next profiles</button>
    </div>
)
}