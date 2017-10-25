<Dialog open={this.state.openDialog}>
    <DialogTitle>{this.props.name}</DialogTitle>
    <DialogContent>
        <label className="feedback-label">Ispunjena očekivanja: </label>
        <ReactStars size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
            value={this.state.expectation}
            onChange={this.expectationChanged.bind(this)}
        />
        <label className="feedback-label">Pripremljenost predavača: </label>
        <ReactStars size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
            value={this.state.readiness}
            onChange={this.readinessChanged.bind(this)}
        />
        <label className="feedback-label">Metod predavanja: </label>
        <ReactStars size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
            value={this.state.understandable}
            onChange={this.understandableChanged.bind(this)}
        />
        <label className="feedback-label">Razumljivost predavanja: </label>
        <ReactStars size={32} half={false} color2={'#F15A2B'} color1={'#407492'}
            value={this.state.method}
            onChange={this.methodChanged.bind(this)}
        />
        <Textfield floatingLabel onChange={this.handleFeedbackText.bind(this)} label="Dodatne sugestije ili kritike" rows={1} />
    </DialogContent>
    <DialogActions>
        <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
        <Button type='button' onClick={this.postFeedback}>Submit</Button>
    </DialogActions>
</Dialog>