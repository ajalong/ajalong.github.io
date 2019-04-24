import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  card: {
    width: 630
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

class SurcapDefCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Surveillance Capitalism"
          subheader="/səˈveɪl(ə)ns,səˈveɪənsˈkapɪt(ə)lɪz(ə)m/"
        />
        <CardContent>
          <Typography component="p">
            A global system of behaviour modification that threatens human
            nature in the twenty-first century just as industrial capitalism
            disfigured the natural world in the twentieth.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <Button
            size="small"
            className={classnames(classes.expand)}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            Learn More
          </Button>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Surveillance capitalism unilaterally claims human experience as
              free raw material for translation into behavioural data. Although
              some of these data are applied to product or service improvement,
              the rest are declared as a proprietary behavioural surplus, fed
              into an advanced manufacturing processes known as “machine
              intelligence” and fabricated into prediction products that
              anticipate what you will do now, soon, and later. Finally these
              prediction products are traded in a new kind of marketplace for
              behavioural predictions that I call behavioural futures markets.
              Surveillance capitalists have grown immensely wealthy from these
              trading operations, for many companies are eager to lay bets on
              our future behaviour.
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              The Age of Surveillance Capitalism - Shoshana Zuboff, page 8
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

SurcapDefCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SurcapDefCard);
