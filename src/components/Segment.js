import React from 'react';
import { Row, Button, ButtonGroup } from 'react-bootstrap';
import './Segment.scss'

class Segment extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            client: false,
            digital: true,
            all: false,
            female: true,
            male: false,
        }

        this.handleClickPay = this.handleClickPay.bind(this);
        this.handleClickAll = this.handleClickAll.bind(this);
        this.handleClickFemale = this.handleClickFemale.bind(this);
        this.handleClickMale = this.handleClickMale.bind(this)
        this.choice = this.choice.bind(this);
    }

    handleClickPay() {
        if (!this.state.client) {
            this.setState({
                client: true,
                digital: false
            })
        }
        if (!this.state.digital) {
            this.setState({
                digital: true,
                client: false
            })
        }
    }
    handleClickAll() {
        if (!this.state.all) {
            this.setState({
                all: true,
                female: false,
                male: false
            })
        }
    }
    handleClickFemale() {
        if (!this.state.female) {
            this.setState({
                female: true,
                all: false,
                male: false
            })
        }
    }
    handleClickMale() {
        if (!this.state.male) {
            this.setState({
                male: true,
                all: false,
                female: false,
            })
        }
    }

    choice(bool) {
        switch (bool) {
            case true:
                return "secondary";
            case false:
                return "light";
            default:
                return 'default';
        }
    }
    render() {
        const { client, digital, all, female, male } = this.state;

        return (
            <div className="segment">
                <Row><span className="title">Paid for by</span></Row>
                <Row>
                    <ButtonGroup>
                        <Button variant={this.choice(client)} onClick={this.handleClickPay}>Client</Button>
                        <Button variant={this.choice(digital)} onClick={this.handleClickPay} className="Valassis">Valassis Digital</Button>
                    </ButtonGroup>
                </Row>
                <Row><span className="title">Gender</span></Row>
                <Row>
                    <ButtonGroup>
                        <Button variant={this.choice(all)} onClick={this.handleClickAll} >All</Button>
                        <Button variant={this.choice(female)} onClick={this.handleClickFemale} >Female</Button>
                        <Button variant={this.choice(male)} onClick={this.handleClickMale} >Male</Button>
                    </ButtonGroup>
                </Row>
            </div>
        );
    }
}
export default Segment;