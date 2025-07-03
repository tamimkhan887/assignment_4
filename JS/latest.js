const loadLatestPost = async() =>{
    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await response.json();
    const latestPosts = data ;
    singleLatestPost(latestPosts);
}

const singleLatestPost= (latestPosts)=>{
    const latestPostContainer = document.getElementById("latestPostContainer");
    for(const latestPost of latestPosts){
        const latestPostDiv = document.createElement("div");
        latestPostDiv.classList.add("card", "bg-[#FFFFFF]" ,"rounded-3xl" ,"w-full", "border" ,"border-[#12132D26]");
        latestPostDiv.innerHTML = `
        <figure class="px-6 pt-6">
                        <img src="${latestPost.cover_image}"
                            alt="" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <div class="flex gap-2">
                            <img src="images/timedate.svg" class="text-[#12132D99]" alt="">
                            <p class="text-[#12132D99] text-base font-normal">${latestPost.author?.posted_date || "No Publish Date"}</p>
                        </div>
                        <h2 class="text-[#12132D] text-lg font-extrabold">${latestPost.title}</h2>
                        <p class="text-[#12132D99] font-normal text-base mb-4">${latestPost.description}
                        </p>
                        <div class="flex gap-4 justify-start items-center">
                            <div>
                                <img src="${latestPost.profile_image}" class="w-12 h-12 rounded-full" alt="">
                            </div>
                            <div>
                                <h3 class="text-[#12132D] font-bold text-base">${latestPost.author.name}</h3>
                                <p class="text-[#12132D99] font-normal text-sm">${latestPost.author?.designation || "Unknown"}</p>
                            </div>
                        </div>
                    </div>
        `
        latestPostContainer.appendChild(latestPostDiv);
    }
}
loadLatestPost();