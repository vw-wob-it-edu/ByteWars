import React from 'react';
import './leaderboard.css';

function Leaderboard() {
    const users = [
      { name: 'John', points: 100 },
      { name: 'Alice', points: 90 },
      { name: 'Bob', points: 80 },
      { name: 'Eve', points: 70 },
    ];
  
    return (
        <div class="container">
		<div class="leaderboard">
			<div class="head">
				<i class="fas fa-crown"></i>
				<h1>
                    Coding leaderboard
                </h1>
			</div>
			<div class="body">
				
					<li>
						<mark>Jerry Wood</mark>
						<small>948</small>
					</li>
					<li>
						<mark>Brandon Barnes</mark>
						<small>750</small>
					</li>
					<li>
						<mark>Raymond Knight</mark>
						<small>684</small>
					</li>
					<li>
						<mark>Trevor McCormick</mark>
						<small>335</small>
					</li>
					<li>
						<mark>Andrew Fox</mark>
						<small>296</small>
					</li>
				
			</div>
		</div>
	</div>
    );
  }
  
  export default Leaderboard;