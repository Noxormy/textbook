import React from "react"
import "./index.sass"
import {Card} from "../../components/Card"


function Articles() {
    return (
        <div className="articles">
            <Card link="/articles/german-policeman"
                cover="https://gumlet.assettype.com/wuzupnigeria%2F2022-01%2Ff21f0ecd-09b9-46a2-b478-cb8820e045f5%2FPOLIZEI.jpg?format=auto"
                alt="cover"
                title="German Policeman"
                description="How to talk with the police"/>
            <Card link="/articles/german-policeman"
                alt="cover"
                title="German Policeman"
                description="How to talk with the police"/>
            <Card link="/articles/german-policeman"
                alt="cover"
                title="German Policeman"
                description="How to talk with the police"/>
            <Card link="/articles/german-policeman"
                alt="cover"
                title="German Policeman"
                description="How to talk with the police"/>
            <Card link="/articles/german-policeman"
                alt="cover"
                title="German Policeman"
                description="How to talk with the police"/>
        </div>
    )
}

export {Articles}
