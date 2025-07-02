const loadData = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await response.json();
    const posts = data.posts;
    singlePost(posts);
};

const singlePost = (posts) => {
    const divContainer = document.getElementById("div-container");
    for (const post of posts) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="bg-[#F3F3F5] hover:bg-[#797DFC1A] rounded-3xl hover:border hover:border-[#797DFC] p-10 flex flex-col md:flex-row gap-6 mb-6">
            <div class="relative p-6 bg-[#f4f4ff]">
                <img src="${post.image}" alt="Example" class="rounded-2xl md:h-24 md:w-24" />
                <div class="activeStatus absolute top-5 right-5 w-4 h-4 rounded-full"></div>
            </div>
            <div>
                <div class="flex gap-5 justify-start items-center mb-3">
                    <h3 class="text-sm font-medium text-[#12132DCC]"># ${post.category}</h3>
                    <h3 class="text-sm font-medium text-[#12132DCC]">Author: ${post.author.name}</h3>
                </div>
                <div class="mb-5">
                    <h3 class="text-[#12132D] text-xl font-bold mb-4">${post.title}</h3>
                    <p class="text-[#12132D99] text-base font-normal">${post.description}</p>
                </div>
                <hr class="text-[#12132D40] border-dashed mb-6">
                <div class="flex justify-between items-center">
                    <div class="flex flex-col md:flex-row gap-6">
                        <div class="flex gap-3">
                            <img src="images/tabler-icon-message-2.png" alt="">
                            <p class="text-base font-normal text-[#12132D99]">${post.comment_count}</p>
                        </div>
                        <div class="flex gap-3">
                            <img src="images/tabler-icon-eye.png" alt="">
                            <p class="text-base font-normal text-[#12132D99]">${post.view_count}</p>
                        </div>
                        <div class="flex gap-3">
                            <img src="images/tabler-icon-clock-hour-9.png" alt="">
                            <p class="text-base font-normal text-[#12132D99]">${post.posted_time} min</p>
                        </div>
                    </div>
                    <div>
                        <button class="btn btn-circle btn-ghost"><img src="images/email 1.png" alt=""></button>
                    </div>
                </div>
            </div>
        </div>
        `;
        const button = div.querySelector("button");
        button.addEventListener("click", () => markAsRead(post));
        const statusIndicator = div.querySelector(".activeStatus");
        isActive(post.isActive, statusIndicator);
        divContainer.appendChild(div);
    }
};

const isActive = (active, element) => {
    if (active === true) {
        element.classList.add("bg-[#10B981]");
    } else {
        element.classList.add("bg-[#FF3434]");
    }
};



const markAsRead = (post) =>{
    const markContainer = document.getElementById("mark-container");
    const divs = document.createElement("div");
    divs.classList.add("flex" ,"justify-between" ,"rounded-2xl" ,"items-center" ,"bg-[#FFF]" ,"px-8" ,"py-4" ,"mb-4" ,"gap-6");
    divs.innerHTML = `
    <h3 class="text-[#12132D] font-semibold text-base">${post.title}</h3>
                            <div class="flex gap-2">
                                <img src="images/tabler-icon-eye.png" alt="">
                                <p class="text-[#12132D99] text-base font-normal">${post.view_count}</p>
                            </div>
    `
    markContainer.appendChild(divs);
    const markCount = document.getElementById("mark-count").innerText;
    let markCountPerse = parseInt(markCount);
    markCountPerse++;
    document.getElementById("mark-count").innerText = markCountPerse ;
}


loadData();
