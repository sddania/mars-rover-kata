# Mars Rover Kata

Un'implementazione ispirata al [Mars rover kata](https://kata-log.rocks/mars-rover-kata) scritta in typescript.

## Richieste

Implementare un'applicazione la quale simuli lo spostamento di un veicolo su un pianeta seguendo le regole del Mars Rover Kata (riportate sotto per completezza).
L’applicazione dovrà:
- leggere un file di testo contenente:
  - la mappa del mondo sul quale il rover dovrà muoversi;
  - le stringhe di comandi da inviare al rover;
- stampare a video o su file, la posizione del rover dopo l’esecuzione di ogni stringa di
comandi. 
Nella sezione sotto puoi vedere un esempio di file di input e di uno di output.

## Regole
Le regole da implementare sono le seguenti:
- il rover si muove su una griglia;
- il rover parte dalla posizione 0,0,N dove:
  - 0, 0 sono delle coordinate X, Y sulla griglia;
  - N è la direzione verso cui è rivolto il rover. Le direzioni possibili sono quattro:
N (North), E (East) S (South) e W (West);
- al rover può essere passata una stringa di comandi, dove ogni comando è
rappresentato da un carattere:
  - L - left, per far ruotare di 90 gradi il rover verso sinistra;
  - R - right, per far ruotare di 90 gradi il rover verso destra;
  - F - forward, per far muovere il rover di una casella nella direzione verso cui è
rivolto;
  - B - backward, per far muovere il rover di una casella nella direzione opposta
a quella verso cui è rivolto;
- quando il rover raggiunge il bordo della griglia e continua a muoversi riparte dal lato
opposto della griglia (il noto effetto pac-man);
- la griglia può contenere degli ostacoli. Quando il rover incontra un ostacola non può
muoversi in quella direzione; 
- Una volta eseguita una stringa di comandi il rover deve rispondere al centro di
controllo con una stringa che ne rappresenta la posizione sulla griglia. La stringa
deve avere il seguente formato: `[O:]<X>:<Y>:<Direzione>`

Dove `<X>` e `<Y>` sono i valori delle coordinate sulla griglia mentre `<Direzione>` è la
lettera che rappresenta la direzione verso cui è diretto il rover.

La `O:` iniziale viene stampata solo nel caso in cui l’ultimo comando abbia fatto sbattere il rover contro un
ostacolo. Ad esempio: `1:1:N` oppure `O:2:5:S`.

## Installazione

Lanciare il comando:

`npm install -g .`

E lanciare il comando `mars-rover-kata`
