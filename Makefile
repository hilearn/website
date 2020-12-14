PROJECT=team-website
ifeq ($(OS),Windows_NT)
	PYTHON=py
	PYTHON_VERSION=py
else
  PYTHON=python3.8
  PYTHON_VERSION=$(shell ${PYTHON} --version 2>&1 | cut -c 8-10)
endif
venv_name = py${PYTHON_VERSION}-${PROJECT}
venv = .venv/${venv_name}


# Commands that activate and run virtual environment versions.
ifeq ($(OS),Windows_NT)
	_bin = Scripts
	_python = ${venv}/${_bin}/python.exe
	_pip = ${venv}/${_bin}/pip.exe
else
	_bin = bin
	_python = ${venv}/${_bin}/python
	_pip = ${venv}/${_bin}/pip
endif

default: update_venv
.PHONY: default

${_pip}: requirements.txt
	${PYTHON} -m venv ${venv}
	${_pip} install --upgrade pip --cache .tmp/
	${_pip} install -r requirements.txt --cache .tmp/

update_venv: requirements.txt ${_pip}
	${_pip} install -r requirements.txt --cache .tmp/
	@rm -rf .venv/current
	@ln -s ${venv_name} .venv/current
	@echo Success, to activate the development environment, run:
	@echo ". .venv/current/${_bin}/activate"
.PHONY: update_venv


submodules:
	git submodule update --init --recursive
.PHONY: submodules


pull:
	git pull origin master
	git submodule update --init --recursive
.PHONY: pull


update_submodules:
	git submodule update --remote
.PHONY: update_submodules


livetest: LOGGING_LEVEL=ERROR
livetest:
	PYTHONPATH=. LOGGING_LEVEL=INFO FLASK_ENV=livetest python -m pytest tests/ria_converter/test_v2.py -W 'ignore::DeprecationWarning' --timeout=5 --timeout-method=thread
.PHONY: livetest


test: LOGGING_LEVEL=ERROR
test:
ifeq ($(second), $(word 2, $(MAKECMDGOALS)))
	coverage erase
	PYTHONPATH=. LOGGING_LEVEL=INFO FLASK_ENV=unittest python -m pytest --doctest-modules --cov=. --cov-report= --durations=10 tests flask_app -W 'ignore::DeprecationWarning'
	@echo "#####################"
	@echo "##       OK        ##"
	@echo "#####################"
else
	PYTHONPATH=. FLASK_ENV=unittest python -m pytest --doctest-modules $(word 2, $(MAKECMDGOALS)) --durations=0 --capture=no
endif
