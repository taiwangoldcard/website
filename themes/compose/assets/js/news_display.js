// JS for displaying latestNews
function initNewsList() {
    var limitContent = 8;
    var selectorName = ".latestNews";
    var filteredNewsList = filterNewsList(selectorName, limitContent);
    var ulId = "lastestNewsList";
    displayNewsList(selectorName, filteredNewsList, ulId, function() {
        const a = createEl("a");
        elemAttribute(a, "href", "news");
        a.innerText = "More News »";
        const li = createEl("li");
        li.append(a);
        document.querySelector(`#${ulId}`).append(li);
    });
}

// Select the first n of news list
function filterNewsList(selectorName, limitContent) {
    if (typeof limitContent !== "number" || limitContent === null)
        return;

    const li = document.querySelectorAll(`${selectorName} li`);
    const filteredNewsList = Array.from(li).slice(0, limitContent);

    return filteredNewsList;
}

// Display news list
function displayNewsList(selectorName, newsList, ulId, objCallBack) {
    const ul = document.querySelector(`${selectorName} > ul`);

    if (!ul) return;

    elemAttribute(ul, "id", ulId); // add id to unordered list
    emptyEl(ul); // clear old ul
    newsList.forEach(function(value) {
        ul.append(value);
    });

    if (typeof objCallBack !== "undefined" && objCallBack !== null)
        objCallBack();
}

initNewsList();
