import style from "./card.module.scss";

export function Card(props) {
    return (

        <div className={style["card-item"]}>
            <div className={style["card-info"]}>
                <h1>{props.content.name}</h1>
                <h2 className={style['card-detail']}>{props.content.college}</h2>
                <h3 className={style['card-detail']}>Department : {props.content.department}</h3>
                <h3 className={style['card-detail']}>Domain : {props.content.interestedDomain}</h3>
                <h3 className={style["card-detail"]}>Year : {props.content.year}</h3>
                <h3 className={style['card-detail']}>{props.content.contact}</h3>
                <p>{props.content.description}</p>
                <p>{props.content.email}</p>
                <a className={style['card-link']} href={props.content.linkedin}>Linkdin</a>
                 <div className={style["button-group"]}>
                    <button className={style["button-edit"]}>URL</button>
                    <button className={style["button-delete"]}>Delete</button>
                  </div>
            </div>

        </div>
    );
}