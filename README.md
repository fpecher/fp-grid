# fp-grid
This is a simple grid system based ob BEM.

## .container
Simply add <code>.container</code> to your site to wrap everything. If you want to have a fullwidth container use <code>.container--fullwidth</code>.

## .row
The usage of the <code>.row</code> is pretty simple. Just add it before using the <code>.column</code>. Otherwise the grid won't work correctly. You can extend the <code>.row</code> with <code>.row--flex</code>, so the inner columns have the equal height.

| supported class names |
| :------------- |
| row   |
| row--flex   |

## .column
Like all the other grid systems simply add <code>.column</code> as the basic class name and then you can extend this class with the class you need. The schema is like: <code>.column--WIDTH</code>.

| supported class names |
| :------------- |
| column--12   |
| column--11   |
| column--10   |
| column--9    |
| column--8    |
| column--7    |
| column--6    |
| column--5    |
| column--4    |
| column--3    |
| column--2    |
| column--1    |
| column--auto |


## variables.scss
In the variables.scss you can overwrite all the necessary stuff. The <b>breakpoints map</b> defines your breakpoints. the <b>container map</b> is for the wrapping page container and the <b>spacings map</b> is for the padding of the columns and margins of the rows.
