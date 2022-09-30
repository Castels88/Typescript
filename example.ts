// quando creaimo un array puo essere modificato di defaul
// aggiungere,levare elementi cambiare il valore
// vediamo come usare typescrit per modificare un array
const country = ["italia","cina","francia"];
// aggiungiamo un elemento con push 
country.push("grecia");
// ma esiste un metodo per evitare che il nostro array venga modificato ed e il READ-ONly 
// prima cosa si specifica il typo di valori che ci sono nell'array  
// davanti al nome costante country:Array<string> e poi si mette READ-ONLY davanti ad Array
const country2:ReadonlyArray<string>=["italia","cina","francia"]