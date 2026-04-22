import type { SVGProps } from 'react';

enum Cell {
  Empty = 0,
  Filled = 1
}

interface MatrixGridProps extends SVGProps<SVGSVGElement> {
  /**
   * Each inner array represents a row of the grid, whereas each number represents a cell. A value of `1` indicates a filled cell, while `0` indicates an empty cell.
   * @example
   * [
   *   [0, 1, 0],
   *   [1, 1, 1],
   *   [0, 1, 0]
   * ]
   */
  matrix: Cell[][];
  /**
   * Size of each cell in pixels.
   * @default 20
   */
  size?: number;
}

export const MatrixGrid = ({ matrix, size = 20, ...props }: MatrixGridProps) => {
  const height = matrix.length * size;
  const width = matrix.reduce((max, row) => Math.max(max, row.length), 0) * size;

  const d = matrix
    .flatMap((row, y) =>
      row.flatMap((cell, x) => (cell ? `M${x * size} ${y * size}h${size}v${size}h-${size}Z` : []))
    )
    .join(' ');

  return (
    <svg
      aria-hidden='true'
      fill='currentColor'
      height={height}
      shapeRendering='crispEdges'
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path d={d} />
    </svg>
  );
};
