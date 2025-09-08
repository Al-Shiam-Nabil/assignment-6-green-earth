const getId = id => document.getElementById(id);
const categoryList = getId('category-list');

//  loading spinner
const loadingSpinner = (id, loadStatus) => {
    getId(id).innerHTML = ` <div class="text-center my-[50px]  ${loadStatus ? 'block' : 'hidden'}">
            <span class="loading loading-bars loading-xl bg-secondary"></span>
          </div>`
}



// Load All categories from api
const loadAllCategories = () => {
    loadingSpinner('category-list', true)
    fetch('https://openapi.programming-hero.com/api/categories').then(res => res.json()).then(data => {
        displayAllCategories(data.categories);
    }).catch(err => {
        console.log('problem is', err)
        categoryList.innerHTML = `<p class="text-gray-400">Something Went Wrong.Please try  again later.</p>`
    })
}

// display all categories
const displayAllCategories = (category) => {
    loadingSpinner('category-list', false)
    category.forEach(cat => {
        categoryList.innerHTML += `
        
        <li id="${cat.id}" class="hover:bg-secondary hover:text-white px-2.5 rounded-md py-1.5 cursor-pointer">${cat.category_name}</li>

        `
    })

}

loadAllCategories();