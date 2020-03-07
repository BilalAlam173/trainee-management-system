import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { getAllBatches } from '../../services/batch-list.service';
// import tileData from './tileData';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: '100%',
            height: '100%',
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }),
);
const tileData = getAllBatches();

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export function BatchList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} cols={12} className={classes.gridList}>
                <GridListTile key="Subheader" cols={12} style={{ height: 'auto' }}>
                    <ListSubheader component="div">PNS Jauhar Current Batches</ListSubheader>
                </GridListTile>
                {tileData.map((tile: any) => (
                    <GridListTile key={tile.img} cols={3}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>Trainees: {tile.count}, available: {tile.available}</span>}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
