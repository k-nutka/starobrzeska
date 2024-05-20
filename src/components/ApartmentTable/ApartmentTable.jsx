import styles from "./ApartmentTable.module.css";

export function ApartmentTable({ rooms }) {
  return (
    <div className={styles.apartmentTable_container}>
      <table>
        <thead>
          <tr>
            <th>Pomieszczenie</th>
            <th>
              Powierzchnia [m<sup>2</sup>]
            </th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.name}>
              <td>{room.name}</td>
              <td>{room.area}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
