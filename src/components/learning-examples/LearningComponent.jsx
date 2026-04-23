import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from  './ThirdComponent';

const person = {
    Name : "Kavin",
    Age : 22,
    Address : {
        Street : "4th Cross, Bellandur",
        City : "Bangalore",
        State : "Karnataka"
    },
    Profiles : ["youtube", "twitter", "linkedin"],
    printProfiles : () => {
        person.Profiles.map((x) => console.log(x));
    }
}

function LearningComponent() {
    return (
        <div className="LearningComponent">
            <header className="App-header">
                <h1>Hello Techies!</h1>
                <FirstComponent/>
                <SecondComponent />
                <ThirdComponent />
                <h1>{person.Name}</h1>
                <h1>{person.Age}</h1>
                <h1>{person.Address.Street}</h1>
                <h1>{person.Address.City}</h1>
                <h1>{person.Address.State}</h1>
                <h1>{person.printProfiles()}</h1>
            </header>
        </div>
    );
}

export default LearningComponent;