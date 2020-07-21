// JS for displaying latestNews
$(document).ready(function() {
    var limitContent = 8;
    var selectorName = ".latestNews";
    var filteredNewsList = filterNewsList(selectorName, limitContent);
    var ulId = "lastestNewsList";
    displayNewsList(selectorName, filteredNewsList, ulId, function() {
        $("#" + ulId).append('<li><a href="news" target="_blank" rel="noopener">Read More</a></li>');
    });
})

// Select the first n of news list
function filterNewsList(selectorName, limitContent) {
    if (typeof limitContent !== "number" || limitContent === null)
        return;

    let filteredNewsList = [];
    $(selectorName).html(function() {
        let li = $(this).find("li");
        $(li).each(function(index, value){
            if (index < limitContent) filteredNewsList.push(value);
        })
    });

    return filteredNewsList;
}

// Display news list
function displayNewsList(selectorName, newsList, ulId, objCallBack) {
    $(selectorName + " > ul").attr("id", ulId); // add id to unordered list
    $("#" + ulId).empty(); // clear old ul
    $.each(newsList, function(key, value) {
        $("#" + ulId).append(value);
    });

    if (typeof objCallBack !== "undefined" && objCallBack !== null)
        objCallBack();
}
