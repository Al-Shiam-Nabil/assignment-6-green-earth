const getId = (id) => document.getElementById(id);
const categoryList = getId("category-list");
const cardContainer=getId("card-container");

//  loading spinner
const loadingSpinner = (id, loadStatus) => {
  getId(id).innerHTML = ` <div class="text-center col-span-full my-[50px]  ${
    loadStatus ? "block" : "hidden"
  }">
            <span class="loading loading-bars loading-xl bg-secondary"></span>
          </div>`;
};

// Load All categories from api
const loadAllCategories = () => {
  loadingSpinner("category-list", true);
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayAllCategories(data.categories);
    })
    .catch((err) => {
      console.log("problem is", err);
      categoryList.innerHTML = `<p class="text-gray-400 text-center col-span-full md:text-left">Category list not found.Please try  again later.</p>`;
    });
};

// display all categories
const displayAllCategories = (category) => {
  loadingSpinner("category-list", false);
  category.forEach((cat) => {
    categoryList.innerHTML += `
        
        <li id="${cat.id}" class="hover:bg-secondary border md:border-none border-[#15803D] hover:text-white px-2.5 rounded-md py-2.5 sm:py-1.5 cursor-pointer text-sm sm:text-base">${cat.category_name}</li>

        `;
  });
};

// load all plants using async await for practise
const loadAllPlants=async()=>{
try {
    const res=await fetch('https://openapi.programming-hero.com/api/plants');
const data=await res.json();
displayAllPlants(data.plants);
} catch (error) {
    console.log(error);
    cardContainer.innerHTML = `<p class="text-gray-400 text-center font-semibold text-2xl col-span-full">All plants not found.Please try  again later !</p>`;
}
}

// display all plants
const displayAllPlants=(plants)=>{

    plants.forEach(plant=>{
        cardContainer.innerHTML+=`
        
         <section id="${plant.id}" class="bg-white p-5 sm:p-3 xl:p-4 rounded-lg space-y-3 min-h-[500px] sm:min-h-[450px] ">
                        <img src="${plant.image ? plant.image : '--'}" alt="${plant.name} image"
                            class="h-[300px] sm:h-[250px] object-cover object-center rounded-lg bg-[#EDEDED] w-full" />
                        <h3 class="text-sm font-semibold cursor-pointer hover:underline">
                           ${plant.name ? plant.name : '--'}
                        </h3>
                        <p class="text-xs h-8 overflow-hidden">
                            ${plant.description ? plant.description : '--'}
                        </p>

                        <div class="flex justify-between items-center">
                            <div
                                class="badge badge-soft badge-success bg-[#DCFCE7] text-secondary rounded-3xl text-sm lg:text-xs xl:text-sm font-medium xl:font-medium lg:font-normal py-3.5">
                                ${plant.category ? plant.category : '--'}
                            </div>
                            <p class="text-sm lg:text-xs xl:text-sm font-semibold lg:font-normal xl:font-semibold"><i
                                    class="fa-solid fa-bangladeshi-taka-sign text-sm lg:text-[9px] xl:text-sm"></i><span>${plant.price ? plant.price : '--'}</span></p>
                        </div>

                        <button
                            class="btn outline-none border-none w-full bg-secondary text-base rounded-3xl text-white shadow-none font-medium hover:bg-[#FDEC15] hover:text-secondary">
                            Add to Cart
                        </button>
                    </section>

        `
    })
}


loadAllPlants();
loadAllCategories();
