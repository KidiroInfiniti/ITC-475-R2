function clear()
{
    document.getElementById("actList").innerHTML = "";
}

function getOptions()
{
    var destSelected = document.getElementById("destination-selector");

    var ds = destSelected.options[destSelected.selectedIndex].text;

    if (ds == "Maldives")
    {
        clear();

        var Container = document.getElementById("actList");

        var Museum = document.createElement('input');
            Museum.type = 'checkbox';
        var Sail = document.createElement('input');
            Sail.type = 'checkbox';
        var Beach = document.createElement('input');
            Beach.type = 'checkbox';
        var Hike = document.createElement('input');
            Hike.type = 'checkbox';
        var Boat = document.createElement('input');
            Boat.type = 'checkbox';

        Container.appendChild(Museum);
        Container.appendChild(document.createTextNode("Museums     "));

        Container.appendChild(Sail);
        Container.appendChild(document.createTextNode("Sailing     "));

        Container.appendChild(Beach);
        Container.appendChild(document.createTextNode("Beaches     "));

        Container.appendChild(Hike);
        Container.appendChild(document.createTextNode("Hiking     "));

        Container.appendChild(Boat);
        Container.appendChild(document.createTextNode("Boating "));
    }

    else if (ds == "Cancun, Mexico")
    {
        clear();
        
        var Container = document.getElementById("actList");

        var Parks = document.createElement('input');
            Parks.type = 'checkbox';
        var Beach = document.createElement('input');
            Beach.type = 'checkbox';
        var Boat = document.createElement('input');
            Boat.type = 'checkbox';
        var Snorkel = document.createElement('input');
            Snorkel.type = 'checkbox';

        Container.appendChild(Parks);
        Container.appendChild(document.createTextNode("Parks & Recreation "));
    
        Container.appendChild(Beach);
        Container.appendChild(document.createTextNode("Beaches "));
    
        Container.appendChild(Boat);
        Container.appendChild(document.createTextNode("Boating "));
    
        Container.appendChild(Snorkel);
        Container.appendChild(document.createTextNode("Snorkeling "));
    }

    else if (ds == "New Zealand")
    {
        clear();

        var Container = document.getElementById("actList");

        var Tours = document.createElement('input');
            Tours.type = 'checkbox';
        var Sports = document.createElement('input');
            Sports.type = 'checkbox';
        var Cycle = document.createElement('input');
            Cycle.type = 'checkbox';
        var Museum = document.createElement('input');
            Museum.type = 'checkbox';
        var Boat = document.createElement('input');
            Boat.type = 'checkbox';

        Container.appendChild(Tours);
        Container.appendChild(document.createTextNode("City Tours "));

        Container.appendChild(Sports);
        cbContainer.appendChild(document.createTextNode("Sports "));

        Container.appendChild(Cycle);
        Container.appendChild(document.createTextNode("Cycling "));

        Container.appendChild(Museum);
        Container.appendChild(document.createTextNode("Museums "));

        Container.appendChild(Boat);
        Container.appendChild(document.createTextNode("Boating "));
    }

    else if (ds == "Venice, Italy")
    {
        clear();
        
        var Container = document.getElementById("actList");

        var Museum = document.createElement('input');
            Museum.type = 'checkbox';
        var Theatre = document.createElement('input');
            Theatre.type = 'checkbox';
        var Parks = document.createElement('input');
            Parks.type = 'checkbox';
        var Tours = document.createElement('input');
            Tours.type = 'checkbox';

        Container.appendChild(Museum);
        Container.appendChild(document.createTextNode("Museums "));
    
        Container.appendChild(Theatre);
        Container.appendChild(document.createTextNode("Theatre "));
    
        Container.appendChild(Parks);
        Container.appendChild(document.createTextNode("Parks & Recreation "));
    
        Container.appendChild(Tours);
        Container.appendChild(document.createTextNode("City Tours "));
    }

    else
    {
        clear();

        document.getElementById("actList").innerText = "You must select a destination first.";
    }
}