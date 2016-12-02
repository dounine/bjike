<li>
                [field:image/]
                <div class="list_a">
                    <a href="[field:arcurl/]" >
                        <h2>[field:title/]</h2>
                    </a>
                    <a href="[field:arcurl/]" >
                        <p>
						[field:description/]
                        </p>
                    </a>
                </div>
                <div class="readcount">
                    <div class="_date">
                        [field:pubdate function=MyDate('Y-m',@me)/] <p>[field:pubdate function=MyDate('d',@me)/]</p>
                    </div>
                    <div class="looktime">查看：<span>[field:click/]</span>次</div>
                </div>
            </li>