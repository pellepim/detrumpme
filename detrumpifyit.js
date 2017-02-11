(function () {
    var words = ['President Donald J. Trump', 'President Donald Trump', 'President Trump', 'Donald John Trump',
                 'Donald J. Trump', 'Donald Trump', 'Mr. Trump', 'Trump'];
    var replace_with = ['The Kwisatz Haderach', 'The God Emperor', 'The Mongoloid',
                        'The Peerless Abortion of Good Taste', 'Der Furher',
                        'The Knight of the Abyss', 'Myrna Minkoff\'s Horny Uncle'];

    var replacepatterns = [];

    for (var i = 0; i < words.length; i++) {
        replacepatterns.push(new RegExp(words[i], 'ig'))
    }

    function replaceText(node) {
        var current = node.nodeValue;

        for (var i = 0; i < replacepatterns.length; i++) {
            var replacer = replace_with[Math.floor(Math.random() * replace_with.length)];
            current = current.replace(replacepatterns[i], replacer);
        }

        node.nodeValue = current;
    }

    function traverse(node) {
        var children = node.childNodes;
        var childLen = children.length;
        for (var i = 0; i < childLen; i++) {
            var child = children.item(i);
            if (child.nodeType == 3)//or if(child instanceof Text)
                replaceText(child);
            else
                traverse(child);
        }
    }

    traverse(document.body);

}());