import styles from "./PrivacyPolicy.module.css";
import { Link } from "react-router-dom";
import { TabStyle } from "../../components/TabStyle/TabStyle";
export function PrivacyPolicy() {
  return (
    <TabStyle>
      <div className={styles.privacy_container}>
        <h1>
          Polityka prywatności opisuje zasady przetwarzania przez nas informacji
          na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw.
          cookies.
        </h1>
        <p className={styles.privacy_nav}>1.Informacje ogólne</p>
        <p>
          Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem
          url: projectpartner.pl Operatorem serwisu oraz Administratorem danych
          osobowych jest: Project Partner Sp. z o.o. Armii Krajowej 4, 49-300
          Brzeg Adres kontaktowy poczty elektronicznej operatora:
          projectpartner@gmail.com Operator jest Administratorem Twoich danych
          osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.
          Serwis wykorzystuje dane osobowe w następujących celach: Obsługa
          zapytań przez formularz Prezentacja oferty lub informacji Serwis
          realizuje funkcje pozyskiwania informacji o użytkownikach i ich
          zachowaniu w następujący sposób: Poprzez dobrowolnie wprowadzone w
          formularzach dane, które zostają wprowadzone do systemów Operatora.
          Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw.
          „ciasteczka”).
        </p>
        <p className={styles.privacy_nav}>
          2.Wybrane metody ochrony danych stosowane przez Operatora
        </p>
        <p>
          Miejsca logowania i wprowadzania danych osobowych są chronione w
          warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane
          logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze
          użytkownika i mogą być odczytane jedynie na docelowym serwerze.
        </p>
        <p className={styles.privacy_nav}> 3. Hosting </p>
        <p>
          Serwis jest hostowany (technicznie utrzymywany) na serwerach
          operatora: home.pl
        </p>
        <p className={styles.privacy_nav}>
          4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych
        </p>
        <p>
          W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane
          osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania
          zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na
          Administratorze. Dotyczy to takich grup odbiorców: osoby upoważnione
          przez nas, pracownicy i współpracownicy, którzy muszą mieć dostęp do
          danych osobowych w celu wykonywania swoich obowiązków, firma
          hostingowa, firmy obsługująca mailingi, firmy obsługująca komunikaty
          SMS, firmy, z którymi Administrator współpracuje w zakresie marketingu
          własnego, kurierzy, ubezpieczyciele, kancelarie prawne i windykatorzy,
          banki, operatorzy płatności, organy publiczne. Twoje dane osobowe
          przetwarzane przez Administratora nie dłużej, niż jest to konieczne do
          wykonania związanych z nimi czynności określonych osobnymi przepisami
          (np. o prowadzeniu rachunkowości). W odniesieniu do danych
          marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.
          Przysługuje Ci prawo żądania od Administratora: dostępu do danych
          osobowych Ciebie dotyczących, ich sprostowania, usunięcia,
          ograniczenia przetwarzania, oraz przenoszenia danych. Przysługuje Ci
          prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt
          3.3 c wobec przetwarzania danych osobowych w celu wykonania prawnie
          uzasadnionych interesów realizowanych przez Administratora, w tym
          profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane
          w przypadku istnienia ważnych prawnie uzasadnionych podstaw do
          przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w
          szczególności ustalenia, dochodzenia lub obrony roszczeń. Na działania
          Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych
          Osobowych, ul. Stawki 2, 00-193 Warszawa. Podanie danych osobowych
          jest dobrowolne, lecz niezbędne do obsługi Serwisu. W stosunku do
          Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym
          podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w
          ramach zawartej umowy oraz w celu prowadzenia przez Administratora
          marketingu bezpośredniego. Dane osobowe nie są przekazywane od krajów
          trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza
          to, że nie przesyłamy ich poza teren Unii Europejskiej.
        </p>
        <p className={styles.privacy_nav}> 5. Informacje w formularzach</p>
        <p>
          Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym
          dane osobowe, o ile zostaną one podane. Serwis może zapisać informacje
          o parametrach połączenia (oznaczenie czasu, adres IP). Serwis, w
          niektórych wypadkach, może zapisać informację ułatwiającą powiązanie
          danych w formularzu z adresem e-mail użytkownika wypełniającego
          formularz. W takim wypadku adres e-mail użytkownika pojawia się
          wewnątrz adresu url strony zawierającej formularz. Dane podane w
          formularzu są przetwarzane w celu wynikającym z funkcji konkretnego
          formularza, np. w celu dokonania procesu obsługi zgłoszenia
          serwisowego lub kontaktu handlowego, rejestracji usług itp.
          Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do
          czego on służy.
        </p>
        <p className={styles.privacy_nav}>6. Logi Administratora</p>
        <p>
          Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu.
          Dane te są wykorzystywane w celu administrowania serwisem.
        </p>
        <p className={styles.privacy_nav}>7. Istotne techniki marketingowe</p>
        <p>
          Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google
          Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do
          operatora tej usługi danych osobowych, a jedynie zanonimizowane
          informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu
          końcowym użytkownika. W zakresie informacji o preferencjach
          użytkownika gromadzonych przez sieć reklamową Google użytkownik może
          przeglądać i edytować informacje wynikające z plików cookies przy
          pomocy narzędzia: https://www.google.com/ads/preferences/ Operator
          stosuje techniki remarketingowe, pozwalające na dopasowanie przekazów
          reklamowych do zachowania użytkownika na stronie, co może dawać
          złudzenie, że dane osobowe użytkownika są wykorzystywane do jego
          śledzenia, jednak w praktyce nie dochodzi do przekazania żadnych
          danych osobowych od Operatora do operatorom reklam. Technologicznym
          warunkiem takich działań jest włączona obsługa plików cookie. Operator
          stosuje korzysta z piksela Facebooka. Ta technologia powoduje, że
          serwis Facebook (Facebook Inc. z siedzibą w USA) wie, że dana osoba w
          nim zarejestrowana korzysta z Serwisu. Bazuje w tym wypadku na danych,
          wobec których sam jest administratorem, Operator nie przekazuje od
          siebie żadnych dodatkowych danych osobowych serwisowi Facebook. Usługa
          bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika.
          Operator stosuje rozwiązanie badające zachowanie użytkowników poprzez
          tworzenie map ciepła oraz nagrywanie zachowania na stronie. Te
          informacje są anonimizowane zanim zostaną przesłane do operatora
          usługi tak, że nie wie on jakiej osoby fizycznej one dotyczą. W
          szczególności nagrywaniu nie podlegają wpisywane hasła oraz inne dane
          osobowe. Operator stosuje rozwiązanie automatyzujące działanie Serwisu
          w odniesieniu do użytkowników, np. mogące przesłać maila do
          użytkownika po odwiedzeniu konkretnej podstrony, o ile wyraził on
          zgodę na otrzymywanie korespondencji handlowej od Operatora. Operator
          może stosować profilowanie w rozumieniu przepisów o ochronie danych
          osobowych
        </p>
        <p className={styles.privacy_nav}> 8. Informacja o plikach cookies</p>
        <p>
          Serwis korzysta z plików cookies. Pliki cookies (tzw. „ciasteczka”)
          stanowią dane informatyczne, w szczególności pliki tekstowe, które
          przechowywane są w urządzeniu końcowym Użytkownika Serwisu i
          przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies
          zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas
          przechowywania ich na urządzeniu końcowym oraz unikalny numer.
          Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu
          pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.
          Pliki cookies wykorzystywane są w następujących celach: utrzymanie
          sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik
          nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i
          hasła; realizacji celów określonych powyżej w części - Istotne
          techniki marketingowe; W ramach Serwisu stosowane są dwa zasadnicze
          rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe”
          (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które
          przechowywane są w urządzeniu końcowym Użytkownika do czasu
          wylogowania, opuszczenia strony internetowej lub wyłączenia
          oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies
          przechowywane są w urządzeniu końcowym Użytkownika przez czas
          określony w parametrach plików cookies lub do czasu ich usunięcia
          przez Użytkownika. Oprogramowanie do przeglądania stron internetowych
          (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza
          przechowywanie plików cookies w urządzeniu końcowym Użytkownika.
          Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie.
          Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe
          jest także automatyczne blokowanie plików cookies Szczegółowe
          informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki
          internetowej. Ograniczenia stosowania plików cookies mogą wpłynąć na
          niektóre funkcjonalności dostępne na stronach internetowych Serwisu.
          Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu
          wykorzystywane mogą być również przez współpracujące z operatorem
          Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc.
          z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter
          (Twitter Inc. z siedzibą w USA).
        </p>
        <p className={styles.privacy_nav}>
          9.Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?
        </p>
        <p>
          Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić
          ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików
          cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa,
          utrzymania preferencji użytkownika może utrudnić, a w skrajnych
          przypadkach może uniemożliwić korzystanie ze stron www W celu
          zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę
          internetową, której używasz i postępuj zgodnie z instrukcjami:
        </p>
        <br />
        <Link
          to={
            "https://support.microsoft.com/pl-pl/microsoft-edge/wy%C5%9Bwietlanie-i-usuwanie-historii-przegl%C4%85darki-w-programie-microsoft-edge-00cf7943-a9e1-975a-a33d-ac10ce454ca4"
          }
        >
          Edge
        </Link>
        <br />
        <Link
          to={
            "https://support.microsoft.com/pl-pl/topic/jak-usun%C4%85%C4%87-pliki-cookie-w-programie-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
          }
        >
          Internet Explorer
        </Link>
        <br />
        <Link to={"https://support.google.com/chrome/answer/95647?hl=pl"}>
          Chrome
        </Link>
        <br />
        <Link to={"https://support.apple.com/pl-pl/guide/safari/sfri11471/mac"}>
          Safari
        </Link>
        <br />
        <Link
          to={
            "https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop?redirectslug=W%C5%82%C4%85czanie+i+wy%C5%82%C4%85czanie+obs%C5%82ugi+ciasteczek&redirectlocale=pl"
          }
        >
          FireFox
        </Link>
        <br />
        <p>Urządzenia mobilne:</p>
        <Link to={"https://support.google.com/chrome/answer/95647?hl=pl"}>
          Android
        </Link>
        <br />
        <Link to={"https://support.apple.com/pl-pl/105082"}>Safari (iOS)</Link>
        <br />
        <Link
          to={
            "https://support.microsoft.com/pl-pl/windows/windows-phone-7-3ebc303c-59c0-d367-3995-f258b184fabb"
          }
        >
          Windows Phone
        </Link>
      </div>
    </TabStyle>
  );
}
