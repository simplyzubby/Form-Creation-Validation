async function  fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
   const dataContainer = document.getElementById("api-data");
   try {
    const response = await fetch(apiUrl);
    const users = await response.json();
     dataContainer.innerHTML = '';

     users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name; // Add user's name to list item
            userList.appendChild(li);   // Add <li> to <ul>
        });

        // Append the full <ul> to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData);

